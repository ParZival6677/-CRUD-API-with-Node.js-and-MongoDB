const express = require('express');
const { createBlogValidationRules } = require('../controllers/blogController');
const { validationResult } = require('express-validator');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.post('/blogs', createBlogValidationRules(), (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }, blogController.createBlog);


router.post('/blogs', blogController.createBlog);
router.get('/blogs', blogController.getAllBlogs);
router.get('/blogs/:id', blogController.getBlogById);
router.put('/blogs/:id', blogController.updateBlog);
router.delete('/blogs/:id', blogController.deleteBlog);

module.exports = router;
