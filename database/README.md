# DormDash's Database Setup Guide

1. Install MySQL if you have not
2. Run your MySQL server
3. In this directory ```database```, run the following scripts to create a new database, create tables and populate the tables:
```bash
mysql -u root -p < createDb.sql
mysql -u root -p myDB < populateDb.sql
```
4. Enter your password, and your database should be ready
5. To drop your database, use:
```bash
mysql -u root -p myDB < dropDB.sql
```
