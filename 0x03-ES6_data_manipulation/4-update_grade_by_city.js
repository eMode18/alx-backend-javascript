function updateStudentGradeByCity(students, city, newGrades) {
  return students.map(student => {
    const gradeObj = newGrades.find(grade => grade.studentId === student.id);
    if (gradeObj) {
      return { ...student, grade: gradeObj.grade };
    } else {
      return { ...student, grade: 'N/A' };
    }
  });
}

export default updateStudentGradeByCity;

