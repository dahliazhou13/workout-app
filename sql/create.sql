CREATE TABLE Exercise(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Workout(
    exercise SERIAL,
    rep INT,
    set INT,
    PRIMARY KEY(exercise, rep, set),
    FOREIGN KEY(exercise) REFERENCES Exercise(id)
);

CREATE TABLE Record(
    exercise SERIAL,
    rep INT,
    set INT,
    time TIMESTAMP,
    weight FLOAT,
    PRIMARY KEY(exercise, rep, set, time, weight),
    FOREIGN KEY(exercise, rep, set) REFERENCES Workout(exercise, rep, set)
);
