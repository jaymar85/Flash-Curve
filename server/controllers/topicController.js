module.exports = {
    getTopic: async (req, res) => {
        const {user_id} = req.session.user;
        const pickTopic = req.app.get('db').topic.get_topics(user_id);
        return res.status(200).send(topics);
    },
    addTopic: async (req, res) => {
        const {user_id, name, description} = req.body; // values for making a topic
        // const {user_id} = req.session.user;
        const db = req.app.get('db');
        const add = await db.topic.add_topic([user_id, name, description]).then(topics => {
            res.status(200).send(topics);
        }).catch(err => {res.status(409).send('Please provide a name')});
        // if (!add) {
        //     res.status(409).send('Please provide a name');
        // } 
        // else {            
        //     return res.status(200).send(topics);
        // }
    },
    editTopic: async (req, res) => {
        const edi = await req.app.get('db').topic.edit_topic_name()
        return res.status(200).send(topics);
    },
    deleteTopic: async (req, res) => {
        const {topic_id, user_id} = req.body;
        const db = req.app.get('db');
        const destroy = await db.topic.delete_topic(topic_id).then(topics => {
            return res.status(200).send('Stack deleted');
        });
    }
};
