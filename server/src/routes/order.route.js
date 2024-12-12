import express from 'express';
import { createOrder,getOrderDetails,updateOrderStatus, cancelOrder,getUserOrders } from '../controllers/order.controller.js';


const router = express.Router();

router.post('/create', createOrder);
router.get('/:orderId', getOrderDetails);
router.put('/:orderId/status', updateOrderStatus);
router.delete('/:orderId', cancelOrder);
router.get('/user/:userId', getUserOrders);

export default router;