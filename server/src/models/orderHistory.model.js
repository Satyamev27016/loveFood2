import mongoose from 'mongoose';

const orderHistorySchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    status: {
        type: String,
        enum: ['placed', 'delivered', 'cancelled'],
        required: true
    }
}, { timestamps: true });

export const orderHistory = mongoose.model("OrderHistory", orderHistorySchema);