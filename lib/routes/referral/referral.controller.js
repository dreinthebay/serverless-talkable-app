const express = require('express')
const referralController = express.Router()
const Referral = require('./referral')
const bodyParser = require('body-parser');
referralController.use(bodyParser.urlencoded({ extended: true}));
referralController.use(bodyParser.json());
var mongoose = require('mongoose');
const producer = require('../../kafka');


referralController
  .post('/', async (req, res, next) => {
    console.log(req.get('content-type')); 
    console.log("req.body.payload: ", JSON.parse(req.body.payload))
    const referral = await Referral.create(JSON.parse(req.body.payload))
    const kafkaPayload = await [{ topic: 'talkable-development', messages: referral, partition: 0 }];
    producer.send(kafkaPayload,  async (err, data) => {
          console.log(data);
          });
    res.status(200).send(referral)
  });

referralController
  .put('/:id', async (req, res, next) => {
    const referral = await Referral.findByIdAndUpdate(req.params.id, { $set: req.body }, { $upsert: true, new: true })
    res.status(200).send(referral)

  })

referralController
  .get('/', async (req, res, next) => {
    const referral = await Referral.find()
    res.status(200).send(referral)
  })

referralController
  .get('/:id', async (req, res, next) => {
    const referral = await Referral.findById(req.params.id)
    res.status(200).send(referral)
  })

referralController
  .delete('/:id', async (req, res, next) => {
    const referral = await Referral.deleteOne({ _id: req.params.id })
    res.status(200).send(referral)
  })

module.exports = referralController

// Webhook example
// curl --data 'key=721b8c51a8a390207f01015e71779f5c&payload={"person":null,"origin":{"id":186742865,"type":"AffiliateMember","email":"referrer@example.com","customer_id":"910930418","ip_address":"127.0.0.1"},"advocate_origin":{"id":186742865,"type":"AffiliateMember","email":"referrer@example.com","customer_id":"910930418","ip_address":"127.0.0.1"},"friend_origin":null,"campaign":{"id":500548529,"type":"StandaloneCampaign","cached_slug":500548529,"tag_names":["default"],"origin_min_age":null,"origin_max_age":null,"new_customer":null},"offer":{"email":"referrer@example.com","short_url_code":"1a2PV","ip_address":"127.0.0.1"},"reward":{"id":8260964,"reason":"shared","incentive_type":"discount_coupon","incentive_description":"shared coupon \"SAMPLE-COUPON-CODE\" for $10.00 off","incentive_custom_description":null,"amount":"10.0","coupon":{"code":"SAMPLE-COUPON-CODE","active":true,"valid_until":null,"single_use":false,"used":false,"usages":null,"amount":10.0,"percentage_discount":null,"description":"$10","id":60477154,"expires_at":null},"coupon_code":"SAMPLE-COUPON-CODE","status":"Paid"}}' http://localhost:3000/api/referral 
