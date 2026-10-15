import OrderItem from "../model/order-item"
import Order from "../model/orderModel"

export const postOrder = async(req, res) => {
    const orderItemIds = Promise.all(req.body.orderItems.map(async(orderItem) => {
        let newOrderItem = new OrderItem({
            quantity: orderItem.quantity,
            product: orderItem.product
        })
        newOrderItem = await newOrderItem.save()
        return newOrderItem._id
    }))
    const orderItemIdResolved = await orderItemIds
}