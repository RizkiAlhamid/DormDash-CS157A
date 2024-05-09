INSERT INTO Users (email, password, first_name, last_name, phone_number, registration_date)
VALUES
    ('john@example.com', 'password123', 'John', 'Doe', '123456789', '2023-01-15'),
    ('jane@example.com', 'pass456', 'Jane', 'Smith', '987654321', '2023-02-20'),
    ('alice@example.com', 'hello789', 'Alice', 'Johnson', '555555555', '2023-03-10');

INSERT INTO Properties (owner_id, title, description, property_type, street, apartment_unit, city, state, zipcode, country, latitude, longitude, price_per_night, amenities, availability_start_date, availability_end_date)
VALUES
    (1, 'Cozy Student Studio Near Campus', 'Perfect studio for students near the university', 'Apartment', '123 Student Ave', 'Unit 101', 'San Jose', 'CA', '95112', 'USA', 37.3372, -121.8847, 80.00, 'Furnished, WiFi, Study area', '2024-02-01', '2024-08-31'),
    (1, 'Shared Apartment with Roommates', 'Shared apartment ideal for student living', 'Apartment', '456 College St', 'Unit 202', 'San Jose', 'CA', '95125', 'USA', 37.3065, -121.8838, 60.00, 'Roommates, Common areas, Laundry facilities', '2024-03-01', '2024-09-30'),
    (1, 'Student House with Study Rooms', 'Spacious house with dedicated study rooms', 'House', '789 Campus Blvd', '', 'San Jose', 'CA', '95117', 'USA', 37.3124, -121.9845, 120.00, 'Study rooms, Outdoor space, Parking', '2024-02-15', '2024-12-15'),
    (1, 'Dorm-Style Living Near University', 'Dormitory-style accommodation close to campus', 'Apartment', '555 Student Way', 'Unit 301', 'San Jose', 'CA', '95134', 'USA', 37.4185, -121.9283, 50.00, 'Shared rooms, Communal kitchen, On-site activities', '2024-05-20', '2025-09-15'),
    (1, 'Cozy Student Apartment Complex', 'Student-friendly apartment complex with amenities', 'Apartment', '777 Learning St', 'Unit 10A', 'San Jose', 'CA', '95126', 'USA', 37.3078, -121.8956, 70.00, 'Fitness center, Study lounges, On-site management', '2024-02-10', '2024-09-10'),
    (1, 'Affordable Student Housing Option', 'Budget-friendly housing option for students', 'Apartment', '999 Scholar Ave', 'Unit 102', 'San Jose', 'CA', '95129', 'USA', 37.3169, -122.0321, 55.00, 'Affordable rates, Shared spaces, Close to amenities', '2024-04-25', '2024-09-25'),
    (1, 'Student Townhouse Community', 'Townhouse community designed for student living', 'Townhouse', '123 Study Circle', 'Unit B', 'San Jose', 'CA', '95113', 'USA', 37.3365, -121.8875, 90.00, 'Private rooms, Communal areas, Close to downtown', '2024-06-10', '2025-09-30'),
    (1, 'Modern Student Condo with Pool', 'Contemporary condo with pool and student-friendly features', 'Condo', '456 Academic Blvd', 'Unit 501', 'San Jose', 'CA', '95138', 'USA', 37.2348, -121.8197, 85.00, 'Swimming pool, Study spaces, Close to transportation', '2024-04-01', '2024-09-15'),
    (1, 'Student-Focused Housing Complex', 'Specialized housing complex catering to student needs', 'Apartment', '789 Study Lane', 'Unit C3', 'San Jose', 'CA', '95135', 'USA', 37.2335, -121.7572, 75.00, 'Flexible leases, Student events, Pet-friendly', '2024-01-15', '2024-08-31'),
    (1, 'Co-Living Space for Students', 'Collaborative living space designed for student community', 'Apartment', '555 Campus Drive', 'Unit 204', 'San Jose', 'CA', '95148', 'USA', 37.3381, -121.8167, 65.00, 'Co-living concept, Shared resources, Study pods', '2024-07-05', '2024-09-05');

INSERT INTO PropertiesPhotos (property_id, photo_url)
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

INSERT INTO Schools (school_id, name, street, apartment_unit, city, state, zipcode, country, latitude, longitude) 
VALUES
    (1, 'Stanford University', '450 Serra Mall', NULL, 'Stanford', 'CA', '94305', 'USA', 37.4275, -122.1697),
    (2, 'University of California, Berkeley', '110 Sproul Hall', NULL, 'Berkeley', 'CA', '94720', 'USA', 37.8719, -122.2585),
    (3, 'San Francisco State University', '1600 Holloway Ave', NULL, 'San Francisco', 'CA', '94132', 'USA', 37.7219, -122.4782),
    (4, 'University of San Francisco', '2130 Fulton St', NULL, 'San Francisco', 'CA', '94117', 'USA', 37.7766, -122.4505),
    (5, 'California State University, East Bay', '25800 Carlos Bee Blvd', NULL, 'Hayward', 'CA', '94542', 'USA', 37.6552, -122.0565),
    (6, 'San Jose State University', '1 Washington Sq', NULL, 'San Jose', 'CA', '95192', 'USA', 37.3352, -121.8811),
    (7, 'Santa Clara University', '500 El Camino Real', NULL, 'Santa Clara', 'CA', '95053', 'USA', 37.3496, -121.9390),
    (8, 'Sonoma State University', '1801 East Cotati Ave', NULL, 'Rohnert Park', 'CA', '94928', 'USA', 38.3399, -122.6731),
    (9, 'California College of the Arts', '5212 Broadway', NULL, 'Oakland', 'CA', '94618', 'USA', 37.8349, -122.2518),
    (10, 'Academy of Art University', '79 New Montgomery St', NULL, 'San Francisco', 'CA', '94105', 'USA', 37.7875, -122.4004),
    (11, 'Golden Gate University', '536 Mission St', NULL, 'San Francisco', 'CA', '94105', 'USA', 37.7894, -122.3989),
    (12, 'Dominican University of California', '50 Acacia Ave', NULL, 'San Rafael', 'CA', '94901', 'USA', 37.9756, -122.5309),
    (13, 'Holy Names University', '3500 Mountain Blvd', NULL, 'Oakland', 'CA', '94619', 'USA', 37.8038, -122.1893),
    (14, 'Menlo College', '1000 El Camino Real', NULL, 'Atherton', 'CA', '94027', 'USA', 37.4536, -122.1817),
    (15, 'Pacific Union College', '1 Angwin Ave', NULL, 'Angwin', 'CA', '94508', 'USA', 38.5773, -122.4499);



