CREATE TYPE delivery_method AS ENUM ('Delivery', 'Carry-Out');
CREATE TYPE sauce_name as ENUM('garlic_dipping', 'ranch_dipping', 'marinara_dipping');

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS pizza (
    id SERIAL PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS condiments (
    id SERIAL PRIMARY KEY,
    sauce_name sauce_name,
    sauce_quantity INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    method delivery_method NOT NULL,
    food_time TIMESTAMP NOT NULL,
    store_number INTEGER NOT NULL,
    pizza_id INTEGER REFERENCES pizza(id),
    condiments_id INTEGER REFERENCES condiments(id)
);

