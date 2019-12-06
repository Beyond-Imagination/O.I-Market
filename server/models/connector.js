const mongoose = require('mongoose');

function connect() {
    mongoose.connect(process.env.DB_URI, { //This is only for test. It will be replaced soon
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch(error => console.error(error));
}

exports.connect = connect;
