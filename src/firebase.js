import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDiLYI1pfTp06NdXnOVm-iMGw2hdfbcqzw",
  authDomain: "final-assignment-c9434.firebaseapp.com",
  databaseURL:
    "https://final-assignment-c9434-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "final-assignment-c9434",
  storageBucket: "final-assignment-c9434.appspot.com",
  messagingSenderId: "260503866694",
  appId: "1:260503866694:web:2692c8c734831a5971e947",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

// ADD OR UPDATE ******************************************************************************************
// function addNewClass() {
//   set(ref(database, "classes/" + 1 + "/kapasite"), kapasite);
// }
// const addNewClass = () => {
//   set(ref(database, "new/"), [{ no: 1 }, { no: 2 }]);
// };

// READ ******************************************************************************************
// const dbKapasiteRef = ref(database, "classes/" + 1 + "/kapasite");

// const handleDbKapsite = () =>
//   onValue(dbKapasiteRef, (snapshot) => {
//     const data = snapshot.val();
//     setDbKapasite(data);
//   });

// useEffect(() =>
//   onValue(ref(database, "classes"), (snapshot) =>
//     dispatch(fetchClasses(snapshot.val()))
//   )
// );

// UPDATE ******************************************************************************************
// const handleUpdate = () => update(ref(database, "new/0"), { no: 5 });

// DELETE ******************************************************************************************
// const handleDelete = () => remove(ref(database, "new/"));

// DEPLOY APP: ******************************************************************************************
// in terminal=>
// firebase login
// firebase init
// firebase deploy

// https://firebase.google.com/docs/database/web/start
