const express = require('express');
const { uploadBlog, findAllBlogs, deleteBlog, findSingleBlog } = require('../controller/blog.controller');
const blogRouter = express.Router();


blogRouter.get('/', findAllBlogs);
blogRouter.get('/:id', findSingleBlog);
blogRouter.post('/', uploadBlog);
blogRouter.delete('/:id', deleteBlog);

module.exports = blogRouter;