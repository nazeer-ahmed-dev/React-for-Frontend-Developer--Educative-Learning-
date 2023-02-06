const student = {
    name:"Nazeer Ahmed",
    no:033325134,

}

const name1 = student.name;
const no1 = student.no;

console.log(name1,no1);

// Object Destructruturing

const {name,no} = student;

//want to ailas name 
const {name:nalo} = student;
console.log(nalo)

// Spread Opeartor
const array=[1,2,3]
const array1=[3,4,5]
const array3 = array.concat(array1)
console.log(array3)

// Optimized
const array4 = [...array , ...array1] // Spread Operator

// Combining two object
const person ={name:"Nazeer Ahmed"};
const new_object = {...student , ...person , age:23};
console.log(new_object)


