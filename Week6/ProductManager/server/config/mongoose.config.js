const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch((err) => console.log("An error occurred connecting to the database", err));
    