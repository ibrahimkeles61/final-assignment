import { database } from "../firebase";
import { onValue, set, ref } from "firebase/database";

export const fileFormatControl = (worksheet) => {
  var control = true;

  const shouldBeFilled = [
    worksheet.A1,
    worksheet.B1,
    worksheet.C1,
    worksheet.A2,
    worksheet.B2,
    worksheet.C2,
    worksheet.F1,
    worksheet.F2,
    worksheet.F3,
    worksheet.F4,
    worksheet.F5,
    worksheet.G1,
    worksheet.G2,
    worksheet.G3,
    worksheet.G4,
    worksheet.G5,
  ];

  // const shouldBeEmpty = [
  //   worksheet.E1,
  //   worksheet.E2,
  //   worksheet.E3,
  //   worksheet.E4,
  //   worksheet.E5,
  //   worksheet.E6,
  //   worksheet.F6,
  //   worksheet.G6,
  //   worksheet.H1,
  //   worksheet.H2,
  //   worksheet.H3,
  //   worksheet.H4,
  //   worksheet.H5,
  //   worksheet.H6,
  // ];

  // shouldBeEmpty.forEach((e) => e && (control = false));
  shouldBeFilled.forEach((e) => !e && (control = false));

  return control;
};

export const makingStudentsListFromSheetData = (sheetData) => {
  const result = [];

  var i = 0;
  do {
    i++;
    let control = true;

    result.forEach((e) => {
      e.ogrNo == sheetData[i][1] && (control = false);
      e.isim == sheetData[i][2] && (control = false);
    });

    if (control) {
      result.push({
        sn: sheetData[i][0],
        ogrNo: sheetData[i][1],
        isim: sheetData[i][2],
      });
    }
  } while (sheetData[i + 1] && sheetData[i + 1][0] != "");

  return result;
};

export const shuffle = (array) => {
  let arr = [];
  array.forEach((e) => arr.push(e));
  let shuffledArray = [];
  var arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    const indexForThisRound = Math.floor(Math.random() * arr.length);
    shuffledArray.push(arr[indexForThisRound]);
    arr.splice(indexForThisRound, 1);
  }

  return shuffledArray;
};

export const isThereEnoughSpace = (students, selectedClasses) => {
  let studentsLength = students.length;
  let sum = 0;
  selectedClasses.forEach((c) => (sum += c.kapasite));
  return sum >= studentsLength ? true : false;
};

export const formatTransformer = (americanDate) => {
  let vals = americanDate.split("/");

  if (vals[0].length == 1) {
    vals[0] = `0${vals[0]}`;
  }

  return `${vals[1]}.${vals[0]}.20${vals[2]}`;
};

export const studentOrganizer = (selectedClasses, shuffledStudents) => {
  var j = 0;

  const seatedStudents = selectedClasses.map((c) => {
    const studentsOfClass = [];

    for (let i = 0; i < c.kapasite && j < shuffledStudents.length; i++) {
      studentsOfClass.push(shuffledStudents[j++]);
    }

    return studentsOfClass;
  });

  return seatedStudents;
};

export const saveNewExamOnFirebase = (
  selectedClasses,
  seatedStudents,
  examInfos
) => {
  set(ref(database, `savedExams/${examInfos.lesson} ${examInfos.type}`), {
    selectedClasses,
    seatedStudents,
    examInfos,
  });
};

// useEffect(() =>
//   onValue(ref(database, "classes"), (snapshot) =>
//     dispatch(fetchClasses(snapshot.val()))
//   )
// );
