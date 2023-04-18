import { configureStore } from "@reduxjs/toolkit";
import classesSlice from "./classesSlice";
import studentsSlice from "./studentsSlice";

export const store = configureStore({
  reducer: {
    classesSlice,
    studentsSlice,
  },
});
