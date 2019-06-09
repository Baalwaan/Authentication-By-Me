# Authentication-By-Me (Authentication Project)

## Built with:

•	Node
•	Express
•	Handlebars
•	PostgreSQL
•	Heroku

•	Jest 
•	Supertest

## File structure
•	Use MVC structure and modularise as much as possible

## Todos
### Client-side validation
o	Regex in pattern attribute (HTML)
o	Required attribute in all input fields (HTML)
o	Use a script.js to validate everything again, before form is submitted
o	In script.js also compare passwords. If password is not the same don’t post form
o	Alert() user if there is any problem using script.js

### Server-side validation
o	When form is received in backend run it through another validation process using a promise doing similar checks in front end. If any error  reject and show error message in terminal
o	Show message in terminal if validation is successfully

### Database
o	Create SQL script with a dummy account
o	Db_connection file for pool (to connect to db)
o	Db_build to build database to heroku and local (test database)

### JWT 

![](https://cdn-images-1.medium.com/max/1600/1*SSXUQJ1dWjiUrDoKaaiGLA.png)


### Learnt from database:
•	How to create test database. In pool object ensure ssl is false when wanting to build a test database.
•	In PGCLI create db and name it your project. 
•	Then feed that at the end of TEST_DATABASE_URL, eg. (Postgress://test:test1234@localhost:5432/dbname)

### Testing

- Jest
- Supertest
o	Test get home route for statusCode
o	Test get /signup route for statusCode
o	Test post /postuser route for statusCode 
