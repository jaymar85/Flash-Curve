UPDATE topics
SET name = $2
WHERE topic_id = $1
RETURNING * ;