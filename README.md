# workout-app
Making a workout app based on a program so I can workout easily

## Set up
### Set up the database

- In a terminal:

    ```
    psql -d postgres
    ```
- Then create a new database called workout:
    ```
    CREATE DATABASE workout
    ```
- Use ```create.sql``` to create needed tables:
    ```
    \i create.sql
    ```
