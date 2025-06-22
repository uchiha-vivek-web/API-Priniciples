const express = require('express');
const router = express.Router();
const users = require('../data/users.json');

// GET /api/v1/users/:id
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  console.log(user)
  if (!user) {
    console.log(`[WARN] User with id=${req.params.id} not found`);
    return res.status(404).json({ error: 'User not found' });
  }
  console.log(`[INFO] Fetched user with id=${req.params.id}`);
  res.json(user);
});

module.exports = router;
