// JS ES5 function
function greetingFunc()
{
    return "Wellcome to JavaScript"
}

//JS Es6+ arrow function
const greeting = () => {

}

// Without body and implicit return

const getGreet = () => "wellcome to JavaScript";

// Understadning Better Way
/*
    -> Let’s say you have an array of student objects with two properties ID’s and a boolean to check if that student is present or not.
     Let’s say you want to filter out the students who are absent
*/

students = [
    
    {id:1,present:false},
    {id:2,present:true},
    {id:3,present:false}
]

console.log(students.filter(student => student.present)) // output : will show preset students  