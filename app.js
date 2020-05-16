const express = require("express");
const morgan = require("morgan");
const app = express();

// Importing Routes
const IndexRouter = require("./routes/indexRoute");
const CategoryRouter = require("./routes/categoryRoute");
const PostRouter = require("./routes/postRoute");


// MiddleWares
app.use(express.json());
app.use(morgan('dev'));


// Defining Router 

app.use('/', IndexRouter);
app.use('/api/v1/categories', CategoryRouter);
app.use('/api/v1/posts', PostRouter);



module.exports = app;