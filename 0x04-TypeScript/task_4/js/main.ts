import { Cpp } from './js/subjects/Cpp';
import { Java } from './js/subjects/Java';
import { React } from './js/subjects/React';

export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

export const cTeacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

console.log('Cpp:');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('\nJava:');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('\nReact:');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

