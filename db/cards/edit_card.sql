UPDATE cards 
SET description = $3
WHERE card_id = $2;

SELECT c.topic_id, c.user_id, c.description
FROM cards c
INNER JOIN topics t 
ON c.topic_id = t.topic_id
INNER JOIN users u
ON c.user_id = u.user_id
WHERE t.topic_id = $1;