// NPM ////////////////////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

// FIREBASE ////////////////////////////////////////////////////////////////////////////////////////////////////

// COMPONENTS ////////////////////////////////////////////////////////////////////////////////////////////////////

// IMPORTED FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////

const Component = () => {
  // VARS ////////////////////////////////////////////////////////////////////////////////////////////////////
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  // FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////

  /* JSX HTML ////////////////////////////////////////////////////////////////////////////////////////////////////*/ return (
    <>
      <Container>
        <Link style={linkStyle} to="/saved-exams">
          <SavedExams>Planlanmış Sınavlar</SavedExams>
        </Link>
        <Link style={linkStyle} to="/save-new-exam">
          <SaveNewExam>Yeni Sınav Kaydet</SaveNewExam>
        </Link>
      </Container>
    </>
  );
};

export default Component;

// STYLED COMPONENTS ////////////////////////////////////////////////////////////////////////////////////////////////////
const Container = styled.div`
  height: 100vh;
  width: %100;
  background-color: var(--color3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SavedExams = styled.div`
  height: 100px;
  width: 1000px;
  background-color: var(--color6);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: white;
  font-size: 40px;
  &:hover {
    cursor: pointer;
  }
`;

const SaveNewExam = styled(SavedExams)`
  margin-top: 30px;
`;
