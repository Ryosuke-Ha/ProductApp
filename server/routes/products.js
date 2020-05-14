const express = require('express')
const router = express.Router()
const Product = require('../model/product')


router.get('', function(req, res){
    Product.find({}, function(error, foundProducts){
        return res.json(foundProducts)
    })
})

router.get('/:productId', function(req, res){
    const productId = req.params.productId
    Product.findById(productId, function(error, foundProduct){
        if(error){
            return res.status(422).send({ error:[{title: 'Product error', detail: 'Product not found!'}]})
        }

        return res.json(foundProduct)
    })
})

module.exports = router