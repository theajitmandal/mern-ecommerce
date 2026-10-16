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

    const totalPrices = await Promise.all(orderItemIdResolved.map(async(orderId) => {
        const itemOrder = await OrderItem.findById(orderId).populate('product', 'productPrice')
        const total = itemOrder.quantity * itemOrder.product.productPrice
        return total
    }))
    const TotalPrice = totalPrices.reduce((a, b) => a + b, 0)

    let order = new Order({
        orderItems: orderItemIdResolved,
        shippingAddress1: req.body.shippingAddress1,
        shippingAddress2: req.body.shippingAddress2,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        totalPrice: TotalPrice,
        user: req.body.user
    })
    order = await order.save()
    if(!order){
        return res.status(400).json({error: 'Something went wrong'})
    }
    res.send(order)
}
// how reduce works
// 4 5 6
// 0 4
// 4 5 
// 9 6
// 15