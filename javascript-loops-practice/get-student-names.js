/* exported getStudentNames */

/* 1. Create a storage for the ouput (array of names);
2. Look at each object within an array beginning at an index of 0 and ending at the array length.;
3. At each array index, we need to check the object's properties for the "name" property;
4. We need to push the value of the "name" property into the output storage ;
5. After cycling through each array index, we need to return the value of the output storage */

function getStudentNames(students) {
  var studentNames = [];
  for (var i = 0; i < students.length; i++) {
    for (var name in students[i]) {
      studentNames.push(students[i][name]);
    }
  }
  return studentNames;
}
