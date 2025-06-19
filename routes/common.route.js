const express = require('express');
const { newPolicyType, newRoomView, newAmenitiesCategory, newIdProof, newUtilityType, newMealPlan, newAmenitiesType, newPropertyType, newBedType, newRoomType, newRoomSizeUnit, newBankDetail, newAddress, newStarCategory } = require('../controllers/common/post.controller');
const { getPolicyType, getPropertyType, getBedView, getRoomView, getAmenitiesCategory, getUtilityType, getMealPlan, getIdProof, getAllAmenitiesTypes, getAllAddresses, getAllBankDetail, getAllRoomSizeUnits, getAllRoomTypes, getAllStarCategories } = require('../controllers/common/get.controller');
const { getSinglePolicyType, getSinglePropertyType, getSingleBedView, getSingleRoomView, getSingleAmenitiesCategory, getSingleUtilityType, getSingleMalPlan, getSingleIdProof, getSingleAmenitiesType, getSingleAddress, getSingleBankDetail, getSingleRoomSizeUnits, getSingleRoomType, getSingleStarCategories } = require('../controllers/common/get.single.controller');
const { updatePolicyType, updatePropertyType, updateBedView, updateRoomView, updateAmenitiesCategory, updateUtilityType, updateMealPlan, updateIdProof, updateAmenitiesType, updateAddress, updateBankDetail, updateRoomSizeUnits, updateRoomTypes, updateStarCategories } = require('../controllers/common/put.controller');
const { deletePolicyType, deletePropertytype, deleteBedView, deleteRoomView, deleteAmenitiesCategory, deleteUtilityType, deleteMealPlan, deleteIdProof, deleteAmenitiesType, deleteAddress, deletebankDetail, deleteRoomSizeUnits, deleteRoomTypes, deleteStarCategories } = require('../controllers/common/delete.controller');

const commonRouter = express.Router();

// Correct way to handle POST request 
commonRouter.route('/property-type').post(newPropertyType);
commonRouter.route('/bed-type').post(newBedType);
commonRouter.route('/room-view').post(newRoomView);
commonRouter.route('/amenities-category').post(newAmenitiesCategory);
commonRouter.route('/policy-type').post(newPolicyType);
commonRouter.route('/utility-type').post(newUtilityType);
commonRouter.route('/meal-plan').post(newMealPlan);
commonRouter.route('/idProof').post(newIdProof);
commonRouter.route('/amenities-type').post(newAmenitiesType);
commonRouter.route('/room-type').post(newRoomType);
commonRouter.route('/room-size').post(newRoomSizeUnit);
commonRouter.route('/account-detail').post(newBankDetail);
commonRouter.route('/address-detail').post(newAddress);
commonRouter.route('/star-category').post(newStarCategory);



// Correct way to handle GET ALL request 
commonRouter.route('/policy-type').get(getPolicyType);
commonRouter.route('/property-type').get(getPropertyType);
commonRouter.route('/bed-view').get(getBedView);
commonRouter.route('/room-view').get(getRoomView);
commonRouter.route('/amenities-category').get(getAmenitiesCategory);
commonRouter.route('/utility-type').get(getUtilityType);
commonRouter.route('/meal-plan').get(getMealPlan);
commonRouter.route('/idProof').get(getIdProof);
commonRouter.route('/amenities-type').get(getAllAmenitiesTypes);
commonRouter.route('/address-detail').get(getAllAddresses);
commonRouter.route('/account-detail').get(getAllBankDetail);
commonRouter.route('/room-size').get(getAllRoomSizeUnits);
commonRouter.route('/room-type').get(getAllRoomTypes);
commonRouter.route('/star-category').get(getAllStarCategories);



// Correct way to handle GET SINGLE request 
commonRouter.route('/policy-type/:id').get(getSinglePolicyType);
commonRouter.route('/property-type/:id').get(getSinglePropertyType);
commonRouter.route('/bed-view/:id').get(getSingleBedView);
commonRouter.route('/room-view/:id').get(getSingleRoomView);
commonRouter.route('/amenities-category/:id').get(getSingleAmenitiesCategory);
commonRouter.route('/utility-type/:id').get(getSingleUtilityType);
commonRouter.route('/meal-plan/:id').get(getSingleMalPlan);
commonRouter.route('/idProof/:id').get(getSingleIdProof);
commonRouter.route('/amenities-type/:id').get(getSingleAmenitiesType);
commonRouter.route('/address-detail/:id').get(getSingleAddress);
commonRouter.route('/account-detail/:id').get(getSingleBankDetail);
commonRouter.route('/room-size/:id').get(getSingleRoomSizeUnits);
commonRouter.route('/room-type/:id').get(getSingleRoomType);
commonRouter.route('/star-category/:id').get(getSingleStarCategories);

// Correct way to handle Update request 
commonRouter.route('/policy-type/:id').put(updatePolicyType);
commonRouter.route('/property-type/:id').put(updatePropertyType);
commonRouter.route('/bed-view/:id').put(updateBedView);
commonRouter.route('/room-view/:id').put(updateRoomView);
commonRouter.route('/amenities-category/:id').put(updateAmenitiesCategory);
commonRouter.route('/utility-type/:id').put(updateUtilityType);
commonRouter.route('/meal-plan/:id').put(updateMealPlan);
commonRouter.route('/idProof/:id').put(updateIdProof);
commonRouter.route('/amenities-type/:id').put(updateAmenitiesType);
commonRouter.route('/address-detail/:id').put(updateAddress);
commonRouter.route('/account-detail/:id').put(updateBankDetail);
commonRouter.route('/room-size/:id').put(updateRoomSizeUnits);
commonRouter.route('/room-type/:id').put(updateRoomTypes);
commonRouter.route('/star-category/:id').put(updateStarCategories);

// Correct way to handle Delete request 
commonRouter.route('/policy-type/:id').delete(deletePolicyType);
commonRouter.route('/property-type/:id').delete(deletePropertytype);
commonRouter.route('/bed-view/:id').delete(deleteBedView);
commonRouter.route('/room-view/:id').delete(deleteRoomView);
commonRouter.route('/amenities-category/:id').delete(deleteAmenitiesCategory);
commonRouter.route('/utility-type/:id').delete(deleteUtilityType);
commonRouter.route('/meal-plan/:id').delete(deleteMealPlan);
commonRouter.route('/idProof/:id').delete(deleteIdProof);
commonRouter.route('/amenities-type/:id').delete(deleteAmenitiesType);
commonRouter.route('/address-detail/:id').delete(deleteAddress);
commonRouter.route('/account-detail/:id').delete(deletebankDetail);
commonRouter.route('/room-size/:id').delete(deleteRoomSizeUnits);
commonRouter.route('/room-type/:id').delete(deleteRoomTypes);
commonRouter.route('/star-category/:id').delete(deleteStarCategories);

module.exports = commonRouter;