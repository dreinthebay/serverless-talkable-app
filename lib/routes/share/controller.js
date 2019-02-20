const express = require('express')
const Controller = express.Router()
const schema = require('./schema')
const bodyParser = require('body-parser');
Controller.use(bodyParser.urlencoded({ extended: true}));
Controller.use(bodyParser.json());
var mongoose = require('mongoose');
const producer = require('../../kafka.js');


Controller
  .post('/', async (req, res, next) => {
    console.log(req.get('content-type')); 
    console.log("req.body.payload: ", JSON.parse(req.body.payload))
    const payload = await schema.create(JSON.parse(req.body.payload))
    const kafkaPayload = await [{ topic: 'talkable-development', messages: payload, partition: 0 }];
    producer.send(kafkaPayload,  async (err, data) => {
          console.log(data);
          });
    res.status(200).send(payload)
  });

Controller
  .put('/:id', async (req, res, next) => {
    const payload = await schema.findByIdAndUpdate(req.params.id, { $set: req.body }, { $upsert: true, new: true })
    res.status(200).send(payload)

  })

Controller
  .get('/', async (req, res, next) => {
    const payload = await schema.find()
    res.status(200).send(payload)
  })

Controller
  .get('/:id', async (req, res, next) => {
    const payload = await schema.findById(req.params.id)
    res.status(200).send(payload)
  })

Controller
  .delete('/:id', async (req, res, next) => {
    const payload = await schema.deleteOne({ _id: req.params.id })
    res.status(200).send(payload)
  })

module.exports = Controller