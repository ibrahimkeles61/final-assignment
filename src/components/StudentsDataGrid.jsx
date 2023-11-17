// NPM ////////////////////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

// FIREBASE ////////////////////////////////////////////////////////////////////////////////////////////////////
import { onValue, ref } from "firebase/database";
import { database } from "../firebase.js";
// COMPONENTS ////////////////////////////////////////////////////////////////////////////////////////////////////

// IMPORTED FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////

const Component = () => {
  // VARS ////////////////////////////////////////////////////////////////////////////////////////////////////
  const students = useSelector((state) => state.studentsSlice.studentsList);

  // FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////
  const colorMaker = (num) =>
    num % 2 == 1 ? "var(--color8)" : "var(--color9)";

  /* JSX HTML ////////////////////////////////////////////////////////////////////////////////////////////////////*/ return (
    <>
      <Container>
        {students.length == 0 ? (
          <p>Burada Seçtiğiniz Dosyadaki Öğrenciler Gösterilecektir..</p>
        ) : (
          <Table>
            <thead>
              <tr key="0">
                <th>SN</th>
                <th>Ögr. No.</th>
                <th>Ad Soyad</th>
              </tr>
            </thead>
            <tbody>
              {students.map((e, i) => (
                <tr style={{ backgroundColor: colorMaker(i) }} key={i}>
                  <td>{e.sn}</td>
                  <td>{e.ogrNo}</td>
                  <td>{e.isim}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
};

export default Component;

// STYLED COMPONENTS ////////////////////////////////////////////////////////////////////////////////////////////////////
const Container = styled.div`
  height: 550px;
  width: 600px;
  border: 2px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const Table = styled.table`
  width: 100%;
  font-size: 20px;
  text-align: center;
`;
