/**
 * Controller class for Student
 */
import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const databaseFilePath = process.argv.length > 2 ? process.argv[2] : '';
      const studentRecords = await readDatabase(databaseFilePath);
      const majorFields = Object.keys(studentRecords);
      majorFields.sort((fieldA, fieldB) => fieldA.localeCompare(fieldB));
      
      response.statusCode = 200;
      response.write('This is the list of our students\n');
      
      for (const majorField of majorFields) {
        response.write(`Number of students in ${majorField}: ${studentRecords[majorField].length}. List: ${studentRecords[majorField].join(', ')}`);
        if (majorFields.indexOf(majorField) !== majorFields.length - 1) {
          response.write('\n');
        }
      }
    } catch (error) {
      response.statusCode = 500;
      response.write(error.message);
    }
    response.end();
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const validMajors = ['CS', 'SWE'];

    if (!validMajors.includes(major.toUpperCase())) {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    } else {
      const databaseFilePath = process.argv.length > 2 ? process.argv[2] : '';
      try {
        const studentRecords = await readDatabase(databaseFilePath);
        response.statusCode = 200;
        response.write(`List: ${studentRecords[major.toUpperCase()].join(', ')}`);
      } catch (error) {
        response.statusCode = 500;
        response.write(error.message);
      }
      response.end();
    }
  }
}

export default StudentsController;
