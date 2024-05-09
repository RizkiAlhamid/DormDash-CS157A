# DormDash Backend Documentation

## Endpoints
- ### [Users](#users-1)
- ### [Properties](#properties-1)
- ### [Properties Photos](#properties-photos-1)
- ### [Favorites](#favorites-1)
- ### [Bookings](#bookings-1)
- ### [Reviews](#reviews-1)

## Users
- **Retrieve All Users**
  - Method: `GET`
  - URL: `/users`
  - Description: Returns a list of all users.

- **Create a New User**
  - Method: `POST`
  - URL: `/users`
  - Description: Creates a new user.
  - Request Body:
    ```json
    {
      "email": "newuser@example.com",
      "password": "password123",
      "firstName": "New",
      "lastName": "User",
      "phoneNumber": "1234567890"
    }
    ```

- **Retrieve User by ID**
  - Method: `GET`
  - URL: `/users/{user_id}`
  - Description: Retrieves a user by user ID.

- **Update User**
  - Method: `PUT`
  - URL: `/users/{user_id}`
  - Description: Updates an existing user by user ID.
  - Request Body:
    ```json
    {
      "firstName": "Updated",
      "lastName": "User"
    }
    ```

- **Delete User**
  - Method: `DELETE`
  - URL: `/users/{user_id}`
  - Description: Deletes a user by user ID.

## Properties
- **Retrieve All Properties**
  - Method: `GET`
  - URL: `/properties`
  - Description: Returns a list of all properties.

- **Retrieve Property by ID**
  - Method: `GET`
  - URL: `/properties/{property_id}`
  - Description: Retrieves a property by property ID.

- **Search Properties Around School**
  - Method: `GET`
  - URL: `/properties/search`
  - Description: Retrieves properties located near a specified school within a given availability date range.
  - Parameters:
    - `school` (required): Name of the school to search near.
    - `start_date` (required): Start date for property availability (YYYY-MM-DD format).
    - `end_date` (required): End date for property availability (YYYY-MM-DD format).
  - Example usage:
    - ```bash 
      GET /properties/search?school=San%20Jose%20State%20University&start_date=2024-06-01&end_date=2024-08-31
      ```
    - `school`: "San Jose State University"
    - `start_date`: "2024-06-01"
    -  `end_date`: "2024-08-31"


## Properties Photos

## Favorites

## Bookings

## Reviews