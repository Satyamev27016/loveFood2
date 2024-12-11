const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [
        {
            foodItem: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'FoodItem',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                default: 1
            },
            frequency: {
                type: String,
                enum: ['1 time', '2 times', '3 times'],
                required: true,
                default: '1 time'
            },
        },
    ],

    totalAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['placed', 'delivered', 'cancelled'],
        required: true,
        default: 'pending'
    },
    deliveryAddress: {
        type: String,
        required: true
    },
    orderedAt: {
        type: Date,
        default: Date.now
    },
}, { timestamps: true });

module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema);
