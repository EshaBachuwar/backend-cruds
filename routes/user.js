import express from 'express';
import {
  addUser,
  allUsers,
  deletetUser,
  updateUser,
} from '../controllers/user.js';

const router = express.Router();

router.post('/', addUser);
router.delete('/:id', deletetUser);
router.put('/:id', updateUser);
router.get('/', allUsers);
router.get('/test', (req, res) => {
  res.send('esha pisha');
});

export default router;
