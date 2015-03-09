# TodoApp
This is a simple RESTful API for a todo list application
View the documentation at [http://cu-dev.ca/todoApp](http://cu-dev.ca/todoApp).  The API is live so feel free to try it out (see the documentation);

# Models
- User
    + has many TodoLists
    + username : String
        * must be unique
    + password : string
- TodoList
    + has many Tasks
    + title : String
- Task
    + completed : Boolean
    + title : String
