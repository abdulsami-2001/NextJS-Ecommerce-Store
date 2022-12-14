import Products from "../../models/Products";
import connectDB from "../../Middleware/Mongoose";

const handler = async (req, res) => {

    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let p = new Products({
                title:req.body[i].title,
                slug:req.body[i].slug, 
                desc:req.body[i].desc,
                img:req.body[i].img,
                category:req.body[i].category,
                size:req.body[i].size,
                color:req.body[i].color,
                price:req.body[i].price,
                availableQty:req.body[i].availableQty,
            })

            await p.save()
        }
        
        res.status(200).json({success:"success, product added"})

    } else {
        res.status(400).json({ error: 'There is an error, may be wrong method.' })
    }

}

export default connectDB(handler)