DELETE FROM cards
WHERE card_id = $2;

SELECT c.topic_id, c.description, t.user_id
FROM cards c
INNER JOIN topics t 
ON c.topic_id = t.topic_id
INNER JOIN users u
ON t.user_id = u.user_id
WHERE t.topic_id = $1;