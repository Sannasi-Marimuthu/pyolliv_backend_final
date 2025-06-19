const express = require('express');
const { newCancellationType, newCheckInOutPolicy, newCustomRule, newPropertyRule, newSmokingPolicy } = require('../controllers/policy/post.controller');
const { getAllSmokingPolicies, getAllPropertyRule, getAllCustomPolicy, getAllCheckInOutPolicy, getAllCancellationPolicy } = require('../controllers/policy/get.controller');
const { getSingleSmokingPolicy } = require('../controllers/policy/get.single.controller');

const policyRouter = express.Router();

// Correct way to handle POST request 
policyRouter.route('/cancellation-policy').post(newCancellationType);
policyRouter.route('/checkinout-policy').post(newCheckInOutPolicy);
policyRouter.route('/custom-policy').post(newCustomRule);
policyRouter.route('/property-rule').post(newPropertyRule);
policyRouter.route('/smoking-policy').post(newSmokingPolicy);


// Correct way to handle GET ALL request 
policyRouter.route('/smoking-policy').get(getAllSmokingPolicies);
policyRouter.route('/property-rule').get(getAllPropertyRule);
policyRouter.route('/custom-policy').get(getAllCustomPolicy);
policyRouter.route('/checkinout-policy').get(getAllCheckInOutPolicy);
policyRouter.route('/cancellation-policy').get(getAllCancellationPolicy);


// Correct way to handle GET Single request 
policyRouter.route('/smoking-policy/:id').get(getSingleSmokingPolicy);
// policyRouter.route('/property-rule').get(getAllPropertyRule);
// policyRouter.route('/custom-policy').get(getAllCustomPolicy);
// policyRouter.route('/checkinout-policy').get(getAllCheckInOutPolicy);
// policyRouter.route('/cancellation-policy').get(getAllCancellationPolicy);


module.exports = policyRouter;