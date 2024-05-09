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

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/', (req, res) => {
    const { email, firstName, lastName, phoneNumber, password } = req.body;
    const checkEmailSql = "SELECT email FROM Users WHERE email = ?";
    db.query(checkEmailSql, [email], (err, results) => {
        if (err) {
            console.error("Error checking email: ", err);
            return res.status(500).json({ error: "Internal server error" });
        }

        if (results.length > 0) {
            return res.status(409).json({ error: "Email already in use" });
        } else {
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if (err) {
                    console.error("Error hashing password: ", err);
                    return res.status(500).json({ error: "Error hashing password" });
                }

                const sql = "INSERT INTO Users (email, password, first_name, last_name, phone_number, registration_date) VALUES (?, ?, ?, ?, ?, CURDATE())";
                db.query(sql, [email, hash, firstName, lastName, phoneNumber], (error, result) => {
                    if (error) {
                        console.error("Error inserting new user: ", error);
                        return res.status(500).json({ error: "Failed to create new user: " + error.sqlMessage });
                    }
                    res.status(201).json({ message: "New user created successfully", userId: result.insertId });
                });
            });
        }
    });
});


router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM Users WHERE email = ?";
    db.query(sql, [email], (err, results) => {
        if (err) {
            console.error("Error fetching user: ", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        if (results.length > 0) {
            const user = results[0];
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    console.error("Error comparing password: ", err);
                    return res.status(500).json({ error: "Internal server error" });
                }
                if (isMatch) {
                    console.log("Login successful");
                    res.json({ message: "Login successful!", userId: user.user_id });
                } else {
                    console.log("Invalid credentials");
                    res.status(401).json({ error: "Invalid credentials" });
                }
            });
        } else {
            console.log("User not found");
            res.status(404).json({ error: "User not found" });
        }
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
