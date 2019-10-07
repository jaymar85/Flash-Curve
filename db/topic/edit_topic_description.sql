UPDATE topics
SET description = $2
WHERE topic_id = $1;

-- SELECT * FROM topics 
-- WHERE topic_id = $1;
SELECT * FROM topics
WHERE user_id = $3;