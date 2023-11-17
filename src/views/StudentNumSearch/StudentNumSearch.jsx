// NPM ////////////////////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

// FIREBASE ////////////////////////////////////////////////////////////////////////////////////////////////////
import { database } from "../../firebase";
import { onValue, ref } from "firebase/database";

// COMPONENTS ////////////////////////////////////////////////////////////////////////////////////////////////////

// IMPORTED FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////
import { changeSavedExams } from "../../app/classesSlice";
import {
  changeExamsThatStudentIn,
  changeStudentNumber,
} from "../../app/studentsSlice";

const Component = () => {
  // VARS ////////////////////////////////////////////////////////////////////////////////////////////////////
  const dispatch = useDispatch();
  const savedExams = Object.values(
    useSelector((state) => state.classesSlice.savedExams)
  );
  const [studentNumber, setStudentNumber] = useState(null);

  // FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    onValue(ref(database, "savedExams"), (snapshot) =>
      dispatch(changeSavedExams(snapshot.val()))
    );
  }, []);

  const search = () => {
    const sendTheseExams = [];
    let isStudentHasExam = false;
    savedExams.forEach((exam, examIndex) => {
      exam.seatedStudents.forEach((c, classIndex) => {
        c.forEach((student) => {
          if (student.ogrNo == studentNumber) {
            sendTheseExams.push([
              exam.examInfos,
              student.isim,
              savedExams[examIndex].selectedClasses[classIndex].sinif,
            ]);
            isStudentHasExam = true;
          }
        });
      });
    });
    dispatch(changeExamsThatStudentIn(sendTheseExams));
    if (isStudentHasExam) {
      dispatch(changeStudentNumber(studentNumber));
      isStudentHasExam = false;
    }
  };
  /* JSX HTML ////////////////////////////////////////////////////////////////////////////////////////////////////*/ return (
    <>
      <Container>
        <Content>
          <Input
            type="text"
            placeholder="Okul Numaranızı Giriniz.."
            onChange={(e) => setStudentNumber(e.target.value)}
          />
          <Link to="/student-result">
            <Button onClick={search}>SORGULA</Button>
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
  justify-content: space-evenly;
  align-items: center;
`;

const Content = styled.div`
  width: 1500px;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Input = styled.input`
  width: 500px;
  height: 75px;
  text-align: center;
  font-size: 30px;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 500px;
  height: 75px;
  font-size: 30px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  border-radius: 5px;
`;
