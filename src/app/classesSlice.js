import { createSlice } from "@reduxjs/toolkit";
// useEffect(() =>
// onValue(ref(database, "classes"), (snapshot) =>
//   dispatch(fetchClasses(snapshot.val()))
// )
// );

const initialState = {
  classes: [],
  selectedClasses: [],
  examInfos: {},
  showExtraction: false,
  savedExams: {},
};

export const classesSlice = createSlice({
  name: "classes",
  initialState,
  reducers: {
    fetchClasses: (state, action) => {
      state.classes = action.payload;
    },
    handleSelectedClasses: (state, action) => {
      var n = -1;

      state.selectedClasses.forEach(
        (c, i) => c.sinif == action.payload.sinif && (n = i)
      );

      n == -1
        ? state.selectedClasses.push(action.payload)
        : state.selectedClasses.splice(n, 1);

      state.selectedClasses.sort((a, b) => a.sinif - b.sinif);
    },
    getExamInfos: (state, { payload }) => {
      state.examInfos.lesson = payload.lesson;
      state.examInfos.teacher = payload.teacher;
      state.examInfos.type = payload.type;
      state.examInfos.date = payload.date;
      state.examInfos.hour = payload.hour;
    },
    changeShowExtraction: (state, { payload }) => {
      state.showExtraction = payload;
    },
    changeSavedExams: (state, { payload }) => {
      delete payload.initialObject;
      state.savedExams = payload;
    },
  },
});

export const {
  fetchClasses,
  handleSelectedClasses,
  getExamInfos,
  changeShowExtraction,
  changeSavedExams,
} = classesSlice.actions;

export default classesSlice.reducer;
