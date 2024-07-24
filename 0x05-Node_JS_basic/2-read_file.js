const fs = require('fs');

function countStudents(fileName) {
  const studentRecords = {};
  const fieldCounts = {};
  let totalRecords = 0;

  try {
    const fileContent = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContent.toString().split('\n');

    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        totalRecords += 1;
        const recordFields = lines[i].toString().split(',');

        if (Object.prototype.hasOwnProperty.call(studentRecords, recordFields[3])) {
          studentRecords[recordFields[3]].push(recordFields[0]);
        } else {
          studentRecords[recordFields[3]] = [recordFields[0]];
        }

        if (Object.prototype.hasOwnProperty.call(fieldCounts, recordFields[3])) {
          fieldCounts[recordFields[3]] += 1;
        } else {
          fieldCounts[recordFields[3]] = 1;
        }
      }
    }

    const totalStudents = totalRecords - 1;
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, count] of Object.entries(fieldCounts)) {
      if (field !== 'field') {
        console.log(`Number of students in ${field}: ${count}. List: ${studentRecords[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
