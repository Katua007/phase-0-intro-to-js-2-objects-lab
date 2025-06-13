// Write your solution in this file!
var employee = {
  name: 'John Doe',
  streetAddress: '123 Main St'
};

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
  return { ...employeeObj,
    [key]: value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
  employeeObj[key] = value;
  return employeeObj;
}

function deleteFromEmployeeByKey(employeeObj, keyToDelete) {
  const newEmployee = { ...employeeObj
  };
  delete newEmployee[keyToDelete];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employeeObj, keyToDelete) {
  delete employeeObj[keyToDelete];
  return employeeObj;
}