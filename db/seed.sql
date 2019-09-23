-- inventory table of users on website
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL,
    first_name VARCHAR(25),
    last_name VARCHAR(25), 
    hash text NOT NULL
);

-- -- REGISTERING
-- registering new users
INSERT INTO users 
(username, hash, email, first_name, last_name)
VALUES
($1, $2, $3, $4, $5);

-- check if username is taken, if not available
SELECT * FROM users
WHERE username = $1;

-- -- EXISTING USERS
-- get returning users
SELECT * FROM users
WHERE username = $1;
