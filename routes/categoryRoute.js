const express = require('express');
const Router = express.Router();

// Imorting Controllers
const CategoryController = require('./../controllers/categoryController');

Router
    .route('/')
    .get(CategoryController.getCategories)
    .post(CategoryController.createCatagory)



Router
    .route('/:id')
    .patch(CategoryController.updateCategory)
    .delete(CategoryController.deleteCategory)





module.exports = Router;