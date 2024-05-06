const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const sql = "SELECT * FROM reviews";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

router.get('/:reviewId', (req, res) => {
    const reviewId = req.params.reviewId;
    const sql = "SELECT * FROM reviews WHERE review_id = ?";
    db.query(sql, [reviewId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

module.exports = router;