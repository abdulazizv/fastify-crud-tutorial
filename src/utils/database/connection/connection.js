const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/fastifycrud')
    .then(() => console.log('MongoDb connected...'))
    .catch((err) => console.error('Error connecting mongodb\n',err))