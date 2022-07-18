const express = require('express');
const { postBlog } = require('../controller/blog.controller');
const blogRouter = express.Router();



blogRouter.post('/', postBlog);

module.exports = blogRouter;