const express = require('express')
const advocateSignupController = express.Router()
const advocateSignupSchema = require('./advocateSignup')
const bodyParser = require('body-parser');
advocateSignupController.use(bodyParser.urlencoded({ extended: true}));
advocateSignupController.use(bodyParser.json());
var mongoose = require('mongoose');
const producer = require('../../kafka.js');


advocateSignupController
  .post('/', async (req, res, next) => {
    console.log(req.get('content-type')); 
    console.log("req.body.payload: ", JSON.parse(req.body.payload))
    const advocateSignup = await advocateSignupSchema.create(JSON.parse(req.body.payload))
    const kafkaPayload = await [{ topic: 'talkable-development', messages: advocateSignup, partition: 0 }];
    producer.send(kafkaPayload,  async (err, data) => {
          console.log(data);
          });
    res.status(200).send(advocateSignup)
  });

advocateSignupController
  .put('/:id', async (req, res, next) => {
    const advocateSignup = await advocateSignupSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, { $upsert: true, new: true })
    res.status(200).send(advocateSignup)

  })

advocateSignupController
  .get('/', async (req, res, next) => {
    const advocateSignup = await advocateSignupSchema.find()
    res.status(200).send(advocateSignup)
  })

advocateSignupController
  .get('/:id', async (req, res, next) => {
    const advocateSignup = await advocateSignupSchema.findById(req.params.id)
    res.status(200).send(advocateSignup)
  })

advocateSignupController
  .delete('/:id', async (req, res, next) => {
    const advocateSignup = await advocateSignupSchema.deleteOne({ _id: req.params.id })
    res.status(200).send(advocateSignup)
  })

module.exports = advocateSignupController

// Webhook example
//curl --data 'key=721b8c51a8a390207f01015e71779f5c&payload={"campaign":{"cached_slug":615437538,"id":615437538,"new_customer":null,"origin_max_age":null,"origin_min_age":null,"tag_names":["default"],"type":"StandaloneCampaign"},"email":"john@example.com","first_name":"John","gender":null,"last_name":"Doe","offer":{"email":"referrer@example.com","short_url_code":"1a2PV","ip_address":"127.0.0.1"},"opted_in_at":null,"sub_choice":false,"subscribed_at":null,"unsubscribed_at":null}' http://localhost:3000/api/offersignup 
