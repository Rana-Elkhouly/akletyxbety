const orderRepository = require('../repository/orderRepository')
const productRepository = require('../repository/productrepository');

   exports.createOrder = async (req, res) => {
       try {
           let order = req.body;
           order.userId = req._id;
           console.log(order);
           let createdOrder = await orderRepository.createOrder(order);
           
        //    res.status(200).json(createdOrder)
        res.status(200).json({
            type: "success",
            mgs: "Process Successful",
            data: createdOrder
        })
       } catch (err) {
           console.log(err)
           res.status(400).json({
               type: "Invalid",
               msg: "Something Went Wrong",
               err: err
           })
       }
   }
   exports.getOrder = async (req, res) => {
       try {
           let orders = await orderRepository.getAllOrders()
        //    res.status(200).json({
        //        status: true,
        //        data: orders
        //    })
        res.send(orders);
       } catch (err) {
           console.log(err)
           res.status(400).json({
               type: "Invalid",
               msg: "Something Went Wrong",
               err: err
           })
       }
   }
   
   exports.emptyCart = async (req, res) => {
       try {
           let cart = await cartRepository.cart();
           cart.items = [];
           cart.subTotal = 0
           let data = await cart.save();
           res.status(200).json({
               type: "success",
               mgs: "Cart Has been emptied",
               data: data
           })
       } catch (err) {
           console.log(err)
           res.status(400).json({
               type: "Invalid",
               msg: "Something Went Wrong",
               err: err
           })
       }
   }
exports.test=(req,res,next)=>{
   console.log(req._id)
}