// NPM ////////////////////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as XLSX from "xlsx";

// FIREBASE ////////////////////////////////////////////////////////////////////////////////////////////////////

// COMPONENTS ////////////////////////////////////////////////////////////////////////////////////////////////////

// IMPORTED FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////
import {
  shuffle,
  studentOrganizer,
  saveNewExamOnFirebase,
} from "../utils/necessaryFuncs";
import { changeShowExtraction } from "../app/classesSlice";

const Component = () => {
  // VARS ////////////////////////////////////////////////////////////////////////////////////////////////////
  const dispatch = useDispatch();
  const showExtraction = useSelector(
    (state) => state.classesSlice.showExtraction
  );
  const examInfos = useSelector((state) => state.classesSlice.examInfos);
  const shuffledStudents = shuffle(
    useSelector((state) => state.studentsSlice.studentsList)
  );
  const selectedClasses = useSelector(
    (state) => state.classesSlice.selectedClasses
  );
  // const tableRef = useRef(null); //these are just reminders
  // const tableRef = {
  //   current: [],
  // };
  const tableRefs = selectedClasses.map(() => {
    return {
      current: [],
    };
  });

  const seatedStudents = studentOrganizer(selectedClasses, shuffledStudents);

  // FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////
  const exportExcelFile = () => {
    selectedClasses.forEach((e, i) => {
      const table = tableRefs[i].current;
      var workbook = XLSX.utils.table_to_book(table, { sheet: "Sayfa1" });
      XLSX.writeFile(
        workbook,
        `${examInfos.lesson} ${examInfos.type} ${e.sinif} Numaralı Sınıf.xlsx`
      );
    });
    dispatch(changeShowExtraction(false));
    saveNewExamOnFirebase(selectedClasses, seatedStudents, examInfos);
  };

  /* JSX HTML ////////////////////////////////////////////////////////////////////////////////////////////////////*/
  return showExtraction ? (
    <>
      <Container onClick={exportExcelFile}>Excel Dosyası Oluştur</Container>

      {selectedClasses.map((e, i) => (
        <table
          ref={tableRefs[i]}
          style={{ display: "none", textAlign: "center" }}
          key={i}
        >
          <thead>
            <tr>
              <th colSpan={"4"}>
                Kırklareli Üniversitesi <br />
                {examInfos.lesson} {examInfos.type}
                <br />
                {examInfos.date} {examInfos.hour}
                <br />
                {examInfos.teacher}
                <br />
                {e.sinif} Numaralı Sınıf
              </th>
            </tr>
            <tr key="0">
              <th>Sıra No</th>
              <th>Ögrenci No</th>
              <th>Ad Soyad</th>
              <th>İmza</th>
            </tr>
          </thead>
          <tbody>
            {seatedStudents[i].map((e, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.ogrNo}</td>
                <td>{e.isim}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </>
  ) : (
    <>
      <Empty />
    </>
  );
};

export default Component;

// STYLED COMPONENTS ////////////////////////////////////////////////////////////////////////////////////////////////////
const Container = styled.div`
  -webkit-user-select: none;
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color7);
  font-size: 20px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Empty = styled.div`
  width: 200px;
  height: 100px;
  border-radius: 20px;
`;

const Table = styled.div``;
