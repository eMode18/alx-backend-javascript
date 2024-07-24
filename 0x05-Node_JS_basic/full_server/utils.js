/**
 * Process the CSV file in an asynchronous manner and generates a report using the data*/
import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, fileContent) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const records = fileContent.split('\n');
        records.splice(0, 1); // Remove header line
        const report = {};

        records.forEach((record) => {
          const fields = record.split(',');
          if (fields[3] && fields[0]) {
            if (!report.hasOwnProperty(fields[3])) {
              report[fields[3]] = [fields[0]];
            } else {
              report[fields[3]].push(fields[0]);
            }
          }
        });

        resolve(report);
      }
    });
  });
}

export default readDatabase;
