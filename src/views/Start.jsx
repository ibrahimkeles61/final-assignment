// NPM ////////////////////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
/* <Link to={"/admin-choice"}></Link> */
import styled from "styled-components";

// FIREBASE ////////////////////////////////////////////////////////////////////////////////////////////////////
import { set, ref } from "firebase/database";
import { database } from "../firebase";
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
        <Content>
          <Link style={linkStyle} to="/admin-choice">
            <Admin>Yönetici</Admin>
          </Link>
          <Divider />
          <Link style={linkStyle} to="/student-num-search">
            <Student>Öğrenci</Student>
          </Link>
        </Content>
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

const Content = styled.div`
  height: 800px;
  width: 1500px;
  background-color: var(--color5);
  border-radius: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Admin = styled.div`
  height: 800px;
  width: 745px;
  border-radius: 50px 0 0 50px;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  border: 5px solid black;
`;

const Divider = styled.div`
  height: 800px;
  width: 10px;
  background-color: black;
`;

const Student = styled.div`
  height: 800px;
  width: 745px;
  border-radius: 0 50px 50px 0;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  border: 5px solid black;
`;

{
  /* <Link to="/">
          <button>Ana Sayfa</button>
        </Link>
        <Link to="/admin-choice">
          <button>Yönetici Ekranı</button>
        </Link>
        <Link to="/">
          <button>Kayıtlı Sınavlar</button>
        </Link>
        <Link to="/">
          <button>Yeni Sınav Oluştur</button>
        </Link>
        <Link to="/">
          <button>Öğrenci Sorgulama</button>
        </Link>
        <Link to="/">
          <button>Öğrenci Sonuç</button>
        </Link> */
}
