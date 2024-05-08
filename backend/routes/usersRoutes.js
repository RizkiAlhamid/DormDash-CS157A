const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

router.get('/:userId', (req, res) => {
    const userId = req.params.userId;
    const sql = "SELECT * FROM users WHERE user_id = ?";
    db.query(sql, [userId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

router.post('/', (req, res) => {
    // Extract data from request body
    const { email, password, firstName, lastName, phoneNumber } = req.body;

    // Validate incoming data

    const registration_date = new Date()
    //  Construct SQL INSERT query
    const sql = "INSERT INTO users (email, password, first_name, last_name, phone_number, registration_date) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [email, password, firstName, lastName, phoneNumber, registration_date];

    // Execute the query to insert new user
    db.query(sql, values, (err, result) => {
        if(err) {
            console.error("Error inserting new user: ", err);
            return res.status(500).json({ error: "Failed to create new user "});
        }
        console.log("New user created successfully");
        return res.status(201).json({ message: "New user created successfully", userId: result.insertId })
    })
})

router.delete('/:userId', (req, res) => {
    const userId = req.params.userId;
    const sql = "DELETE FROM users WHERE user_id = ?";
    
    db.query(sql, [userId], (err, result) => {
        if (err) {
            console.error("Error deleting user: ", err);
            return res.status(500).json({ error: "Failed to delete user" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log("User deleted successfully");
        return res.json({ message: "User deleted successfully" });
    });
});
module.exports = router;
