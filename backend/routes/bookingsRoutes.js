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
router.post('/', (req, res) => {
    const { user_id, property_id, start_date, end_date, num_guests, total_price, booking_date, status } = req.body;
    const sql = `
        INSERT INTO Bookings (user_id, property_id, start_date, end_date, num_guests, total_price, booking_date, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [user_id, property_id, start_date, end_date, num_guests, total_price, booking_date, status];
    
    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.status(201).json({ booking_id: result.insertId, message: 'Booking created successfully!' });
    });
});

// Delete a booking by bookingId
router.delete('/:bookingId', (req, res) => {
    const bookingId = req.params.bookingId;
    const sql = "DELETE FROM Bookings WHERE booking_id = ?";
    
    db.query(sql, [bookingId], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Booking not found!' });
        return res.json({ message: 'Booking deleted successfully!' });
    });
});

module.exports = router;