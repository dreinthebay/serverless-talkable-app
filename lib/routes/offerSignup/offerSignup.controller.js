const express = require('express')
const offerSignupController = express.Router()
const offerSignupSchema = require('./offersignup')
const bodyParser = require('body-parser');
offerSignupController.use(bodyParser.urlencoded({ extended: true}));
offerSignupController.use(bodyParser.json());
var mongoose = require('mongoose');


offerSignupController
  .post('/', async (req, res, next) => {
    console.log(req.get('content-type')); 
    console.log("req.body.payload: ", JSON.parse(req.body.payload))
    const offersignup = await offerSignupSchema.create(JSON.parse(req.body.payload))
    res.status(200).send(offersignup)
  });

offerSignupController
  .put('/:id', async (req, res, next) => {
    const offersignup = await offerSignupSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, { $upsert: true, new: true })
    res.status(200).send(offersignup)

  })

offerSignupController
  .get('/', async (req, res, next) => {
    const offersignup = await offerSignupSchema.find()
    res.status(200).send(offersignup)
  })

offerSignupController
  .get('/:id', async (req, res, next) => {
    const offersignup = await offerSignupSchema.findById(req.params.id)
    res.status(200).send(offersignup)
  })

offerSignupController
  .delete('/:id', async (req, res, next) => {
    const offersignup = await offerSignupSchema.deleteOne({ _id: req.params.id })
    res.status(200).send(offersignup)
  })

module.exports = offerSignupController

// Webhook example
//curl --data 'key=721b8c51a8a390207f01015e71779f5c&payload={"campaign":{"cached_slug":615437538,"id":615437538,"new_customer":null,"origin_max_age":null,"origin_min_age":null,"tag_names":["default"],"type":"StandaloneCampaign"},"email":"john@example.com","first_name":"John","gender":null,"last_name":"Doe","offer":{"email":"referrer@example.com","short_url_code":"1a2PV","ip_address":"127.0.0.1"},"opted_in_at":null,"sub_choice":false,"subscribed_at":null,"unsubscribed_at":null}' http://localhost:3000/api/offersignup 
