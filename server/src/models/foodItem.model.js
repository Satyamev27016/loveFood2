import mongoose,{Schema} from 'mongoose';

const FoodItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    // quantityOptions: {
    //     type: [String],
    //     enum: ['whole', 'half', 'quarter'],
    //     required: true,
    //     default: ['whole']
    // },
    // frequencyOptions: {
    //     type: [String],
    //     enum: ['1 time', '2 times', '3 times'],
    //     required: true,
    //     default: ['1 time']
    // },
    category: {
        type: String,
        enum: ['veg', 'non-veg'],
        required: true
    },
    image: { type: String },
})

export const FoodItem = mongoose.models.FoodItem || mongoose.model('FoodItem', FoodItemSchema);