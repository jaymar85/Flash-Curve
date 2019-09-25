UPDATE topics
SET description = $2
WHERE topic_id = $1
RETURNING * ;