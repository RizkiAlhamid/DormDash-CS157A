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
router.get('/user/:userId', (req, res) => {
    const userId = req.params.userId;
    console.log(`Fetching bookings for user: ${userId}`);  // Log the user ID received

    const sql = `
        SELECT b.*, p.title AS property_title
        FROM bookings b
        JOIN properties p ON b.property_id = p.property_id
        WHERE b.user_id = ?
    `;
    db.query(sql, [userId], (err, data) => {
        if (err) {
            console.error('Failed to fetch bookings for user:', err);
            return res.status(500).json(err);
        }
        console.log(`Bookings fetched: ${data.length}`);  // Log how many bookings were fetched
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
    db.query(sql, [user_id, property_id, start_date, end_date, num_guests, total_price, booking_date, status], (err, result) => {
        if (err) {
            console.error('Error executing booking:', err);
            return res.status(500).json({ error: err.message });
        }
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