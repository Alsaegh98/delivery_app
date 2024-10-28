const express = require('express');
const router = express.Router();

const Order = require('../models/order');

router.get('/', async (req, res) => {
    try {
      const populatedOrders = await Order.find({}).populate('owner')
      console.log('orders: ', populatedOrders)
      res.render('orders/index.ejs', {
        orders: populatedOrders,
      })
    } catch (error) {
      console.log(error)
      res.redirect('/')
    }
  })

// router.get('/new', async (req, res) => {
//     res.render('orders/new.ejs');
//   });
router.get("/new" , (req , res) => {
    res.render("orders/new.ejs")
})

  router.post('/', async (req, res) => {
    req.body.owner = req.session.user._id
    await Order.create(req.body)
    res.redirect('/orders')
  })
  
  router.get('/:orderId', async (req, res) => {
    try {
      const populatedOrders = await Order.findById(
        req.params.orderId
      ).populate('owner');
  
      res.render('orders/show.ejs', {
        order: populatedOrders,
      });
    } catch (error) {
      console.log(error);
      res.redirect('/');
    }
  });
  

module.exports = router;