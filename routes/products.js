const express = require('express');
const router = express.Router();
const products = require('../data/products.json');
const users = require('../data/users.json');

// GET /api/v1/products?page=1&limit=10&category=tech
router.get('/', (req, res) => {
  const { page = 1, limit = 10, category } = req.query;
  console.log(`[INFO] Products API called with page=${page}, limit=${limit}, category=${category}`);

  let filteredProducts = products;
  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category === category);
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + parseInt(limit);
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const crossReferenced = paginatedProducts.map(product => ({
    ...product,
    user: users.find(u => u.id === product.userId)
  }));

  res.json({
    page: parseInt(page),
    total: filteredProducts.length,
    data: crossReferenced
  });
});

module.exports = router;
