import express from 'express';
import { addFoodItem } from '../controllers/foodItem.controller.js';
import multer from 'multer';

const foodRouter = express.Router();

// image storage Engine 

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
}) 

const upload = multer({storage: storage})

foodRouter.post('/add', upload.single('image'), addFoodItem)



export default foodRouter;