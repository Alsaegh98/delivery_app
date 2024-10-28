const express = require('express');
const router = express.Router();

const order = require('../models/order');

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

router.get('/new', (req, res) => {
    res.render('listings/new.ejs')
  })

  router.post('/', async (req, res) => {
    req.body.owner = req.session.user._id
    await Listing.create(req.body)
    res.redirect('/orders')
  })
  

module.exports = router;