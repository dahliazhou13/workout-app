CREATE TABLE Exercise(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Workout(
    exercise SERIAL,
    rep INT,
    PRIMARY KEY(exercise, rep),
    FOREIGN KEY(exercise) REFERENCES Exercise(id)
);

CREATE TABLE Record(
    exercise SERIAL,
    rep INT,
    actual INT,
    time TIMESTAMP,
    weight FLOAT,
    PRIMARY KEY(exercise, rep, time, weight),
    FOREIGN KEY(exercise, rep) REFERENCES Workout(exercise, rep)
);
