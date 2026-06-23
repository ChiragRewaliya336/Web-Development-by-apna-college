let students = ["Chirag","Himanshi","Jatin"];
let num =[4,5,6];
let info =["Chirag",20,"BCA"]; //mixed datatypes allowed in this lng 

let empArr =[];
// info[0][0] used for accessing strig index
students[2]="Rahul"; //allowed changed
students[3] ="Pardeep";

// array function:
students.push("Jatin");
students.push("Anshu");
students.pop();
students.unshift("Preeti");
students.shift();
// students.indexOf("Chirag"); for find index in array if yes then return if not then return -1
// students.includes("Chirag"); for finding elements in array if yes then return if not then return -1
// students.concat(info); used to merge two arrays
// sum.reverse(); it will effect the original array 

// slice method:
students.slice()
:-['Chirag', 'Himanshi', 'Rahul', 'Pardeep', 'Jatin']

students.slice(2);
:- ('Rahul', 'Pardeep', 'Jatin']

students.slice(2,3)
:-['Rahul']

students.slice(-2);
:-['Pardeep', 'Jatin']
