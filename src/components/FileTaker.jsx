// NPM ////////////////////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as xlsx from "xlsx";

// FIREBASE ////////////////////////////////////////////////////////////////////////////////////////////////////

// COMPONENTS ////////////////////////////////////////////////////////////////////////////////////////////////////

// IMPORTED FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////
import { changeStudentsList } from "../app/studentsSlice";
import { getExamInfos, changeShowExtraction } from "../app/classesSlice";
import {
  fileFormatControl,
  makingStudentsListFromSheetData,
  formatTransformer,
} from "../utils/necessaryFuncs";

const Component = () => {
  // VARS ////////////////////////////////////////////////////////////////////////////////////////////////////
  const dispatch = useDispatch();
  const [excelData, setExcelData] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [whichSide, setWhichSide] = useState(0);

  // FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////
  const takeExcelFile = (e) => {
    setFileName(e.target.files[0].name);
    let reader = new FileReader();
    reader.readAsArrayBuffer(e.target.files[0]);
    reader.onload = (e) => {
      setExcelData(e.target.result);
    };
    setWhichSide(1);
  };

  const readExcelData = () => {
    const workbook = xlsx.read(excelData, { type: "buffer" });
    const worksheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[worksheetName];

    if (fileFormatControl(worksheet)) {
      dispatch(
        getExamInfos({
          lesson: worksheet.G1.v,
          teacher: worksheet.G2.v,
          type: worksheet.G3.v,
          date: formatTransformer(worksheet.G4.w),
          hour: worksheet.G5.w,
        })
      );
      const sheetData = xlsx.utils.sheet_to_json(worksheet, {
        header: 1,
        defval: "",
      });
      const studentsList = makingStudentsListFromSheetData(sheetData);
      dispatch(changeStudentsList(studentsList));
    } else {
      alert("Bu Dosya İstenilen Formatta Değil!");
    }
  };
  /* JSX HTML ////////////////////////////////////////////////////////////////////////////////////////////////////*/ return whichSide ==
    0 ? (
    <Container>
      <Text>Excel Dosyanızı Seçiniz..</Text>
      <FileInput type="file" onChange={takeExcelFile} />
    </Container>
  ) : whichSide == 1 ? (
    <Container2>
      <QuestionPart>
        <h4>Dosyanızdan Emin misiniz?</h4>
      </QuestionPart>
      <Buttons>
        <No onClick={() => setWhichSide(0)}>İptal Et</No>
        <Yes
          onClick={() => {
            setWhichSide(2);
            readExcelData();
          }}
        >
          Devam Et
        </Yes>
      </Buttons>
    </Container2>
  ) : (
    <Container3>
      <FileNamePart>
        <span>Seçili Dosya: {fileName}</span>
      </FileNamePart>
      <ChooseAnotherButton
        onClick={() => {
          setWhichSide(0);
          dispatch(changeShowExtraction(false));
        }}
      >
        Farklı Dosya Seç
      </ChooseAnotherButton>
    </Container3>
  );
};

export default Component;

// STYLED COMPONENTS ////////////////////////////////////////////////////////////////////////////////////////////////////

const Container = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color7);
  border-radius: 10px;
  margin-left: 50px;
`;

const Text = styled.div`
  position: absolute;
  font-size: 20px;
`;

const FileInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
  &:hover {
    cursor: pointer;
  }
`;

const Container2 = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #305030;
  border-radius: 10px;
  margin-left: 50px;
  h4 {
    color: var(--color1);
  }
`;

const QuestionPart = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.div`
  width: 70%;
  height: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Yes = styled.button`
  width: 75px;
  height: 25px;
`;

const No = styled.button`
  width: 75px;
  height: 25px;
`;

const Container3 = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color7);
  border-radius: 10px;
  margin-left: 50px;
`;

const FileNamePart = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;

const ChooseAnotherButton = styled.button`
  width: 150px;
  height: 30px;
`;
