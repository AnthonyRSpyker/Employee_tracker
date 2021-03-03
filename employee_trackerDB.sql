DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role(
	id INT NOT NULL AUTO_INCREMENT,
	title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id int,
    manager_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
)


SELECT 
    role.id,
    employee.first_name,
    employee.last_name,
    role.title,
    role.salary,
    department.name as department_name,
    employee.manager_id
FROM
    employee
        LEFT JOIN
    role ON employee.role_id = role.id
		LEFT JOIN
	department ON role.department_id = department.id
		LEFT JOIN
	employee employee_w_manager on employee_w_manager.manager_id = employee.id
