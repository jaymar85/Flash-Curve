module.exports = {
    getFlashcard: async (req, res) => {
        const flashcard = await req.app.get('db').cards.get_cards(1);
        return res.status(200).send(cards)
    }, 
    addFlashcard: async (req, res) => {
        const userCards = await req.app.get('db').cards.add_cards([id]);
        return res.status(200).send(cards);
    },
    editFlashcard: async (req, res) => {
        const {id, category} = await req.app.get('db')
        return res.status(200).send(cards);
    },
    deleteFlashcard: async (req, res) => {
        return res.status(200).send(cards);
    }
};