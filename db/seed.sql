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

-- inventory table of topics/flash cards on website
CREATE TABLE topics (
    topic_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users (user_id), 
    name VARCHAR(15) NOT NULL,
    description VARCHAR(50)
);

CREATE TABLE cards (
    card_id SERIAL PRIMARY KEY,
    topic_id INTEGER NOT NULL REFERENCES topics (topic_id), 
    description VARCHAR(150) NOT NULL
);

-- creating new topic
INSERT INTO topics
(name, description)
VALUES
($1, $2);

-- createing note cards
