const http = require('http');
const { readFile } = require('fs');

const serverHostname = '127.0.0.1';
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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    processStudentData(process.argv[2].toString())
      .then((output) => {
        const outString = output.slice(0, -1);
        res.end(outString);
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});

app.listen(serverPort, serverHostname, () => {
  console.log(`Server running at http://${serverHostname}:${serverPort}/`);
});

module.exports = app;
