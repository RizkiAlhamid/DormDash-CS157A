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
router.post('/', (req, res) => {
    const { user_id, property_id, date_saved } = req.body;
    const sql = `
        INSERT INTO Favorites (user_id, property_id, date_saved)
        VALUES (?, ?, ?)
    `;
    const values = [user_id, property_id, date_saved];
    
    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.status(201).json({ favorite_id: result.insertId, message: 'Favorite created successfully!' });
    });
});

// Delete a favorite by favoriteId
router.delete('/:favoriteId', (req, res) => {
    const favoriteId = req.params.favoriteId;
    const sql = "DELETE FROM Favorites WHERE favorite_id = ?";
    
    db.query(sql, [favoriteId], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Favorite not found!' });
        return res.json({ message: 'Favorite deleted successfully!' });
    });
});

module.exports = router;