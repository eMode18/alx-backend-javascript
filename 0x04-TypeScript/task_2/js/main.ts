interface DirectorInterface {
  workFromHome(): string;
  getToWork(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implementing the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home.";
  }

  getToWork(): string {
    return "Getting a coffee break.";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks.";
  }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home.";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break.";
  }

  workTeacherTasks(): string {
    return "Getting to work.";
  }
}

// Create the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Define the Director interface
interface Director {
  workDirectorTasks(): string;
}

// Defining the Teacher interface
interface Teacher {
  workTeacherTasks(): string;
}

// Creating the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return {
      workTeacherTasks: () => "Getting to work",
    };
  } else {
    return {
      workDirectorTasks: () => "Getting to director tasks",
    };
  }
}

// Defining the isDirector function (type predicate)
function isDirector(employee: Director | Teacher): employee is Director {
  return "workDirectorTasks" in employee;
}

// Defining the executeWork function
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Define the Subjects type
type Subjects = 'Math' | 'History';

// Implement the teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    return 'Invalid subject';
  }
}

