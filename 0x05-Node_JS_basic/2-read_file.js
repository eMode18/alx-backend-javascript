const fs = require('fs');

function countStudents(filePath) {
  try {
    // Read the file synchronously
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Split the content into lines
    const lines = fileContent.split('\n');

    // Initialize counters for CS and SWE students
    let csCount = 0;
    let sweCount = 0;
    const csStudents = [];
    const sweStudents = [];

    // Process each line (excluding empty lines)
    for (const line of lines) {
      if (line.trim() !== '') {
        const [firstName, field] = line.split(',');
        if (field === 'CS') {
          csCount++;
          csStudents.push(firstName);
        } else if (field === 'SWE') {
          sweCount++;
          sweStudents.push(firstName);
        }
      }
    }

    // Log the results
    console.log(`Number of students: ${csCount + sweCount}`);
    console.log(`Number of students in CS: ${csCount}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweStudents.join(', ')}`);
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
