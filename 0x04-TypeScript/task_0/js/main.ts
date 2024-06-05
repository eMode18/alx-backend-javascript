interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'Seattle',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'New York',
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render the table dynamically
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = tableBody.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

table.appendChild(tableBody);
document.body.appendChild(table);

