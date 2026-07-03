const express = require('express');
const router = express.Router();
const SubscriptionController = require('../controllers/SubscriptionController');

router.get('/', SubscriptionController.getAllSubscriptions);
router.get('/active', SubscriptionController.getActiveSubscriptions);
router.post('/', SubscriptionController.createSubscription);
router.put('/:subscriptionId/renew', SubscriptionController.renewSubscription);

module.exports = router;