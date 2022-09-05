import Products from "../../models/Products";
import connectDB from "../../Middleware/Mongoose";

const handler = async (req, res) => {

    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let p = await Products.findByIdAndUpdate(req.body[i]._id, req.body[i])
        }

        res.status(200).json({ success: "success, product updated" })

    } else {
        res.status(400).json({ error: 'There is an error, may be wrong method.' })
    }

}

export default connectDB(handler)