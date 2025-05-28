/* Please read the instructions located in the exercises/2-oop-exercise-readme.md file and complete your code below */
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.grades = [];
  }

  addGrade(grade) {
    if (typeof grade === "number" && grade >= 0 && grade <= 100) {
      this.grades.push(grade);
      console.log(`Grade ${grade} added for ${this.name}.`);
    } else {
      console.error(
        "Invalid grade. Please provide a number between 0 and 100."
      );
    }
  }

  calculateAverage() {
    if (this.grades.length === 0) {
      return 0;
    }
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
  }

  hasPassed(passingGrade = 60) {
    const average = this.calculateAverage();
    if (average >= passingGrade) {
      console.log(`${this.name} has passed with an average of ${average}.`);
      return true;
    } else {
      console.log(`${this.name} has not passed. Average: ${average}.`);
      return false;
    }
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

class Course {
  constructor(title) {
    this.title = title;
    this.students = [];
  }

  enrollStudent(student) {
    if (student instanceof Student) {
      this.students.push(student);
      console.log(`${student.name} has been enrolled in ${this.title}.`);
    } else {
      console.error("Invalid student. Please provide a Student instance.");
    }
  }

  listStudents() {
    if (this.students.length === 0) {
      console.log(`No students enrolled in ${this.title}.`);
      return;
    }
    console.log(`Students enrolled in ${this.title}:`);
    this.students.forEach((student) => {
      console.log(`- ${student.name}, Age: ${student.age}`);
    });
  }

  calculateCourseAverage() {
    if (this.students.length === 0) {
      return 0;
    }
    const totalAverage = this.students.reduce(
      (sum, student) => sum + student.calculateAverage(),
      0
    );
    return totalAverage / this.students.length;
  }
}

const student1 = new Student("Michael", 20);
const student2 = new Student("Sarah", 22);
const student3 = new Student("John", 21);
student1.addGrade(85);
student1.addGrade(90);
student2.addGrade(75);
student2.addGrade(80);
student3.addGrade(95);
const course = new Course("JavaScript Programming");
course.enrollStudent(student1);
course.enrollStudent(student2);
course.enrollStudent(student3);
course.listStudents();
console.log(
  `Average grade for ${student1.getName()}: ${student1.calculateAverage()}`
);
console.log(
  `Average grade for ${student2.getName()}: ${student2.calculateAverage()}`
);
console.log(
  `Average grade for ${student3.getName()}: ${student3.calculateAverage()}`
);
console.log(`Course average: ${course.calculateCourseAverage()}`);
student1.hasPassed();
student2.hasPassed();
student3.hasPassed(90); // Custom passing grade
student1.addGrade(110); // Invalid grade test
student2.addGrade(-5); // Invalid grade test
student3.addGrade(95); // Valid grade test
student1.hasPassed(80); // Custom passing grade
student2.hasPassed(); // Default passing grade
student3.hasPassed(100); // Custom passing grade
student1.addGrade(100); // Adding a perfect score
console.log(
  `Updated average for ${student1.getName()}: ${student1.calculateAverage()}`
);
student2.addGrade(60); // Adding a passing score
console.log(
  `Updated average for ${student2.getName()}: ${student2.calculateAverage()}`
);
student3.addGrade(50); // Adding a failing score
console.log(
  `Updated average for ${student3.getName()}: ${student3.calculateAverage()}`
);
student1.hasPassed(90); // Check if student1 passes with a higher threshold
