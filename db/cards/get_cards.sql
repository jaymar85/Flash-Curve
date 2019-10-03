SELECT t.name, c.description, c.card_id
FROM cards c
INNER JOIN topics t 
ON c.topic_id = t.topic_id
WHERE t.topic_id = $1;