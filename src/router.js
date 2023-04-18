import { createBrowserRouter } from "react-router-dom";

import Start from "./views/Start";
import NotFound from "./views/NotFound";

import AdminChoice from "./views/AdminChoice/AdminChoice";
import StudentNumSearch from "./views/StudentNumSearch/StudentNumSearch";

import SavedExams from "./views/AdminChoice/SavedExams/SavedExams";
import SaveNewExam from "./views/AdminChoice/SaveNewExam/SaveNewExam";

import StudentResult from "./views/StudentNumSearch/StudentResult/StudentResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
    errorElement: <NotFound />,
  },
  {
    path: "/admin-choice",
    element: <AdminChoice />,
  },
  {
    path: "/saved-exams",
    element: <SavedExams />,
  },
  {
    path: "/save-new-exam",
    element: <SaveNewExam />,
  },
  {
    path: "/student-num-search",
    element: <StudentNumSearch />,
  },
  {
    path: "/student-result",
    element: <StudentResult />,
  },
]);

export default router;
