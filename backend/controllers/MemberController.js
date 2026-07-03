const Member = require('../models/Member');

class MemberController {
  async getAllMembers(req, res) {
    try {
      const members = await Member.findAll();
      res.json(members);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getMemberById(req, res) {
    try {
      const member = await Member.findByPk(req.params.id);
      if (!member) return res.status(404).json({ error: 'Member not found' });
      res.json(member);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createMember(req, res) {
    try {
      const member = await Member.create(req.body);
      res.status(201).json(member);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateMember(req, res) {
    try {
      const member = await Member.findByPk(req.params.id);
      if (!member) return res.status(404).json({ error: 'Member not found' });
      await member.update(req.body);
      res.json(member);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteMember(req, res) {
    try {
      const member = await Member.findByPk(req.params.id);
      if (!member) return res.status(404).json({ error: 'Member not found' });
      await member.destroy();
      res.json({ message: 'Member deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new MemberController();