import {Order} from '../models/order.model.js';
import { OrderItem } from '../models/orderItem.model.js';
import {orderHistory} from '../models/orderHistory.model.js';

exports.createOrder = async (req, res) => {
    try{
        const { userId, restaurantId,items, totalPrice, paymentMethod, deliveryAddress } = req.body;
        // creating the order
        const order = await Order.create({
            userId, 
            restaurantId,
            items,
            totalPrice,
            paymentMethod,
            deliveryAddress,
        });

        // add items to orderItems

        const orderItems = items.map(item => ({
            orderId: order._id,
            menuItemId: item.menuItemId,
            quantity: item.quantity,
            price: item.price
        }));


        await OrderItem.insertMany(orderItems);
        await orderHistory.create({orderId: order._id, status: 'placed'});

        res.status(201).json({message: 'Order placed successfully', orderId: order._id});


    } catch (error) {
        res.status(500).json({message: 'Error creating order', error: error.message});
    }
};