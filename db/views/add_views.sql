INSERT INTO views (topic_id, user_id)
VALUES ($1, $2); 

SELECT t.name, COUNT (v.topic_id) FROM topics t
INNER JOIN views v
ON t.topic_id = v.topic_id
WHERE v.user_id = 9
GROUP BY t.name;