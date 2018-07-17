import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import blogCtrl from '../controllers/blog.controller';
const router = express.Router();

router.route('/')
  /** GET /api/posts - Get list of posts */
  .get(blogCtrl.list)

  /** POST /api/posts - Create new post */
  .post(blogCtrl.create);

router.route('/edit/:id')
  .get(blogCtrl.get)
  .post(blogCtrl.update); 
  
router.route('/delete/:id')
  .delete(blogCtrl.remove);   


export default router;
