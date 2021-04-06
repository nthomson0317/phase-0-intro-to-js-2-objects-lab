// Write your solution in this file!
const employee = {
    name : 'Nicholas',
    streetAddress : '1 Revere Place'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
return Object.assign({}, employee, {[key] : value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee [key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    return Object.assign ({}, employee, {[key] : value});
    
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    return Object.assign (employee, {[key] : value});
}