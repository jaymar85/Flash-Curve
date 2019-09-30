require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");

// Controllers
const authController = require("./controllers/authController");
const cardController = require("./controllers/cardController");
const topicController = require("./controllers/topicController")

const {CONNECTION_STRING, SERVER_PORT,  SESSION_SECRET} = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Connected to database");
})

app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true, 
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

/////////////// Endpoints ////////////////
// Authentication 
app.get('/auth/get_session', authController.getSession);
app.post('/auth/register', authController.register);
app.post('/auth/login', authController.login);
app.post('/auth/logout', authController.logout);
// Topics 
app.get('/api/topics', topicController.getTopic);
app.post('/api/topic', topicController.addTopic);
app.delete('/api/topic', topicController.deleteTopic);
app.put('/api/topic_name', topicController.editTopicName);
app.put('/api/topic_description', topicController.editTopicDescription);
// Flash Cards
app.get('/api/flashcard/:topic_id', cardController.getFlashcard);
app.get('/api/cards/card_id', cardController.getFlashcard);
app.post('/api/create', cardController.addFlashcard);
app.put('/api/flashcard', cardController.editFlashcard);
app.delete('/api/flashcard', cardController.deleteFlashcard);

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on ${SERVER_PORT}`)
});