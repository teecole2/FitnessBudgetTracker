// Requiring necessary npm packages
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// Creating express app
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// Routes -- Requiring our routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});