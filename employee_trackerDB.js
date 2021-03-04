const mysql = require('mysql');
const inquirer = require ('inquirer');
require('console.table');

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



connection.connect((err) => {
    if (err) throw err ;
    options();
});    

const options = () => {
    inquirer
        .prompt({
            name: 'choose',
            type: 'rawlist',
            message: 'What would you like to do?',
            choices: [
                'View all employees and info',
                'View Department',
                'View Roles',
                'View Employees',
                'Add Employee',
                'Remove employee',
                'Update employee role',
                'Delete Department',
                // 'Add Department',
                'Exit'
            ],
    })
    .then((answer) => {
        switch (answer.choose) {
            case 'View all employees and info':
                allEmployees();
                
                break;
                
            case 'View Department':
                viewDepartment();
    
                break;
            
            case 'View Roles':
                viewRole();
        
                break;

            case 'View Employees':
                viewEmployees();
            
                break;
            
            case 'Add Employee':
                addEmployee();

                break;
    
            case 'Remove employee':
                deleteEmployee();
                
                break;

            case 'Update employee role':
                updateEmployeeRole();

                break;
            
            case 'Delete Department':
                deleteDepartment();

                break;
            
            case 'Add Department':
                addDepartment();
    
                break;

            case 'Exit':
                connection.end();

                break;

            default: console.log('try another answer')
                
                break;
        }
    });
};


const addEmployee = () => {
    inquirer.prompt([
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
        name: 'roleid',
        type: 'input',
        message: 'What is the employees role id?'
    },  
    {
        name: 'managerid',
        type: 'input',
        message: 'What is the employees manager id?'
    },  
    ])
    .then((answer) => {
        connection.query(
            
            'INSERT INTO employee SET ?',
            {
                first_name: answer.firstname,
                last_name: answer.lastname,
                role_id: answer.roleid,
                manager_id: answer.managerid
            },
            
            (err) => {
                if (err) throw err;
                    console.log("s'all good!")
                    options();
            });

    });
};    

const allEmployees = () => {
    const query = 'SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name as department_name, employee.manager_id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee employee_w_manager on employee_w_manager.manager_id = employee.id'
    connection.query(query, (err,res) => {
        
        console.table(res);
        options();
    });
};

const updateEmployeeRole = () => {
    inquirer.prompt([
        {
            name: 'empId',
            type: 'input',
            message: 'What is the employee id you want to change?'
        },
        {
            name: 'roleid',
            type: 'input',
            message: 'What is the role id you would like to give the employee?'

        }
    ])
    .then((answer) => {
        connection.query(
            'UPDATE employee SET role_id = ? WHERE id = ?',
        [
        answer.roleid,
        answer.empId
        ],
    
    (err) => {
        if (err) throw err;
            console.log("s'all good!")
            options();
        });
    });
};



const viewDepartment = () => {
    
        const query = 'SELECT * FROM department'
        connection.query(query, (err,res) => {
            
            console.table(res);
            options();
        })
    
};

const viewRole = () => {
    
        const query = 'SELECT * FROM role'
        connection.query(query, (err,res) => {
            
            console.table(res);
            options();
        })
        
};

const viewEmployees = () => {
    const query = 'SELECT * FROM employee'
    connection.query(query, (err, res) => {
        console.table(res);
        options()
    }) 
}

const deleteEmployee = () => {
    inquirer.prompt([
        {
            name: 'deleteempoloyee',
            type: 'input',
            message: 'What is the employee id you want to delete?'
        }
    ])
    .then((answer) => {
        const query = 'DELETE FROM employee WHERE id = ?'
        connection.query(query, 
            [
                answer.deleteempoloyee
            ],
            (err) => {
                if (err) throw err;
                console.log("s'all good!")
                options();
            })
        });
    }
    
    
    const deleteDepartment = () => {
        inquirer.prompt([
            {
                name: 'deletedepartment',
                type: 'input',
                message: 'What is the department id you want to delete?'
            }
        ])
        .then((answer) => {
            const query = 'DELETE FROM department WHERE id = ?'
            connection.query(query, 
                [
                    answer.deletedepartment
                ],
                (err) => {
                    if (err) throw err;
                    console.log("s'all good!")
                    options();
                })
            });
        }
    
    
    
    // const addDepartment = () => {
    //     inquirer.prompt([
    //         {
    //             name: 'department',
    //             type: 'input',
    //             message: 'What is the name of department you are adding?'
    //         }
    //     ])
    //     .then((answer) => {
    //         const query = 'INSERT INTO department SET ?'
    //         connection.query(query,
    //         [
    //             answer.department
    //         ],
    //         (err) => {
    //             if (err) throw err;
    //                 console.log("s'all good!")
    //                 options();
    //         })
    //     })
    // }