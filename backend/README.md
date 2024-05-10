# DormDash's Backend Setup Guide

1. Make sure you finished seting up the database, [HERE](../database/README.md)
2. Run ```npm install``` to install missing dependencies
3. Make sure your SQL server is still running
4. In this directory ```/backend```, create an ```.env``` file
5. Add this data inside the ```.env``` file: 
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD="Root user's password (password when you intalled MySQL)"
DB_DATABASE=myDB
```
6. Run ``` npm start ``` to get your backend running