
/////  Simple approach with out Method  /////
let employees = [
    { "first_name": "Hari", "last_name": "Krishnan" },
    { "first_name": "Samuel", "last_name": "Jackson" },
    { "first_name": "Suriel", "last_name": "Johnson" },
    { "first_name": "Roy", "last_name": "Agasthyan" }
];
let full_names = []

let name;

for (let i = 0; i < employees.length; i++) {
    name = employees[i]["first_name"] + ' ' + employees[i]["last_name"]
    full_names.push(name)
}

console.log(full_names)


///////////// JavaScript MAP Method   ///////


let full = employees.map(function(emp) {
    return emp["first_name"] + ' ' + emp["last_name"]
});

console.log(full)