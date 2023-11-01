// /* create a class student with fields name,rollno, mark,grade .
// create a graderTracker method to assign grade. 
// if mark less than 60 then c,>61 & <70 &<90:A,91 A+ grade
// display method to display all records pass only name, rollno,mark in constructor */

// //use arrow function to compute the task

// class Studentmarks {
//     //instance variables

//     studentName: string = ' ';
//     studentrollno: number = 0;
//     studentMark: number = 0;
//     studentGrade: string = ' ';

//     //constructor
//     constructor(name: string, rollno: number, mark: number) {
//         this.studentName = name;
//         this.studentrollno = rollno;
//         this.studentMark = mark;
//     }

//     //grading function
//     gradeTracker = () => {
//         if (this.studentMark < 60) {
//             return "C";
//         } else if (this.studentMark >= 60 && this.studentMark < 70) {
//             return "A";
//         } else if (this.studentMark >= 70 && this.studentMark <= 90) {
//             return "A+";
//         } else {
//             return "Not valid Grade";
//         }
//     };

//     //displaying function
//     display = () => {
//         console.log(`Name: ${this.studentName}`);
//         console.log(`Roll Number: ${this.studentrollno}`);
//         console.log(`Mark: ${this.studentMark}`);
//         console.log(`Grade: ${this.gradeTracker()}`);
//     };
// }
// let studentName  = window.prompt("Enter student name: ");
// let studentrollno: number = window.prompt("Enter student rollno: ");
// let studentMark:number = window.prompt("Enter student mark: ");

// // Create a student object
// const student = new Studentmarks(studentName, studentrollno, studentMark);

// student.display();






