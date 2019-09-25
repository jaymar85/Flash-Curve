SELECT * FROM topics
INNER JOIN users 
ON topics.user_id = users.user_id;