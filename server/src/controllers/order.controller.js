import { Order } from '../models/order.model.js';
import { OrderItem } from '../models/orderItem.model.js';
import { orderHistory } from '../models/orderHistory.model.js';

export const createOrder = async (req, res) => {
    try {
        const { userId, restaurantId, items, totalPrice, paymentMethod, deliveryAddress } = req.body;
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
        await orderHistory.create({ orderId: order._id, status: 'placed' });

        res.status(201).json({ message: 'Order placed successfully', orderId: order._id });


    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
};


//get all orders details
export const getOrderDetails = async (req, res) => {
    try {
        const { orderId } = req.params;

        const order = await Order.findById(orderId)
            .populate('userId', 'name email')
            .populate('restaurantId', 'name address')
            .lean();

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        const orderItems = await OrderItem.find({ orderId }).populate('menuItemId', 'name').lean();

        res.status(200).json({ order, items: orderItems });
    } catch (error) {
        res.status(500).json({ message: 'Error getting order details', error: error.message });
    }
};


//update order status 

export const updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        const validStatuses = ['pending', 'confirmed', 'preparing', 'outForDelivery', 'delivered', 'completed', 'cancelled'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ message: 'Invalid order status' });
        }

        const order = await Order.findByIdAndUpdate(orderId, { orderStatus: status }, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // log status change in order history

        await orderHistory.create({ orderId, status });

        res.status(200).json({ message: 'Order status updated successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Error updating order status', error: error.message });

    }
};


// cancle an order

export const cancelOrder = async (req, res) => {
    try {
        const { orderId } = req.params;

        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        if (order.orderStatus === 'completed') {
            return res.status(400).json({ message: 'Completed Orders cannot be cancelled' });
        }

        order.orderStatus = 'cancelled';
        await order.save();

        await orderHistory.create({ orderId, status: 'cancelled' });
        res.status(200).json({ message: 'Order cancelled successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Error cancelling order', error: error.message });
    }
};

export const getUserOrders = async (req, res) => {
    try {
        const { userId } = req.params;

        const orders = await Order.find({ userId })
            .populate('restaurantId', 'name')
            .sort({ createdAt: -1 });

        res.status(200).json({ orders });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user orders', error: error.message });
    }
};

