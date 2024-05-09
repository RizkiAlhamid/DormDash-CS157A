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

router.post('/', (req, res) => {
    const { user_id, property_id, rating, review_text, review_date } = req.body;
    const sql = `
        INSERT INTO Reviews (user_id, property_id, rating, review_text, review_date)
        VALUES (?, ?, ?, ?, ?)
    `;
    const values = [user_id, property_id, rating, review_text, review_date];
    
    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.status(201).json({ review_id: result.insertId, message: 'Review created successfully!' });
    });
});

// Delete a review by reviewId
router.delete('/:reviewId', (req, res) => {
    const reviewId = req.params.reviewId;
    const sql = "DELETE FROM Reviews WHERE review_id = ?";
    
    db.query(sql, [reviewId], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Review not found!' });
        return res.json({ message: 'Review deleted successfully!' });
    });
});

module.exports = router;
