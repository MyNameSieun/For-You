// Detail.js
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserImage from "components/common/UserImage";
import { useContext, useState } from "react";
import { LetterContext } from "context/LetterContext";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;
const DetailContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  box-shadow: 0 2px 10px -7px rgba(0, 0, 0, 1);
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 22px;
`;

const NickName = styled.div`
  font-size: 17px;
  font-weight: bold;
`;
const Content = styled.p`
  color: #7b7b7b;
  width: 440px;
  height: 600px;
  overflow-y: scroll;
  margin: 3px 0 0 25px;
`;
const CreatedAt = styled.div`
  font-size: 13px;
  color: #bebebe;
  margin-left: 10px;
  margin-top: 4px;
`;

const Button = styled.button`
  margin-right: 5px;
  ${(props) => (props.withMarginRight ? "margin-right: 33px;" : "")}
  margin-bottom: 20px;
  background-color: #1e1e1e;
  color: white;
  border-radius: 8px;
  height: 33px;
  width: 65px;
  font-size: 12px;
  cursor: pointer;
`;
const BtnsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
`;
const BackClick = styled.div`
  cursor: pointer;
  font-size: 30px;
  position: absolute;
  right: 24px;
  top: 9px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px 0 0 15px;
`;
const Hr = styled.hr`
  width: 90%;
  border: 0px;
  margin-top: 16px;
  height: 1px;
  background-color: #cccccc;
`;
const Textarea = styled.textarea`
  color: #7b7b7b;
  width: 440px;
  height: 600px;
  overflow-y: scroll;
  margin: 3px 0 0 25px;
  resize: none;
`;

function Detail() {
  const { letters, setLetters } = useContext(LetterContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { nickname, content, createdAt } = letters.find(
    (letter) => letter.id === id
  );

  const handleRemoveBtn = (id) => {
    const answer = window.confirm("정말로 삭제하시겠습니까?");
    if (!answer) return;
    const Letters = letters.filter((letter) => letter.id !== id);
    navigate("/writing"); // 이 부분 수정
    setLetters(Letters);
  };

  const onEditDone = () => {
    if (!editingText) return alert("수정사항이 없습니다.");
    const newLetters = letters.map((letter) => {
      if (letter.id === id) {
        return { ...letter, content: editingText };
      }

      return letter;
    });

    setLetters(newLetters);
    setIsEditing(false);
    setEditingText("");
  };
  return (
    <Container>
      <DetailContainer>
        <BackClick onClick={() => navigate(-1)}>x</BackClick>
        <FlexRow>
          <UserImage src={letters.avatar} />
          <NickName>{nickname}</NickName>
          <CreatedAt>{createdAt}</CreatedAt>
        </FlexRow>
        <Hr />
        {isEditing ? (
          <>
            <Textarea
              autoFocus
              defaultValue={content}
              onChange={(e) => setEditingText(e.target.value)}
            />
            <BtnsWrapper>
              <Button onClick={onEditDone}>수정완료</Button>
              <Button withMarginRight onClick={() => setIsEditing(false)}>
                취소
              </Button>
            </BtnsWrapper>
          </>
        ) : (
          <>
            <Content>{content}</Content>
            <BtnsWrapper>
              <Button onClick={() => setIsEditing(true)}>수정</Button>
              <Button withMarginRight onClick={() => handleRemoveBtn(id)}>
                삭제
              </Button>
            </BtnsWrapper>
          </>
        )}
      </DetailContainer>
    </Container>
  );
}

export default Detail;
