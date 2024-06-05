interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional attribute
  location: string;
  [key: string]: any; // Allow any additional attributes
}

// Directors interface (extends Teacher)
interface Directors extends Teacher {
  numberOfReports: number;
}

// interface for the printTeacher function
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  return `${firstInitial}. ${formattedLastName}`;
};

// Define the interface for the constructor
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Define the interface for the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

