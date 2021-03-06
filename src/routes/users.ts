import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const router = Router();

router.get('/users/:id/subordinates', UsersController.getSubordinates);

export default router;
