// import OrderItem from "../model/order-item"
// import Order from "../model/orderModel"

// export const postOrder = async(req, res) => {
//     const orderItemIds = Promise.all(req.body.orderItems.map(async(orderItem) => {
//         let newOrderItem = new OrderItem({
//             quantity: orderItem.quantity,
//             product: orderItem.product
//         })
//         newOrderItem = await newOrderItem.save()
//         return newOrderItem._id
//     }))
//     const orderItemIdResolved = await orderItemIds

//     const totalPrices = await Promise.all(orderItemIdResolved.map(async(orderId) => {
//         const itemOrder = await OrderItem.findById(orderId).populate('product', 'productPrice')
//         const total = itemOrder.quantity * itemOrder.product.productPrice
//         return total
//     }))
//     const TotalPrice = totalPrices.reduce((a, b) => a + b, 0)

//     let order = new Order({
//         orderItems: orderItemIdResolved,
//         shippingAddress1: req.body.shippingAddress1,
//         shippingAddress2: req.body.shippingAddress2,
//         city: req.body.city,
//         zip: req.body.zip,
//         country: req.body.country,
//         phone: req.body.phone,
//         totalPrice: TotalPrice,
//         user: req.body.user
//     })
//     order = await order.save()
//     if(!order){
//         return res.status(400).json({error: 'Something went wrong'})
//     }
//     res.send(order)
// }
// // how reduce works
// // 4 5 6
// // 0 4
// // 4 5 
// // 9 6
// // 15


import OrderItem from "../model/order-item.js";
import Order from "../model/orderModel.js";

export const postOrder = async (req, res) => {
    try {
        // Check order items
        if (!req.body.orderItems || req.body.orderItems.length === 0) {
            return res.status(400).json({
                error: "No order items provided"
            });
        }

        // Create and save order items
        const orderItemIds = await Promise.all(
            req.body.orderItems.map(async (orderItem) => {
                const newOrderItem = new OrderItem({
                    quantity: orderItem.quantity,
                    product: orderItem.product
                });

                const savedOrderItem = await newOrderItem.save();

                return savedOrderItem._id;
            })
        );

        // Calculate each item's total price
        const totalPrices = await Promise.all(
            orderItemIds.map(async (orderItemId) => {
                const itemOrder = await OrderItem.findById(orderItemId)
                    .populate("product", "productPrice");

                if (!itemOrder || !itemOrder.product) {
                    throw new Error("Order item or product not found");
                }

                return itemOrder.quantity * itemOrder.product.productPrice;
            })
        );

        // Calculate total order price
        const totalPrice = totalPrices.reduce(
            (total, price) => total + price,
            0
        );

        // Create order
        let order = new Order({
            orderItems: orderItemIds,
            shippingAddress1: req.body.shippingAddress1,
            shippingAddress2: req.body.shippingAddress2,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            totalPrice: totalPrice,
            user: req.body.user
        });

        order = await order.save();

        return res.status(201).json(order);

    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};
