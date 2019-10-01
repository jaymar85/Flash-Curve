INSERT INTO cards (topic_id, description)
VALUES ($1, $2);

SELECT c.topic_id, t.user_id, c.description
FROM cards c
INNER JOIN topics t 
ON c.topic_id = t.topic_id
INNER JOIN users u
ON t.user_id = u.user_id
WHERE t.topic_id = $1;