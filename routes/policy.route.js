const express = require('express');
const { newCancellationType, newCheckInOutPolicy, newCustomRule, newPropertyRule, newSmokingPolicy } = require('../controllers/policy/post.controller');
const { getAllSmokingPolicies, getAllPropertyRule, getAllCustomPolicy, getAllCheckInOutPolicy, getAllCancellationPolicy } = require('../controllers/policy/get.controller');
const { getSingleSmokingPolicy, getSinglePropertyRule, getSingleCustomPolicy, getSingleCheckInOutpolicy, getSingleCancellationpolicy } = require('../controllers/policy/get.single.controller');
const { updateCancellationType, updateCheckInOutPolicy, updateCustomPolicy, updatePropertyRule, updateSmokingPolicy } = require('../controllers/policy/put.controller');
const { deleteSmokingPolicy, deletePropertyRule, deleteCustomPolicy, deleteCheckInOutPolicy, deleteCancellationPolicy } = require('../controllers/policy/delete.controller');

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
policyRouter.route('/property-rule/:id').get(getSinglePropertyRule);
policyRouter.route('/custom-policy/:id').get(getSingleCustomPolicy);
policyRouter.route('/checkinout-policy/:id').get(getSingleCheckInOutpolicy);
policyRouter.route('/cancellation-policy/:id').get(getSingleCancellationpolicy);



// Correct way to handle Put Single request 
policyRouter.route('/smoking-policy/:id').put(updateSmokingPolicy);
policyRouter.route('/property-rule/:id').put(updatePropertyRule);
policyRouter.route('/custom-policy/:id').put(updateCustomPolicy);
policyRouter.route('/checkinout-policy/:id').put(updateCheckInOutPolicy);
policyRouter.route('/cancellation-policy/:id').put(updateCancellationType);


// Correct way to handle Put Single request 
policyRouter.route('/smoking-policy/:id').delete(deleteSmokingPolicy);
policyRouter.route('/property-rule/:id').delete(deletePropertyRule);
policyRouter.route('/custom-policy/:id').delete(deleteCustomPolicy);
policyRouter.route('/checkinout-policy/:id').delete(deleteCheckInOutPolicy);
policyRouter.route('/cancellation-policy/:id').delete(deleteCancellationPolicy);

module.exports = policyRouter;