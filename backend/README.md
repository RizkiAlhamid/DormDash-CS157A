# DormDash's Backend Setup Guide

1. Make sure you finished seting up the database, [HERE](../database/README.md)
2. Run ```npm install```
3. Start your mySQL server
4. In this directory ```/backend```, add an ```.env``` file
5. Add this data inside the ```.env``` file: 
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD="Root user's password (password when you intalled MySQL)"
DB_DATABASE=myDB
```
6. Run ``` npm start ``` to get your backend running