const supertest = require('supertest');
const app = require('../app.js');

describe('testing to see if jest works', () => {
    test('Jest works', () => {
        expect(1).toBe(1);
    })
});

describe('Testing home route status code', () => {
    test('Status code 200', (done) => {
        supertest(app).get('/').then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe("Testing home route", () => {
    test("It should respond with content type HTML", done => {
        supertest(app)
            .get("/")
            .then(response => {
                expect(response.type).toBe("text/html");
                done();
            });
    });
});

describe('Testing /signup route', () => {
    test('Status code 200', (done) => {
        supertest(app)
            .get('/signup')
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});

describe("Testing /signup route", () => {
    test("It should respond with content type HTML", done => {
        supertest(app)
            .get("/signup")
            .then(response => {
                expect(response.type).toBe("text/html");
                done();
            });
    });
});

describe('Testing /postuser status code', () => {
    test('Status code 200', (done) => {
        supertest(app)
            .post('/postuser').then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});



