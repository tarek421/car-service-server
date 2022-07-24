const { v4: uuidv4 } = require('uuid');
const Blog = require('../model/blog.modal');

exports.findAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(200).json(error.message);
    }
}

exports.findSingleBlog = async (req, res) => {
    try {
        const blog = await Blog.find({id: req.params.id});
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

exports.uploadBlog = async (req, res) => {
    try {
        const newBlog = new Blog({
            id: uuidv4(),
            title: req.body.title,
            catagory: req.body.catagory,
            coverImage: req.body.coverImage,
            description: req.body.description,
            subtitle1: req.body.subtitle1,
            paragraph1: req.body.paragraph1,
            image1: req.body.image1,
            image2: req.body.image2,
            subtitle2: req.body.subtitle2,
            paragraph2: req.body.paragraph2,
            paragraph3: req.body.paragraph3,
            paragraph4: req.body.paragraph4
        })
        await newBlog.save();
        res.status(200).json({ message: 'successfully created a Blog', newBlog });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.deleteBlog = async (req, res) => {
    try {
        await Blog.deleteOne({id: req.params.id});
        res.status(200).json({message: "Blog deleted successfully"})
    } catch (error) {
        res.status(500).json(error.message);
    }
}