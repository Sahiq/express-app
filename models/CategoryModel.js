const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    description: {
        type: String,
        trim: true,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: ''
    }
})


const Category = mongoose.model('categories', categorySchema);
module.exports = Category;