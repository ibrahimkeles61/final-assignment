// NPM ////////////////////////////////////////////////////////////////////////////////////////////////////
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import styled from "styled-components";

// FIREBASE ////////////////////////////////////////////////////////////////////////////////////////////////////
import { database } from "./firebase";
import { set, ref, onValue, remove, update } from "firebase/database";

// VIEWS ////////////////////////////////////////////////////////////////////////////////////////////////////
// import Start from "./views/Start";
// import AdminChoice from "./views/AdminChoice/AdminChoice";
// import StudentNumSearch from "./views/StudentNumSearch/StudentNumSearch";
// import SavedExams from "./views/AdminChoice/SavedExams/SavedExams";
// import SaveNewExam from "./views/AdminChoice/SaveNewExam/SaveNewExam";
// import StudentResult from "./views/StudentNumSearch/StudentResult/StudentResult";

// COMPONENTS ////////////////////////////////////////////////////////////////////////////////////////////////////
import router from "./router";
import trial from "./trial";

// IMPORTED FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////
import { fetchClasses } from "./app/classesSlice";

const Component = () => {
  // VARS ////////////////////////////////////////////////////////////////////////////////////////////////////
  const dispatch = useDispatch();

  const classes = useSelector((state) => state.classesSlice.classes);
  const [file, setFile] = useState(null);
  const [excelFile, setExcelFile] = useState(null);
  const [excelData, setExcelData] = useState(null);

  // FUNCS ////////////////////////////////////////////////////////////////////////////////////////////////////

  /* JSX HTML ////////////////////////////////////////////////////////////////////////////////////////////////////*/ return (
    <>
      <Container>
        {/* <Router>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/admin-choice" element={<AdminChoice />} />
            <Route path="/student-num-search" element={<StudentNumSearch />} />
            <Route path="/saved-exams" element={<SavedExams />} />
            <Route path="/save-new-exam" element={<SaveNewExam />} />
            <Route path="/student-result" element={<StudentResult />} />
          </Routes>
        </Router> */}
        <RouterProvider router={router} />
      </Container>
    </>
  );
};

export default Component;

// STYLED COMPONENTS ////////////////////////////////////////////////////////////////////////////////////////////////////
const Container = styled.div`
  height: 100vh;
  width: %100;
  // -webkit-user-select: none;
`;

const Content = styled.div`
  height: 90vh;
`;
