# DormDash Backend Documentation

## Endpoints
- ### [Users](#users-1)
- ### [Property](#property-1)
- ### [Property Photos](#property-photos-1)
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

## Property

## Property Photos

## Favorites

## Bookings

## Reviews