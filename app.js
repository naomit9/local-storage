// GET DOM ELEMENT: STUDENT FORM

const studentForm = document.getElementById("studentForm");
const studentContainer = document.querySelector(".students");
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const numberInput = studentForm['number'];

const students = JSON.parse(localStorage.getItem('students')) || [];

const addStudent = (name, age, number) => {
  students.push({
    name: name,
    age: age,
    number:number
  })

  localStorage.setItem('students', JSON.stringify(students));

  return {name, age, number}
};

const createStudentElement = ({name, age, number}) => {
  // Create elements for each student
  const studentDiv = document.createElement('div'); 
  const studentName = document.createElement('h2');
  const studentAge = document.createElement('p');
  const studentNumber = document.createElement('p');

  // Fill the content
  studentName.innerText = 'Student Name: ' + name;
  studentAge.innerText = 'Student Age: ' + age;
  studentNumber.innerText = 'Student Number: ' + number;

  // Add to the DOM
  studentDiv.append(studentName, studentAge, studentNumber);
  studentContainer.appendChild(studentDiv);
};

students.forEach(createStudentElement);

studentForm.onsubmit = (e) => {
  e.preventDefault();

  const newStudent =  addStudent(
    nameInput.value,
    ageInput.value,
    numberInput.value
  );

  createStudentElement(newStudent)

  nameInput.value = '';
  ageInput.value = '';
  numberInput.value = '';

}