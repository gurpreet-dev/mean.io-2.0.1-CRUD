import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import testCtrl from '../controllers/test.controller';
console.log('server_test_routess');
const router = express.Router();

router.route('/')
  /** GET /api/posts - Get list of posts */
  //.get(testCtrl.list)

  /** POST /api/posts - Create new post */
  .post(testCtrl.create);


export default router;
