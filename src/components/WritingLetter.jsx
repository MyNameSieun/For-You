import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Form = styled.form`
  height: 369px;
  background-color: #ffffff;
  position: relative;
  margin: 40px 0 0 30px;
  border-radius: 13px;
  box-shadow: 0 2px 10px -7px rgba(0, 0, 0, 1);
`;
const H1 = styled.div`
  margin: 30px;
  font-weight: bold;
  font-size: 18px;
`;
const Input = styled.div`
  display: flex;
  margin: 0px 0 0 30px;

  & input {
    margin-bottom: 30px;
    width: 300px;
    height: 35px;
    border: 1px solid #bfbfbf;
    border-radius: 8px;
  }
  & textarea {
    resize: none;
    width: 985px;
    height: 126px;
    border: 1px solid #bfbfbf;
    border-radius: 8px;
  }
`;
const LetterBtn = styled.button`
  display: flex;
`;

function WritingLetter({ letters, setLetters }) {
  const [nickName, setNickName] = useState("");
  const [content, setContent] = useState("");

  const handleAddLetterBtn = (e) => {
    e.preventDefault();
    const newLetter = {
      id: uuidv4(),
      nickname: nickName,
      avatar: null,
      content,
      createdAt: new Date().toISOString(),
    };
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
