const express = require('express')
const rewardController = express.Router()
const Reward = require('./reward')
const bodyParser = require('body-parser');
rewardController.use(bodyParser.urlencoded({ extended: true}));
rewardController.use(bodyParser.json());
var mongoose = require('mongoose');


rewardController
  .post('/', async (req, res, next) => {
    console.log(req.get('content-type')); 
    console.log("req.body.payload: ", JSON.parse(req.body.payload))
    const reward = await Reward.create(JSON.parse(req.body.payload))
    res.status(200).send(reward)
  });

rewardController
  .put('/:id', async (req, res, next) => {
    const reward = await Reward.findByIdAndUpdate(req.params.id, { $set: req.body }, { $upsert: true, new: true })
    res.status(200).send(reward)

  })

rewardController
  .get('/', async (req, res, next) => {
    const reward = await Reward.find()
    res.status(200).send(reward)
  })

rewardController
  .get('/:id', async (req, res, next) => {
    const reward = await Reward.findById(req.params.id)
    res.status(200).send(reward)
  })

rewardController
  .delete('/:id', async (req, res, next) => {
    const reward = await Reward.deleteOne({ _id: req.params.id })
    res.status(200).send(reward)
  })

module.exports = rewardController

// Webhook example
// curl --data 'key=721b8c51a8a390207f01015e71779f5c&payload={"person":null,"origin":{"id":186742865,"type":"AffiliateMember","email":"referrer@example.com","customer_id":"910930418","ip_address":"127.0.0.1"},"advocate_origin":{"id":186742865,"type":"AffiliateMember","email":"referrer@example.com","customer_id":"910930418","ip_address":"127.0.0.1"},"friend_origin":null,"campaign":{"id":500548529,"type":"StandaloneCampaign","cached_slug":500548529,"tag_names":["default"],"origin_min_age":null,"origin_max_age":null,"new_customer":null},"offer":{"email":"referrer@example.com","short_url_code":"1a2PV","ip_address":"127.0.0.1"},"reward":{"id":8261257,"reason":"signup","incentive_type":"discount_coupon","incentive_description":"signup coupon \"SAMPLE-COUPON-CODE\" for $10.00 off","incentive_custom_description":null,"amount":"10.0","coupon":{"code":"SAMPLE-COUPON-CODE","active":true,"valid_until":null,"single_use":false,"used":false,"usages":null,"amount":10.0,"percentage_discount":null,"description":"$10","id":60477154,"expires_at":null},"coupon_code":"SAMPLE-COUPON-CODE","status":"Paid"}}' https://d6nlkmjo2j.execute-api.eu-central-1.amazonaws.com/dev/api/reward
