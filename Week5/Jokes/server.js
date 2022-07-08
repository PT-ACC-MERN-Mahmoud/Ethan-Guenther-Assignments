const express = require("express");

const app = express();

const port = 8000;

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended:true}));

const allRoutesJokes = require("./server/routes/jokes.routes")

allRoutesJokes(app);

app.listen(port, () => console.log(`Server Running on Port ${port}`));