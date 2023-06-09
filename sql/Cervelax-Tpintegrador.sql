CREATE SCHEMA cervelax;

USE cervelax;

CREATE TABLE infoUsuarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(250) UNIQUE NOT NULL,
user VARCHAR(250) UNIQUE NOT NULL,
contrasenia VARCHAR(250) NOT NULL,
fotoPerfil VARCHAR(250) NOT NULL,
numDocumento INT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);

CREATE TABLE infoProductos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombreProducto VARCHAR (250) NOT NULL,
imagen VARCHAR(250) NOT NULL,
descripcionProducto TEXT NOT NULL,
infoUsuario_id INT UNSIGNED NOT NULL,
FOREIGN KEY (infoUsuario_id) REFERENCES infoUsuarios(id),

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
comentario TEXT NOT NULL, 
infoUsuario_id INT UNSIGNED NOT NULL,
infoProducto_id INT UNSIGNED NOT NULL,
FOREIGN KEY (infoUsuario_id) REFERENCES infoUsuarios(id),
FOREIGN KEY (infoProducto_id) REFERENCES infoProductos(id),

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);

INSERT INTO  infoUsuarios (email, user, contrasenia, fotoPerfil, numDocumento)
VALUES 
	('martinasteward@gmail.com', 'marti12345', '1234', '/images/users/stewart.jpg', 12345678),
	('julietapogg@gmail.com' , 'juli12345', '1234', '/images/users/stewart.jpg', 12345678),
	('holder@gmail.com' , 'holder12345', '1234', '/images/users/stewart.jpg', 12345678),
	('messi@gmail.com' , 'messi12345', '1234', '/images/users/stewart.jpg', 12345678),
	('solperez@gmail.com' , 'sol12345', '1234', '/images/users/stewart.jpg', 12345678);
    
INSERT INTO infoProductos (nombreProducto, descripcionProducto, imagen, infoUsuario_id)
VALUES 
	("Playa Grande", 'Un estilo propio a base de trigo con un poco de avena, cáscara de naranja, coriandro y jengibre que la hacen más cítrica, compleja y refrescante.', '/images/products/playa.png', 1),
	("Kölsch", 'cervaza dorada y refrescante','/images/products/kolsch.png', 2),
    ("Scotch", 'Rubí intenso. Seis grados de alcohol. Dulce y maltosa.', '/images/products/scotch.png', 3),
    ("Porter", "Maltas oscuras. Sabor y aroma penetrante y nocturno. Chocolate, azúcar negro y café.", '/images/products/porter.png', 4),
    ("Cuatro tres", ' Una cerveza cobriza intensa en maltas, con carácter sedoso y la dosis de lúpulo justa para redondear su personalidad.', '/images/products/cuatro.png', 5),
    ("Monasterio", 'Sus 14 grados de alcohol se esconden detrás de un aroma frutado como a damasco, zapallos en almíbar y banana, que se complementan con el aporte de vainilla y madera de la barrica. Oscura pero sin carácter torrado ni tostado, es una bomba para añejar durante años.', '/images/products/monasterio.png', 1),
    ("La centinela", 'carácter de vainilla, coco y dulce de leche, con 14 grados de alcohol. Alcohólica, dulce, frutada, compleja, exquisita.', '/images/products/centinela.png', 2),
    ("Catalina la grande", ' La original solución fue elaborar cervezas más alcohólicas y fuertes para que soportaran el viaje.', '/images/products/catalina.png', 3),
    ("Imperial stout", 'la Imperial Stout, negra y tostada, empapada de alcohol y pasas, amarga y ahumada, inglesa y de importación', '/images/products/imperial.png', 4),
    ("20 años", 'Compleja, aromática y especiada por el uso de levaduras belgas, frutas y especias. Añejada durante meses, maduró, creció y mejoró sin perder la esencia.', '/images/products/an.png', 5);
    
INSERT INTO comentarios(comentario, infoUsuario_id, infoProducto_id)
VALUES 
	("Excelente, nada más que pedir, un suspiro al alma", 2, 1),
	('Cerveza dorada y demasiado refrescante. 10 puntos', 4, 2),
    ('No soy fan de las cervezas pero la verdad la dulzura de esta maravilla me asombra', 1,3),
    ('Increible, me dejo sin palabras', 3, 4);
