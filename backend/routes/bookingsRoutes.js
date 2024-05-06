const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const sql = "SELECT * FROM bookings";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

router.get('/:bookingId', (req, res) => {
    const bookingId = req.params.bookingId;
    const sql = "SELECT * FROM bookings WHERE booking_id = ?";
    db.query(sql, [bookingId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

module.exports = router;