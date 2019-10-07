module.exports = {
    getDataView: async (req, res) => {
        const {user_id} = req.session.user;
        console.log('getDataView', user_id);
        const db = req.app.get('db');
        const getViews = await db.views.get_views(user_id);
        res.status(200).json(getViews);
    },
    addViews: async (req, res) => {
        const topic_id = +req.params.topic_id;
        const {user_id} = req.session.user;
        console.log('addViews', user_id, topic_id);
        const db = req.app.get('db');
        const userViews = await db.views.add_views(topic_id, user_id)
        res.status(200).json(userViews);
    },
    theDestroyer: async (req, res) => {
        const {user_id} = req.session.user;
        console.log('theDestroyer', user_id);
        const db = req.app.get('db');
        await db.views.reset_views(user_id);
        res.sendStatus(200);
    }
}