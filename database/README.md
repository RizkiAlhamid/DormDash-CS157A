# DormDash's Database Setup Guide

1. Install MySQL if you have not
2. Run your MySQL server
3. In this directory ```database```, run the following scripts to create a new DB, table and insert initial data:
```bash
mysql -u root -p < schema.sql
mysql -u root -p myDB < data.sql
```
4. Enter your password