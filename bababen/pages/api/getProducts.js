import Products from "../../models/Products";
import connectDB from "../../Middleware/Mongoose";

const handler = async (req,res) => {
    let products = await Products.find()

    res.status(200).json({products})

}

export default connectDB(handler)