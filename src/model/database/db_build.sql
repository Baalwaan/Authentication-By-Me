BEGIN;

DROP TABLE IF EXISTS accounts;

CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  second_name VARCHAR NOT NULL,
  email VARCHAR(320) NOT NULL,
  hashed_password VARCHAR NOT NULL
);

INSERT INTO accounts (first_name, second_name, email, hashed_password)
VALUES ('Burhan', 'Baalwaan', 'burhan_1990@hotmail.co.uk', 'London.2018');

COMMIT;
