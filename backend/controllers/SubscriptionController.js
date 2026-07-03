const Subscription = require('../models/Subscription');
const Member = require('../models/Member');

class SubscriptionController {
  async getAllSubscriptions(req, res) {
    try {
      const subscriptions = await Subscription.findAll({
        include: [{ model: Member, attributes: ['fullName', 'email'] }]
      });
      res.json(subscriptions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createSubscription(req, res) {
    try {
      const subscription = await Subscription.create(req.body);
      res.status(201).json(subscription);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getActiveSubscriptions(req, res) {
    try {
      const subscriptions = await Subscription.findAll({
        where: { status: 'active' }
      });
      res.json(subscriptions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async renewSubscription(req, res) {
    try {
      const { subscriptionId } = req.params;
      const { durationMonths, price } = req.body;
      
      const subscription = await Subscription.findByPk(subscriptionId);
      if (!subscription) return res.status(404).json({ error: 'Subscription not found' });

      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + durationMonths);

      await subscription.update({
        endDate,
        durationMonths,
        price,
        status: 'active',
        paymentStatus: 'pending'
      });

      res.json(subscription);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new SubscriptionController();