const orderHistorySchema = new Schema({
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

module.exports = mongoose.models.OrderHistory || mongoose.model('OrderHistory', orderHistorySchema);