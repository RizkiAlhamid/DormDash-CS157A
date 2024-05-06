const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const sql = "SELECT * FROM property";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

router.get('/:propertyId', (req, res) => {
    const propertyId = req.params.propertyId;
    const sql = "SELECT * FROM property WHERE property_id = ?";
    db.query(sql, [propertyId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

module.exports = router;
