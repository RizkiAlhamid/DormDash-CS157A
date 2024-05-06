const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const sql = "SELECT * FROM favorites";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

router.get('/:favoriteId', (req, res) => {
    const favoriteId = req.params.favoriteId;
    const sql = "SELECT * FROM favorites WHERE favorite_id = ?";
    db.query(sql, [favoriteId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

module.exports = router;