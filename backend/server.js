const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/usersRoutes');
const propertiesRoutes = require('./routes/propertiesRoutes');
const propertiesPhotosRoutes = require('./routes/propertiesPhotosRoutes');
const favoritesRoutes = require('./routes/favoritesRoutes');
const bookingsRoutes = require('./routes/bookingsRoutes');
const reviewsRoutes = require('./routes/reviewsRoutes');

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
    return res.json('From backend side')
})

app.use('/users', usersRoutes);
app.use('/properties', propertiesRoutes);
app.use('/propertiesphotos', propertiesPhotosRoutes);
app.use('/favorites', favoritesRoutes);
app.use('/bookings', bookingsRoutes);
app.use('/reviews', reviewsRoutes);

app.listen(8081, () => {
    console.log('Back-end is running');
})