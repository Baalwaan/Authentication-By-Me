# Authentication-By-Me (Authentication Project)


Curious about how sensitive information can be stored in and accessed from databases securely.

So i decided to build a simple sign up and login form 😊.

![](https://i.imgur.com/yp0yAFE.png)

## Built with:

- Node
- Express
- Handlebars
- PostgreSQL
- Heroku
- Jest 
- Supertest

## File structure
- Use MVC structure and modularise as much as possible

## Todos
### Client-side validation
- Regex in pattern attribute (HTML)
- Required attribute in all input fields (HTML)
- Use a script.js to validate everything again, before form is submitted
- In script.js also compare passwords. If password is not the same don’t post form
- Alert() user if there is any problem using script.js

### Server-side validation
- When form is received in backend run it through another validation process using a promise doing similar checks in front end. If any error  reject and show error message in terminal
- Show message in terminal if validation is successfully

### Database
- Create SQL script with a dummy account
- Db_connection file for pool (to connect to db)
- Db_build to build database to heroku and local (test database)


### Learnt from Bcrypt

- Using Bcrypt as part of my server side validation.
- using BCRYPT to salt and hash passwords in order to create unique hashes before storing it in a PostgreSQL database.
- BCRYPT is also used for when existing user in the database would attempt to login (BCRYPT compare to compare plain vs hashed passwords).

![](https://media3.giphy.com/media/QOgvV9rV4hHpgNRBfQ/giphy.gif?cid=790b76115d4579e53162726551468b94&rid=giphy.gif)


### JWT 

![](https://cdn-images-1.medium.com/max/1600/1*SSXUQJ1dWjiUrDoKaaiGLA.png)


### Learnt from database:
- How to create test database. In pool object ensure ssl is false when wanting to build a test database.
- In PGCLI create db and name it your project. 
- Then feed that at the end of TEST_DATABASE_URL, eg. (Postgress://test:test1234@localhost:5432/dbname)


### Challenges

- Most logic written using PROMISES, which is still an area of interest I am currently trying to learn more about.

### Testing

- Jest
- Supertest
- Test get home route for statusCode
- Test get /signup route for statusCode
- Test post /postuser route for statusCode 
