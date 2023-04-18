// NPM ////////////////////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as XLSX from "xlsx";

// FIREBASE ////////////////////////////////////////////////////////////////////////////////////////////////////
import { database } from "../../../firebase";
import { onValue, ref, remove } from "firebase/database";

// COMPONENTS ////////////////////////////////////////////////////////////////////////////////////////////////////

// IMPORTED FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////
import { changeSavedExams } from "../../../app/classesSlice";

const Component = () => {
  // VARS ////////////////////////////////////////////////////////////////////////////////////////////////////
  const dispatch = useDispatch();
  const [exportButton, setExportButton] = useState(1);
  const savedExams = Object.values(
    useSelector((state) => state.classesSlice.savedExams)
  );

  const [excelTableExam, setExcelTableExam] = useState({});

  const tableRefs = excelTableExam?.selectedClasses?.map(() => {
    return {
      current: [],
    };
  });

  // FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    onValue(ref(database, "savedExams"), (snapshot) =>
      dispatch(changeSavedExams(snapshot.val()))
    );
  }, []);

  const deleteExam = (exam) => {
    if (
      window.confirm(
        `${exam.examInfos.lesson} ${exam.examInfos.type}nı Silmek İstediğinizden Emin Misiniz?`
      )
    ) {
      remove(
        ref(
          database,
          `savedExams/${exam.examInfos.lesson} ${exam.examInfos.type}`
        )
      );
    }
    // else if (savedExams.length == 1)
    //   alert("Malesef Veri Tabanında En Az Bir Sınav Kayıtlı Olmalıdır");
  };

  const takeExcelTableExam = (exam) => {
    setExcelTableExam(exam);
    setExportButton(2);
  };

  const exportExcelFile = (exam) => {
    excelTableExam?.selectedClasses.forEach((e, i) => {
      const table = tableRefs[i].current;
      var workbook = XLSX.utils.table_to_book(table, { sheet: "Sayfa1" });
      XLSX.writeFile(
        workbook,
        `${excelTableExam?.examInfos.lesson} ${excelTableExam?.examInfos.type} ${e.sinif} Numaralı Sınıf.xlsx`
      );
    });
    setExportButton(1);
  };

  /* JSX HTML ////////////////////////////////////////////////////////////////////////////////////////////////////*/ return (
    <>
      <Container>
        <h1>PLANLANMIŞ SINAVLAR</h1>
        <Content>
          {savedExams.length > 0 ? (
            <Table>
              <tbody>
                {savedExams.map((exam, i) => (
                  <Tr key={i}>
                    <td>
                      {exam.examInfos.lesson} {exam.examInfos.type}
                    </td>
                    <Buttons>
                      <DeleteButton onClick={() => deleteExam(exam)}>
                        Sil
                      </DeleteButton>
                      {exportButton == 1 ? (
                        <GetReadyButton
                          onClick={() => takeExcelTableExam(exam)}
                        >
                          Excel Dosyası Hazırla
                        </GetReadyButton>
                      ) : (
                        <>
                          <ExportButton onClick={() => exportExcelFile(exam)}>
                            Çıkart
                          </ExportButton>
                          <CancelButton onClick={() => setExportButton(1)}>
                            İptal
                          </CancelButton>
                        </>
                      )}
                    </Buttons>
                  </Tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <h3>Kaydedilmiş Hiçbir Sınav Bulunamadı..</h3>
          )}
        </Content>
      </Container>

      {/* export table ------------------------------------------------------------------------------------------ */}

      {excelTableExam?.selectedClasses?.map((e, i) => (
        <table
          ref={tableRefs[i]}
          style={{ display: "none", textAlign: "center" }}
          key={i}
        >
          <thead>
            <tr>
              <th colSpan={"4"}>
                Kırklareli Üniversitesi <br />
                {excelTableExam?.examInfos.lesson}{" "}
                {excelTableExam?.examInfos.type}
                <br />
                {excelTableExam?.examInfos.date}{" "}
                {excelTableExam?.examInfos.hour}
                <br />
                {excelTableExam?.examInfos.teacher}
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
            {excelTableExam?.seatedStudents[i]?.map((e, i) => (
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
  height: 800px;
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const Table = styled.table`
  width: 80%;
  text-align: center;
  font-size: 30px;
`;

const Tr = styled.tr`
  background-color: #219ebc;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border-radius: 50px;
  position: relative;
`;

const Buttons = styled.td`
  width: 200px;
  height: 70px;
  position: absolute;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GetReadyButton = styled.button`
  width: 100px;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
  margin-left: 10px;
`;

const ExportButton = styled.button`
  width: 60px;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
  margin-left: 10px;
`;

const CancelButton = styled.button`
  width: 60px;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
  margin-left: 10px;
`;

const DeleteButton = styled.button`
  width: 60px;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
`;

// const Td = styled.td`
//   width:
// `;
