const express = require('express');
const { readFile } = require('fs');

const app = express();
const serverPort = 1245;

function processStudentData(fileName) {
  const studentRecords = {};
  const fieldCounts = {};
  let totalRecords = 0;

  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = data.toString().split('\n');
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
        output += `Number of students: ${totalStudents}\n`;

        for (const [field, count] of Object.entries(fieldCounts)) {
          if (field !== 'field') {
            output += `Number of students in ${field}: ${count}. `;
            output += `List: ${studentRecords[field].join(', ')}\n`;
          }
        }

        resolve(output);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  processStudentData(process.argv[2].toString())
    .then((output) => {
      res.send(['This is the list of our students', output].join('\n'));
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(serverPort, () => {
  console.log(`Server running at http://localhost:${serverPort}/`);
});

module.exports = app;
