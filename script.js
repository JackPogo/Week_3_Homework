// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employeesArray = [];
// Register click event
addEmployeesBtn.addEventListener("click", () => {
  let continueChoice = true;

  while (continueChoice == true) {
    const newEmployee = {firstName : prompt("What is the first name?"), lastName : prompt("What is the last name?"), salary: Number(prompt("What is their salary?"))};
    
    employeesArray.push(newEmployee);
    console.log(employeesArray.length);
    // Ask if the user wants to enter another employee
    continueChoice = confirm("Would you like to enter another employee?");
    console.log(continueChoice);
  }
  collectEmployees(employeesArray);
});

// Collect employee data
const collectEmployees = function (){
  return employeesArray;
};

// Display the list of employees

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // Initialize total salary
  let totalSalary = 0;

  // Loop through each employee and accumulate their salaries
  for (let i = 0; i < employeesArray.length; i++) {
    const salary = Number(employeesArray[i].salary);

    // Validate salary to ensure it is a valid number
    if (!isNaN(salary)) {
      totalSalary += salary;
    } else {
      console.error(`Invalid salary for employee: ${employeesArray[i].firstName} ${employeesArray[i].lastName}`);
    }
  }
  // Calculate the average salary
  const averageSalary = employeesArray.length > 0 ? totalSalary / employeesArray.length : 0;

  // Display the average salary
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);