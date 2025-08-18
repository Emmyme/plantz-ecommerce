

DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS subscriber;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS category;

CREATE TABLE product (
    p_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar,
    image varchar,
    price INTEGER,
    category_id INTEGER,
    FOREIGN KEY(category_id) REFERENCES category(c_id)
);

CREATE TABLE subscriber (
    s_id INTEGER PRIMARY KEY AUTOINCREMENT,
    email varchar
);

CREATE TABLE orders (
    o_id INTEGER PRIMARY KEY AUTOINCREMENT,
    amount INTEGER,
    order_date DEFAULT(CURRENT_DATE)
);

CREATE TABLE category (
   c_id INTEGER PRIMARY KEY,
   name varchar
);

INSERT INTO category (name) VALUES
('Outdoor'),
('Indoor');

INSERT INTO product (name, image, price, category_id) VALUES
('Alocasia', 'alocasia.png', 149, 2),
('Alpinia', 'alpinia.png', 199, 2),
('Basil', 'basil.png', 99, 1),
('Begonia', 'begonia.png', 149, 2),
('Birds nest', 'birdsnest.png', 99, 2),
('Cactus', 'cactus.png', 49, 2),
('Cactus', 'cactus2.png', 99, 2),
('Calla lily', 'callalily.png', 249, 2),
('Calluna', 'calluna.png', 299, 1),
('Crocus', 'crocus.png', 149, 1),
('Fiddle-leaf fig', 'fiddle-leaf-fig.png', 399, 2),
('Hyacinth', 'hyacinth.png', 129, 1),
('Impatiens', 'impatiens.png', 199, 1),
('Kalanchoe', 'kalanchoe.png', 99, 2),
('Lace Flower', 'laceflower.png', 149, 1),
('Monstera', 'monstera.png', 249, 2),
('Orchid', 'orchid.png', 249, 2),
('Peace lily', 'peacelily.png', 299, 2),
('Peperomia', 'peperomia.png', 149, 2),
('Petunia', 'petunia.png', 249, 1),
('Primrose', 'primrose.png', 129, 1),
('Rose', 'rose.png', 149, 1),
('Saintpaulia', 'saintpaulia.png', 199, 2),
('Tulip', 'tulip.png', 99, 1),
('Weeping fig', 'weepingfig.png', 599, 2);