SELECT * FROM topics t
-- WHERE u.user_id = $2;

SELECT t.user_id, t.name, t.description 
FROM topics t
INNER JOIN users u
ON t.user_id = u.user_id
WHERE u.user_id = $1;