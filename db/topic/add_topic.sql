INSERT INTO topics (user_id, name, description)
VALUES ($1, $2, $3)
RETURNING * ;