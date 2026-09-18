import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema
// ObjectId is used to make relation with other model

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
            trim: true
        },
        productPrice: {
            type: Number,
            required: true,
            min: 0
        },
        countInStock: {
            type: Number,
            required: true,
            min: 0
        },
        productDescription: {
            type: String,
            required: true
        },
        productImage: {
            type: String,
            required: true
        },
        productRating: {
            type: Number,
            default: 0,
            max: 5,
            min: 0
        },
        category: {
            type: ObjectId,
            required: true,
            ref: 'Category'
        }
    }, { timestamps: true }
)

const Product = mongoose.model("Product", productSchema);

export default Product;