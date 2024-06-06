const express =require('express');
const blogcontroller= require('../controller/blog.controller');


const router = express.Router();


router.get('/blogs/create',blogcontroller.blog_create_get);

router.get('/blogs',blogcontroller.blog_index);
  
  
  // using post method 
  
 router.post('/blogs', blogcontroller.blog_create_post);
  
  // when you click on the new blog on the page u get the underheaded
  
  router.get('/blogs/:id'  ,blogcontroller.blog_details);
  
  // for deleting 
   router.delete('/blogs/:id',blogcontroller.blog_delete);
   module.exports = router;