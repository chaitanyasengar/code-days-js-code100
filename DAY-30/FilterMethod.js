
// javascript filter function by es5 and es6;
let students = [
    { "first_name": "Hari", "age": 13 },
    { "first_name": "Suriel", "age": 12 },
    { "first_name": "Roy", "last_name": 10 }
];

// es5
var filtered_students = students.filter(function(student){
    return student.age > 10
});

// es6
let filtered_students = students.filter(student => {
    return student.age > 10
});

console.log(filtered_students);
