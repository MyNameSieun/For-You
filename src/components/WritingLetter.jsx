import { LetterContext } from "context/LetterContext";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Form = styled.form`
  width: 1160px;
  height: 369px;
  background-color: #ffffff;
  position: relative;
  margin: 40px 0 0 30px;
  border-radius: 13px;
  box-shadow: 0 2px 10px -7px rgba(0, 0, 0, 1);
  position: relative;
`;
const H1 = styled.div`
  margin: 30px;
  font-weight: bold;
  font-size: 18px;
`;
const Input = styled.div`
  display: flex;
  margin: 0px 0 0 30px;
  & label {
    margin-top: 4px;
  }
  & input {
    margin-bottom: 30px;
    width: 300px;
    height: 35px;
    border: 1px solid #bfbfbf;
    border-radius: 8px;
    margin-left: 13px;
  }
  & textarea {
    resize: none;
    width: 985px;
    height: 126px;
    border: 1px solid #bfbfbf;
    border-radius: 8px;
    margin-left: 29px;
  }
`;
const LetterBtn = styled.button`
  position: absolute;
  right: 80px;
  bottom: 23px;
  background-color: #2345f4;
  font-weight: bold;
  color: white;
  height: 40px;
  width: 90px;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
`;

function WritingLetter({ setLetters, activePeople }) {
  const { letters } = useContext(LetterContext);
  const [nickName, setNickName] = useState("");
  const [content, setContent] = useState("");

  const handleAddLetterBtn = (e) => {
    e.preventDefault();
    const newLetter = {
      id: uuidv4(),
      nickname: nickName,
      avatar: null,
      content,
      writedTo: activePeople,
      createdAt: new Date().toISOString(),
    };

    if (nickName === "") {
      alert("닉네임을 입력해주세요.");
      return;
    }
    if (content === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    setLetters([...letters, newLetter]);
    setNickName("");
    setContent("");
  };

  return (
    <Form>
      <H1>편지를 작성해주세요</H1>
      <Input>
        <label>닉네임</label>
        <input
          onChange={(e) => setNickName(e.target.value)}
          value={nickName}
          placeholder="최대 20글자까지 작성할 수 있습니다."
          maxLength={20}
        />
      </Input>
      <Input>
        <label>내용</label>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder="최대 100글자까지 작성할 수 있습니다."
          maxLength={100}
        />
      </Input>
      <LetterBtn onClick={handleAddLetterBtn}>편지 등록</LetterBtn>
    </Form>
  );
}

export default WritingLetter;
