import express from 'express';
import messageController from '../controllers/message-controller.js';

const router = express.Router();

router.get('/', messageController.getAllMessages);
router.post('/', messageController.createMessage);

export default router;
