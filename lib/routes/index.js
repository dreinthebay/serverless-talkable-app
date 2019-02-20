const express = require('express')
const router = express.Router()
// Add all routes here
const referral = require('./referral/referral.controller')
router.use('/referral', referral)

const reward = require('./reward/reward.controller')
router.use('/reward', reward)

//This refers to the Talkable Webhook they name as "Offer Signup"
const advocateSignup = require('./advocateSignup/advocateSignup.controller')
router.use('/advocateSignup', advocateSignup)

const friendSignup = require('./friendSignup/controller')
router.use('/friendSignup', friendSignup)

const share = require('./share/controller')
router.use('/share', share)

//Template:
//const <folder name> = require('./<folder name>/controller')
//router.use('/<folder name>', <folder name>)

module.exports = router
