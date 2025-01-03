import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

// router.post('/create-user');
router.post('/registerUser', UserControllers.registerUser);
router.get('/', UserControllers.getAllUsers);

export const UserRoutes = router;
