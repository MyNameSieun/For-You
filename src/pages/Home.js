import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "components/Sidebar";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar></Sidebar>
    </>
  );
}

export default Home;
