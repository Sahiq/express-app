// Helpers
const GeneralHelper = require('./../helpers/generalHelper')


//  Models
const Category = require('./../models/CategoryModel')


//  Creating a new Category



exports.createCatagory = async (req, res) => {


    try {
        var slug = GeneralHelper.slugify(req.body.title)

        // Only for testing Avoid Duplicasy
        req.body.slug = slug + Date.now();

        const category = await Category.create(req.body);
        res.json({
            status: "success",
            message: "Category Created Successfully",
            data: {
                category
            }
        })
    } catch (err) {
        res.status(401).json({
            status: "error",
            message: "Category can not be Created",
            error: err
        })
    }
}

//  Fetching All Categories

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json({
            status: "success",
            message: "Categories Displayed successfuly",
            categoryCount: categories.length,
            data: {
                categories
            }
        })

    } catch (err) {
        res.status(401).json({
            status: "error",
            message: "Some error in display the categories",
            error: err
        })
    }
}



// Updating Category

exports.updateCategory = async (req, res) => {
    console.log(req.params);
    console.log(req.body);
    try {
        req.body.updatedAt = Date.now()
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json({
            status: "success",
            message: "Category Updated Successfully",
            data: {
                category
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "error",
            message: "Category couldn't be Updated",
            error: err
        })
    }
}

// Delete Category

exports.deleteCategory = async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);

        // For Deleting All Categories
        // await Category.findByIdAndDelete(req.params.id);


        res.json({
            status: "success",
            message: "Category Deleted Successfully"
        })

    } catch (err) {
        res.status(401).json({
            status: "error",
            message: "Category couldn't be Deleted",
            error: err

        })
    }

}