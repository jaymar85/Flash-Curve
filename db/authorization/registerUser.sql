INSERT INTO users (user_name, email, password, first_name)
VALUES ($1, $2, $3, $4)
returning *;
