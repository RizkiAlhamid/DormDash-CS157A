INSERT INTO Users (email, password, first_name, last_name, phone_number, registration_date)
VALUES
    ('john@example.com', 'password123', 'John', 'Doe', '123456789', '2023-01-15'),
    ('jane@example.com', 'pass456', 'Jane', 'Smith', '987654321', '2023-02-20'),
    ('alice@example.com', 'hello789', 'Alice', 'Johnson', '555555555', '2023-03-10');

INSERT INTO Property (owner_id, title, description, property_type, street, apartment_unit, city, state, zipcode, country, latitude, longitude, price_per_night, amenities, availability_start_date, availability_end_date)
VALUES
    (1, 'Cozy Cabin Retreat', 'A beautiful cabin in the woods', 'Cabin', '123 Forest Lane', NULL, 'Anytown', 'State A', '12345', 'USA', 40.7128, -74.0060, 100.00, 'Fireplace, Kitchenette', '2023-04-01', '2023-06-30'),
    (2, 'Beachfront Villa', 'Luxurious villa by the beach', 'Villa', '456 Seaside Avenue', NULL, 'Beach City', 'State B', '54321', 'USA', 34.0522, -118.2437, 250.00, 'Private pool, Ocean view', '2023-05-15', '2023-08-31'),
    (3, 'City Apartment', 'Modern apartment in the heart of the city', 'Apartment', '789 Downtown Street', 'Apt 10', 'Metroville', 'State C', '67890', 'USA', 41.8781, -87.6298, 150.00, 'WiFi, Gym access', '2023-04-20', '2023-07-15');

INSERT INTO PropertyPhotos (property_id, photo_url)
VALUES
    (1, 'https://example.com/cabin1.jpg'),
    (1, 'https://example.com/cabin2.jpg'),
    (2, 'https://example.com/villa1.jpg'),
    (2, 'https://example.com/villa2.jpg'),
    (3, 'https://example.com/apartment1.jpg');

INSERT INTO Favorites (user_id, property_id, date_saved)
VALUES
    (1, 1, '2023-05-01'),
    (1, 2, '2023-05-05'),
    (2, 3, '2023-06-10'),
    (3, 1, '2023-06-15');

INSERT INTO Bookings (user_id, property_id, start_date, end_date, num_guests, total_price, booking_date, status)
VALUES
    (1, 1, '2023-05-20', '2023-05-25', 2, 500.00, '2023-04-25', 'Confirmed'),
    (2, 2, '2023-06-25', '2023-07-02', 4, 1750.00, '2023-05-10', 'Pending'),
    (3, 3, '2023-07-01', '2023-07-10', 1, 150.00, '2023-06-01', 'Confirmed');

INSERT INTO Reviews (user_id, property_id, rating, review_text, review_date)
VALUES
    (1, 1, 4, 'Great experience in the cabin!', '2023-05-30'),
    (2, 2, 5, 'Beautiful villa with stunning views', '2023-07-05'),
    (3, 3, 3, 'Nice apartment but noisy street', '2023-07-15');
