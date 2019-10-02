DELETE FROM cards
WHERE topic_id = $1;
DELETE FROM topics
WHERE topic_id = $1;
SELECT * FROM topics
WHERE user_id = $2;

-- SELECT t.topic_id, t.user_id, t.name, t.description
-- FROM topics t
-- INNER JOIN cards c
-- ON t.topic_id = c.topic_id
-- INNER JOIN users u
-- ON t.user_id = u.user_id
-- WHERE t.topic_id = $1;