module.exports = {
    getTopic: async (req, res) => {
        const {user_id} = req.session.user;
        const db = req.app.get('db');
        const userTopics = await db.topic.get_topics(user_id)
        res.status(200).send(userTopics);
    },
    addTopic: async (req, res) => {
        const {name, description} = req.body; // values for making a topic //coming from the front
        // console.log('addTopic req.body')
        // console.log(req.body);
        const {user_id} = req.session.user; //coming from the backend
        const db = req.app.get('db');
        const add = await db.topic.add_topic(user_id, name, description)  
            .then(topics => {
                res.status(200).send(topics);
            })
            .catch(err => {
                res.status(409).send('Please provide a name')
            });
    },
    editTopicName: async (req, res) => {
        const {topic_id, name} = req.body;
        const db = req.app.get('db');
        const update = await db.topic.edit_topic_name([topic_id, name]);
        return res.status(200).send(update);
    },
    editTopicDescription: async (req, res) => {
        const {topic_id, description} = req.body;
        const db = req.app.get('db');
        const update = await db.topic.edit_topic_description([topic_id, description]);
        return res.status(200).send(update);
    },
    deleteTopic: async (req, res) => {
        const topic_id = +req.params.topic_id;
        const {user_id} = req.session.user;
        // console.log(req.params.topic_id);
        const db = req.app.get('db');
        const topics = await db.topic.delete_topic(topic_id, user_id);
            // console.log(topics);
        res.status(200).send(topics);
    
    }
};
