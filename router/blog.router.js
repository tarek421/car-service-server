const express = require('express');
const { uploadBlog, findAllBlogs } = require('../controller/blog.controller');
const blogRouter = express.Router();


blogRouter.get('/', findAllBlogs);
blogRouter.post('/', uploadBlog);

module.exports = blogRouter;