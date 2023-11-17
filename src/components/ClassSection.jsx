// NPM ////////////////////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

// FIREBASE ////////////////////////////////////////////////////////////////////////////////////////////////////
import { onValue, ref } from "firebase/database";
import { database } from "../firebase";

// COMPONENTS ////////////////////////////////////////////////////////////////////////////////////////////////////

// IMPORTED FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////
import { fetchClasses, handleSelectedClasses } from "../app/classesSlice";

const Component = () => {
  // VARS ////////////////////////////////////////////////////////////////////////////////////////////////////
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.classesSlice.classes);

  // FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    onValue(ref(database, "classes"), (snapshot) =>
      dispatch(fetchClasses(snapshot.val()))
    );
  }, []);

  const colorMaker = (num) =>
    num % 2 == 0 ? "var(--color8)" : "var(--color9)";

  /* JSX HTML ////////////////////////////////////////////////////////////////////////////////////////////////////*/ return (
    <>
      <Container>
        <Table>
          <thead>
            <tr key="0">
              <th>Sınıf No</th>
              <th>Kapasite</th>
              <th>Seç</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((e, i) => (
              <tr style={{ backgroundColor: colorMaker(i) }} key={i}>
                <td>{e.sinif}</td>
                <td>{e.kapasite}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => dispatch(handleSelectedClasses(e))}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Component;

// STYLED COMPONENTS ////////////////////////////////////////////////////////////////////////////////////////////////////
const Container = styled.div`
  height: 300px;
  width: 80%;
  border: 2px solid black;
  border-radius: 5px;
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
