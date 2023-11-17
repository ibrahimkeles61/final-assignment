// NPM *************************************************************************
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// FIREBASE *************************************************************************
import { database } from "./firebase";
import { set, ref, onValue, remove, update } from "firebase/database";
// CSS *************************************************************************
import "./App.css";
// COMPONENTS *************************************************************************
// import Section from "./components/Section.jsx";
import Draft from "./Draft";
// MYFUNCS *************************************************************************
import { fetchClasses } from "./app/classesSlice";

const App = () => {
  const dispatch = useDispatch();
  const classes = useSelector((state) => state.classesSlice.classes);

  // ADD OR UPDATE *************************************************************************

  // function addNewClass() {
  //   set(ref(database, "classes/" + 1 + "/kapasite"), kapasite);
  // }
  const addNewClass = () => {
    set(ref(database, "new/"), [{ no: 1 }, { no: 2 }]);
  };

  // READ ****************************************
  // const dbKapasiteRef = ref(database, "classes/" + 1 + "/kapasite");

  // const handleDbKapsite = () =>
  //   onValue(dbKapasiteRef, (snapshot) => {
  //     const data = snapshot.val();
  //     setDbKapasite(data);
  //   });

  useEffect(() =>
    onValue(ref(database, "classes"), (snapshot) =>
      dispatch(fetchClasses(snapshot.val()))
    )
  );

  // DELETE ************************************

  const handleDelete = () => remove(ref(database, "new/"));

  // UPDATE ************************************

  const handleUpdate = () => update(ref(database, "new/0"), { no: 5 });

  // -----------------------------------------------------
  const write = () => console.log(classes);

  return (
    <div className="section">
      <div>
        <button onClick={addNewClass}>add</button>
        <button onClick={handleDelete}>delete</button>
        <button onClick={handleUpdate}>update</button>
      </div>
    </div>
  );
};

export default App;
