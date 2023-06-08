CREATE SCHEMA cervelax;
USE cervelax;

CREATE TABLE infoUsuarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user VARCHAR(250) UNIQUE NOT NULL,
email VARCHAR(250) UNIQUE NOT NULL,
contrasenia VARCHAR(250) NOT NULL,
fotoPerfil VARCHAR(250) NOT NULL,
fecha DATE NOT NULL,
numDocumento INT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);

CREATE TABLE infoProductos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombreProducto VARCHAR (250) NOT NULL,
imagen VARCHAR(250) NOT NULL,
fechaDeCarga DATE NOT NULL, 
descripcionProducto TEXT NOT NULL,
infoUsuario_id INT UNSIGNED NOT NULL,
FOREIGN KEY (infoUsuario_id) REFERENCES infoUsuarios(id),

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);

CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
cometario TEXT NOT NULL, 
infoUsuario_id INT UNSIGNED NOT NULL,
infoProducto_id INT UNSIGNED NOT NULL,
FOREIGN KEY (infoUsuario_id) REFERENCES infoUsuarios(id),
FOREIGN KEY (infoProducto_id) REFERENCES infoProductos(id),

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL
);
-- INSERT INTO  infoUsuarios(id, email, contrasenia, fotoPerfil, fecha, numDocumento)
-- VALUES (DEFAULT, 'martinasteward@gmail.com' , 'marti12345', '../images/steward.jpg', '2003-12-1', 234567765),
-- 	(DEFAULT, 'julietapogg@gmail.com' , 'juli12345', '../images/julietapoggio.jpg', '2001-11-6', 999362490),
--     (DEFAULT, 'holder@gmail.com' , 'holder12345', '../images/holder.jpg', '1999-03-17', 193762096),
--     (DEFAULT, 'messi@gmail.com' , 'messi12345', '../images/messi.jpg', '1984-09-12', 342907452),
--     (DEFAULT, 'solperez@gmail.com' , 'sol12345', '../images/solperez.jpg', '1994-11-30', 458213673);
    
-- INSERT INTO infoProductos(id, nombreProducto, descripcionProducto, imagen, fechaDeCarga, infoUsuario_id)
-- VALUES (DEFAULT, 'Playa Grande', 'Un estilo propio a base de trigo con un poco de avena, cáscara de naranja, coriandro y jengibre que la hacen más cítrica, compleja y refrescante.', '../images/products/playa.png','2022-11-21' ,1),
-- 	(DEFAULT, "Kölsch", 'cervaza dorada y refrescante','../images/products/kolsch.png','2022-10-1' ,2),
--     (DEFAULT, "Scotch", 'Rubí intenso. Seis grados de alcohol. Dulce y maltosa.', '../images/products/scotch.png','2022-1-20' ,3),
--     (DEFAULT, "Porter", "Maltas oscuras. Sabor y aroma penetrante y nocturno. Chocolate, azúcar negro y café.", '../images/products/porter.png','2022-5-17' ,4),
--     (DEFAULT, "Cuatro tres", ' Una cerveza cobriza intensa en maltas, con carácter sedoso y la dosis de lúpulo justa para redondear su personalidad.', '../images/products/cuatro.png','2022-11-21' ,5),
--     (DEFAULT, "Monasterio", 'Sus 14 grados de alcohol se esconden detrás de un aroma frutado como a damasco, zapallos en almíbar y banana, que se complementan con el aporte de vainilla y madera de la barrica. Oscura pero sin carácter torrado ni tostado, es una bomba para añejar durante años.', '../images/products/monasterio.png','2022-11-21' ,1),
--     (DEFAULT, "La centinela", 'carácter de vainilla, coco y dulce de leche, con 14 grados de alcohol. Alcohólica, dulce, frutada, compleja, exquisita.', '../images/products/centinela.png','2022-04-30' ,2),
--     (DEFAULT, "Catalina la grande", ' La original solución fue elaborar cervezas más alcohólicas y fuertes para que soportaran el viaje.', '../images/products/catalina.png','2022-07-21' ,3),
--     (DEFAULT, "Imperial stout", 'la Imperial Stout, negra y tostada, empapada de alcohol y pasas, amarga y ahumada, inglesa y de importación', '../images/products/imperial.png','2022-11-7' ,4),
--     (DEFAULT, "20 años", 'Compleja, aromática y especiada por el uso de levaduras belgas, frutas y especias. Añejada durante meses, maduró, creció y mejoró sin perder la esencia.', '../images/products/an.png','2022-04-1' ,5);
    
-- INSERT INTO comentarios(id, cometario, infoUsuario_id, infoProducto_id)
-- VALUES (DEFAULT, "Excelente, nada más que pedir, un suspiro al alma", 2, 1),
-- 	(DEFAULT, 'Cerveza dorada y demasiado refrescante. 10 puntos', 4, 2),
--     (DEFAULT, 'No soy fan de las cervezas pero la verdad la dulzura de esta maravilla me asombra', 1,3),
--     (DEFAULT, 'Increible, me dejo sin palabras', 3, 4);
