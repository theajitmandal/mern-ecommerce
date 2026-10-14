import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const orderItemSchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    product: {
      type: ObjectId,
      required: true,
      ref: 'Product'
    },
  },
  {
    timestamps: true,
  }
);

const OrderItem = mongoose.model("OrderItem", orderItemSchema);

export default OrderItem;
