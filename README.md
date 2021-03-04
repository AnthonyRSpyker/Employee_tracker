# Employee_tracker

  This application tracks employees, their departments, the salaries that they make and the title of their postion.  The application is a effective human resources tool to keep track of employees and give them a specific employee identification.  The application is run on node and is supported by inquirer, mysql and console.table npm packages.  
  This is a link to a tutorial video https://drive.google.com/file/d/16w4SfvCQcOhsTBUm9z-nFM4edxiadTZf/view.


# Using this App

  To start, the user must clone this repository down to their local machine.  Once this is cloned down make sure that you have the npm initialized and all of the packages installed.  That includes mysql, inquirer and console.table.  Once this is done, pull up the terminal and navigate to the folder of the repository.  
  
  '''
  
    node employe_trackerDB.js
    
  '''
  
  Once in the repository run the screen will look like this.
  
  ![This is what the innitial code line looks like](/assets/one.png)
  
  ![this is the hompage of the website](/assets/two.png)
  
  In the second image we see the first 6 options that can be chossen including view all employees and ifo, view department, view roles, view employees, add employee remove employee. Similarly in the next image we see the next 6 options including update employee role, add department, delete department, add role, delete role and exit.
  
  ![this is the hompage of the website](/assets/two.five.png)
  
    The first item is selected on the next screen and a table is displayed that combines all three of the tables, the employee table, the roles table and the department tabel.  The next two options would display each of the tables independintly but will not be looked at here.
  
  ![this is the hompage of the website](/assets/three.png)
  
    The next image shows that the 'add employee' option was selected, option 5, and the first prompt is pulled up.
  ![this is the hompage of the website](/assets/four.png)
  
    Next, the image shows all of the prompts filled out with information.
  ![this is the hompage of the website](/assets/five.png)
    
    Once the table is selected to view, with option 4, we see that the new employee was added to the list.
  ![this is the hompage of the website](/assets/six.png)
  
    When option 6 is selected to remove employee, the user is prompted with what id they would like to delete.  
  ![this is the hompage of the website](/assets/seven.png)
  
    Finally we see that the employee was deleted from the employees table.
  ![this is the hompage of the website](/assets/eight.png)
  
    This feature of adding and removing works for the role table as well as the department table.  The user is asked to select the id that they want to delete, this ensures a specification and accuracy of the table item the user wants to get rid of.
    
    One other option that wasnt looked at was the change employee role option.  This allows the user to change the role that the employee is assigned in case of demotions or premotions.  The user is allowed to also change the salary and department id there of.
  
  
  


# Supported Tech

  This app is supported by node and the following packages.
    - mysql
    - inquirer
    - console.table

# Folder Structure
  
  - assets folder: content is strictly images for the read me.
  - node_modules: contains the modules used for node.
  - employeetrackerDB.js
  - employeetrackerDB.sql
  - package-lock.json
  - package.json 
  - seed.sql

# Thank you

  Thank you so much for checking out my app and the repository.  If you have any questions, dont be affraid to email me or if you are interested in making any changes or additions please feel free to make a pull request.  
