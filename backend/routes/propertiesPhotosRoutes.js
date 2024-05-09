const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const sql = "SELECT * FROM propertiesphotos";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

router.get('/:propertyId', (req, res) => {
    const propertyId = req.params.propertyId;
    const sql = "SELECT * FROM propertiesphotos WHERE property_id = ?";
    db.query(sql, [propertyId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

router.post('/', (req, res) => {
    const { property_id, photo_url } = req.body;
    const sql = `
        INSERT INTO propertiesphotos (property_id, photo_url)
        VALUES (?, ?)
    `;
    const values = [property_id, photo_url];
    
    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.status(201).json({ photo_id: result.insertId, message: 'Property photo created successfully!' });
    });
});

// Delete a property photo by photoId
router.delete('/:photoId', (req, res) => {
    const photoId = req.params.photoId;
    const sql = "DELETE FROM propertiesphotos WHERE photo_id = ?";
    
    db.query(sql, [photoId], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Property photo not found!' });
        return res.json({ message: 'Property photo deleted successfully!' });
    });
});

module.exports = router;