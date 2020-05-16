const mongoose = require('mongoose');
const app = require('./app');


// Connection Establishment


const MongoURL = "mongodb://localhost/blog";
mongoose.connect(MongoURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con => {
    console.log("MongoDB Connect @ :", MongoURL);
})

const port = 8000;
app.listen(port, '127.0.0.1', () => {
    console.log(`server listning at port : ${port}`);
})