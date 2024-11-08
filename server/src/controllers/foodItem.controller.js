import { FoodItem } from "../models/foodItem.model.js";
import fs from 'fs';

// add food items 

const addFoodItem = async (req, res) => {

        let image_filename = `${req.file.filename}`;

        const food = new FoodItem({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            quantityOptions: req.body.quantityOptions,
            frequencyOptions: req.body.frequencyOptions,
            category: req.body.category,
            imageUrl: image_filename
        })

        try {
            await food.save();
            res.json({success:true,message: "Food Item added successfully"})
        }catch (err) {
            res.status(500).json({success:false,message: "error"})
        }
}

export {addFoodItem}