const express = require('express')
const router = express.Router()
// Add all routes here
const referral = require('./referral/referral.controller')
router.use('/referral', referral)

const reward = require('./reward/reward.controller')
router.use('/reward', reward)

//Fix offerSignup Controller and Schema -- It is not working on serverless
const offerSignup = require('./offerSignup/offerSignup.controller')
router.use('/offerSignup', offerSignup)

module.exports = router
