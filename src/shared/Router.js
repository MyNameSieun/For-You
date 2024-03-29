import React, { useState } from "react";
// (1) react-router-dom을 사용하기 위해서 아래 API들을 import
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Writing from "pages/Writing";
import Detail from "pages/Detail";
import fakeData from "fakeData.json";

// (2) Router 라는 함수를 만들고 아래와 같이 작성하자.
//BrowserRouter를 Router로 감싸는 이유는,
//SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어준다.
const Router = () => {
  const [letters, setLetters] = useState(fakeData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="writing/"
          element={<Writing letters={letters} setLetters={setLetters} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail letters={letters} setLetters={setLetters} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
