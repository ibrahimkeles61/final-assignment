// NPM ////////////////////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { saveAs } from "file-saver";

// FIREBASE ////////////////////////////////////////////////////////////////////////////////////////////////////

// COMPONENTS ////////////////////////////////////////////////////////////////////////////////////////////////////

// IMPORTED FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////

const Component = () => {
  //1160505042
  // VARS ////////////////////////////////////////////////////////////////////////////////////////////////////
  const studentNumber = useSelector(
    (state) => state.studentsSlice.studentNumber
  );
  const examsThatStudentIn = useSelector(
    (state) => state.studentsSlice.examsThatStudentIn
  );
  const canvasRef = { current: [] };
  const logoImageRef = { current: [] };

  // FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////
  const makeTheCard = (e) => {
    const canvasElement = canvasRef.current;
    const logo = logoImageRef.current;

    if (canvasElement.getContext) {
      const ctx = canvasElement.getContext("2d");

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 550, 300);

      ctx.drawImage(logo, 400, 20, 124, 124);

      ctx.fillStyle = "white";
      ctx.font = "25px serif";
      ctx.fillText(`Kırklareli Üniversitesi`, 20, 150);
      ctx.fillText(`Adı Soyadı: ${e[1]}`, 20, 175);
      ctx.fillText(`Öğrenci Numarası: ${studentNumber}`, 20, 200);
      ctx.fillText(`Sınav: ${e[0].lesson} ${e[0].type}`, 20, 225);
      ctx.fillText(
        `Sınavın Tarihi ve Saati: ${e[0].date}, ${e[0].hour}`,
        20,
        250
      );
      ctx.fillText(`Sınıf: ${e[2]}`, 20, 275);

      const dataURI = canvasElement.toDataURL("image/jpg");
      saveAs(dataURI, "Pass Card.png");
    } else {
      alert(
        "Bu İşlem İçin Tarayıcınız Uygun Değildir, Lütfen Başka bir Tarayıcıda Tekrar Deneyiniz."
      );
    }
  };

  /* JSX HTML ////////////////////////////////////////////////////////////////////////////////////////////////////*/ return (
    <>
      <Container>
        <Content>
          <Header>
            <Link to="/student-num-search">
              <BackButton>Geri Dön</BackButton>
            </Link>
            <span>GİRMENİZ PLANLANAN SINAVLAR</span>
            <p>(Sınav Kartınızı Almak İstediğiniz Sınava Tıklayın)</p>
          </Header>
          <ExamsTable>
            <Table>
              <tbody>
                {examsThatStudentIn.length > 0 ? (
                  examsThatStudentIn.map((e, i) => (
                    <Tr key={i} onClick={() => makeTheCard(e)}>
                      <td>
                        {e[0].lesson} {e[0].type}
                      </td>
                    </Tr>
                  ))
                ) : (
                  <Tr>
                    <td>Hiç Bir Sınava Kayıtlı Değilsiniz</td>
                  </Tr>
                )}
              </tbody>
            </Table>
          </ExamsTable>
        </Content>
      </Container>
      {/* NOT RENDERING */}
      <canvas
        ref={canvasRef}
        width="550"
        height="300"
        style={{ display: "none" }}
      ></canvas>
      <img
        ref={logoImageRef}
        // src="https://www.klu.edu.tr/anadizin/icerikler/temalar/birimler/rektorluk/img/logo.png"
        src="logo.jpg"
        alt=""
        style={{ display: "none" }}
      />
    </>
  );
};

export default Component;

// STYLED COMPONENTS ////////////////////////////////////////////////////////////////////////////////////////////////////
const Canvas = styled.canvas`
  // display: ${(props) => `${props.show ? "flex" : "none"}`};
  background-color: ${(props) => props.backgroundColor};
  width: 600px;
  height: 300px;
`;

const Card = styled.img``;

const CardContent = styled.div`
  display: flex;
  font-weight: bold;
  background-color: lightblue;
  color: orange;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: var(--color3);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Content = styled.div`
  width: 1300px;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
  position: relative;
  p {
    font-size: 15px;
    position: absolute;
    bottom: -10px;
  }
`;

const BackButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const ExamsTable = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  font-size: 40px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const Table = styled.table`
  width: 100%;
`;

const Tr = styled.tr`
  -webkit-user-select: none;
  &:hover {
    cursor: pointer;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f37c9;
  width: 100%;
  height: 100px;
  border-radius: 20px;
  color: #f77f00;
`;
