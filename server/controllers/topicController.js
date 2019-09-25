module.exports = {
    getTopic: async (req, res) => {
        const {user_id} = req.session.user;
        const pickTopic = req.app.get('db').topic.get_topics(user_id);
        return res.status(200).send(pickTopic);
    },
    addTopic: async (req, res) => {
        const {user_id, name, description} = req.body; // values for making a topic
        // const {user_id} = req.session.user;
        const db = req.app.get('db');
        const add = await db.topic.add_topic([user_id, name, description]).then(topics => {
            res.status(200).send(add);
        }).catch(err => {res.status(409).send('Please provide a name')});
        // if (!add) {
        //     res.status(409).send('Please provide a name');
        // } 
        // else {            
        //     return res.status(200).send(topics);
        // }
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
        const {topic_id, user_id} = req.body;
        const db = req.app.get('db');
        const destroy = await db.topic.delete_topic(topic_id).then(topics => {
            return res.status(200).send('Stack deleted');
        });
    }
};
