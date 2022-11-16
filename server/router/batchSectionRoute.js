const express = require("express");
const { getBatch, createBatch } = require("../controllers/batchSection");
const router = express.Router();

router.get('/batch',getBatch);
router.post('/batch',createBatch);

module.exports = router;