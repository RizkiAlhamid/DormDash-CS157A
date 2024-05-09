const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    const sql = "SELECT * FROM properties";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

// Endpoint for searching properties by school, start_date, and end_date
router.get('/search', (req, res) => {
    const { school, start_date, end_date } = req.query;
    console.log('Received search request:', { school, start_date, end_date });
    // Query to find the school's latitude and longitude
    const schoolQuery = `
        SELECT latitude, longitude 
        FROM Schools 
        WHERE name = ?;
    `;

    db.query(schoolQuery, [school], (err, schoolLocation) => {
        if (err) {
            console.error('Error searching properties:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (schoolLocation.length === 0) {
            return res.status(404).json({ message: 'School not found' });
        }
        const { latitude, longitude } = schoolLocation[0];

        // Query to search for properties near the school within availability dates
        const propertyQuery = `
            SELECT *, 
            (3959 * acos(cos(radians(?)) * cos(radians(latitude)) * cos(radians(longitude) - radians(?)) + sin(radians(?)) * sin(radians(latitude)))) AS distance_in_miles
            FROM Properties
            WHERE availability_start_date <= ? AND availability_end_date >= ?
            HAVING distance_in_miles <= 10;  -- Set the distance limit in miles
        `;

        db.query(propertyQuery, [latitude, longitude, latitude, start_date, end_date], (err, properties) => {
            if (err) {
                console.error('Error executing property query:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            // Log the properties returned by the query for debugging
            //console.log('Properties within distance:', properties);

            // Return the properties as JSON response
            res.json(properties);
        });
    });
});

router.get('/:propertyId', (req, res) => {
    const propertyId = req.params.propertyId;
    const sql = "SELECT * FROM properties WHERE property_id = ?";
    db.query(sql, [propertyId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

module.exports = router;
