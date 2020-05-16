const express = require('express');
const Router = express.Router();

const PostController = require('./../controllers/postController')



Router
    .route('/')
    .get(PostController.getPosts);








module.exports = Router;