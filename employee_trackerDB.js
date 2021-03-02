const mysql = require('mysql');
const inquirer = require ('inquirer');
const cTabel = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: '',
  database: 'employee_trackerDB',
});

let managers = [];

connection.connect((err) => {
    if (err) throw err ;
    options();
});    

const options = () => {
    inquirer.prompt({
        name = 'options',
        type = 'rawlist',
        message: 'What would you like to do?',
        choices: [
            'View all employees',
            'View all employees by department',
            'View all employees by manager',
            'Add employee.',
            'Remove employee',
            'Update employee role',
            'Update employee manager',
            'Exit'
        ]
    })
    .then((answers) => {
        switch (answers.option) {
            case 'View all employees':
                allEmployees();
                
                break;
            case 'View all employees by department':
                employeesByDeparment();

                break;
            case 'View all employees by manager':
                employeesByManager();
            
                break;
            case 'Add employee':
                newEmployee();

                break;
            case 'Remove employee':
                deleteEmployee();
                
                break;
            case 'Update employee role':
                updateEmployeeRole();

                break;
            case 'Update employee manager':
                updateEmployeeManager();

                break;
            case 'Exit':
                connection.end();

                break;
            default: console.log('try another answer')
                break;
        }
    });
};


const newEmployee = () => {
    inquirer.prompt(
    {
        name: 'firstname',
        type: 'input',
        message: 'What is the employees first name?'
    },    
    {
        name: 'lastname',
        type: 'input',
        message: 'What is the employees last name?'
    },    
    {
        name: 'title',
        type: 'input',
        message: 'What is the employees title/role?'
    },    
    {
        name: 'department',
        type: 'list',
        message: 'What is the employees department?',
        choices: [ 'Sales', 'Legal', 'Engineering', 'Finance', 'other']
    },    
    {
        name: 'departmentother',
        type: 'input',
        message: 'What department are they in?',
        when: (answers) => answers.department === 'other'
    },    
    {
        name: 'salary',
        type: 'input',
        message: 'What is the employees salary?'
    },    
    {
        name: 'manager',
        type: 'last',
        message: 'Who is the employees manager?',
        choices: [managers]
    }    
    )
    .then((answers) => {

    })
};    

const allEmployees = () => {
    const query = 'SELECT role.id, employee.first_name, employee.last_name, role.title, role.salary, department.name as department_name,employee_w_manager.first_name, FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee employee_w_manager on employee_w_manager.manager_id = employee.id'
    connection.query(query, (err,res) => {
        res.forEach()
    })
};

const employeesByDeparment

const employeesByManager

const newEmployee

const deleteEmployee

const updateEmployeeRole

const updateEmployeeManager



connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
  });