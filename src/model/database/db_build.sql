BEGIN;

DROP TABLE IF EXISTS accounts;

CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  second_date VARCHAR NOT NULL,
  email VARCHAR(320) NOT NULL,
  hashed_password VARCHAR(20) NOT NULL
);

INSERT INTO accounts (first_name, second_date, email, hashed_password)
VALUES ('Burhan', 'Baalwaan', 'burhan_1990@hotmail.co.uk', 'London.2018');

COMMIT;
