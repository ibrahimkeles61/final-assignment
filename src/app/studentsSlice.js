import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentsList: [],
  examsThatStudentIn: [],
  studentNumber: "",
};

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    changeStudentsList: (state, action) => {
      state.studentsList = action.payload;
    },
    changeExamsThatStudentIn: (state, { payload }) => {
      state.examsThatStudentIn = payload;
    },
    changeStudentNumber: (state, { payload }) => {
      state.studentNumber = payload;
    },
  },
});

export const {
  changeStudentsList,
  changeExamsThatStudentIn,
  changeStudentNumber,
} = studentsSlice.actions;

export default studentsSlice.reducer;
