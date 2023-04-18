// NPM ////////////////////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

// FIREBASE ////////////////////////////////////////////////////////////////////////////////////////////////////

// COMPONENTS ////////////////////////////////////////////////////////////////////////////////////////////////////
import FileTaker from "../../../components/FileTaker";
import StudentsDataGrid from "../../../components/StudentsDataGrid";
import ClassSection from "../../../components/ClassSection";
import ExtractSection from "../../../components/ExtractSection";

// IMPORTED FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////
import { isThereEnoughSpace } from "../../../utils/necessaryFuncs";
import { changeShowExtraction } from "../../../app/classesSlice";

const Component = () => {
  // VARS ////////////////////////////////////////////////////////////////////////////////////////////////////
  const dispatch = useDispatch();
  const selectedClasses = useSelector(
    (state) => state.classesSlice.selectedClasses
  );
  const students = useSelector((state) => state.studentsSlice.studentsList);

  // FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////
  const tryContinue = () => {
    if (isThereEnoughSpace(students, selectedClasses)) {
      dispatch(changeShowExtraction(true));
    } else {
      alert(
        `Seçilen Sınıfların Kapasitesi ${students.length} Öğrenci İçin Yeterli Değil!`
      );
    }
  };

  /* JSX HTML ////////////////////////////////////////////////////////////////////////////////////////////////////*/ return (
    <>
      <Container>
        <Content>
          <LeftSection>
            <FileTaker />
            <StudentsDataGrid />
          </LeftSection>
          <RightSection>
            <ClassSection />
            {selectedClasses.length > 0 && students.length > 0 ? (
              <ContinueButton onClick={tryContinue}>
                <span>Devam Et</span>
              </ContinueButton>
            ) : (
              <Empty />
            )}
            <ExtractSection />
          </RightSection>
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
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 1500px;
  height: 800px;
  background-color: var(--color5);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
`;

const LeftSection = styled.div`
  width: 600px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RightSection = styled.div`
  width: 350px;
  height: 600px;
  // border: 5px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ContinueButton = styled.div`
  -webkit-user-select: none;
  width: 200px;
  height: 100px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Empty = styled.div`
  width: 200px;
  height: 100px;
`;
