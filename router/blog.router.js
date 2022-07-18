const express = require('express');
const { postBlog, findAllBlogs } = require('../controller/blog.controller');
const blogRouter = express.Router();


blogRouter.get('/', findAllBlogs);
blogRouter.post('/', postBlog);

module.exports = blogRouter;