-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2023 at 11:30 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cervelax`
--

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `comentario` text NOT NULL,
  `infoUsuario_id` int(10) UNSIGNED NOT NULL,
  `infoProducto_id` int(10) UNSIGNED NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id`, `comentario`, `infoUsuario_id`, `infoProducto_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Excelente, nada más que pedir, un suspiro al alma', 2, 1, '2023-06-09 17:26:58', '2023-06-09 17:26:58', NULL),
(2, 'Cerveza dorada y demasiado refrescante. 10 puntos', 4, 2, '2023-06-09 17:26:58', '2023-06-09 17:26:58', NULL),
(3, 'No soy fan de las cervezas pero la verdad la dulzura de esta maravilla me asombra', 1, 3, '2023-06-09 17:26:58', '2023-06-09 17:26:58', NULL),
(4, 'Increible, me dejo sin palabras', 3, 4, '2023-06-09 17:26:58', '2023-06-09 17:26:58', NULL),
(5, 'hola', 6, 16, '2023-06-12 12:56:34', '2023-06-12 12:56:34', NULL),
(6, 'holaaa divino', 6, 4, '2023-06-12 13:00:54', '2023-06-12 13:00:54', NULL),
(7, 'ameeeee', 6, 1, '2023-06-16 14:54:15', '2023-06-16 14:54:15', NULL),
(8, 'buenisima', 20, 23, '2023-06-16 21:10:05', '2023-06-16 21:10:05', NULL),
(9, 'me encanto!', 6, 23, '2023-06-16 21:10:27', '2023-06-16 21:10:27', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `infoproductos`
--

CREATE TABLE `infoproductos` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombreProducto` varchar(250) NOT NULL,
  `imagen` varchar(250) NOT NULL,
  `descripcionProducto` text NOT NULL,
  `infoUsuario_id` int(10) UNSIGNED NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `infoproductos`
--

INSERT INTO `infoproductos` (`id`, `nombreProducto`, `imagen`, `descripcionProducto`, `infoUsuario_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Playa Grande', '/images/products/playa.png', 'Un estilo propio a base de trigo con un poco de avena, cáscara de naranja, coriandro y jengibre que la hacen más cítrica, compleja y refrescante.', 1, '2023-06-09 17:26:58', '2023-06-09 17:26:58', NULL),
(2, 'Kölsch', '/images/products/kolsch.png', 'cervaza dorada y refrescante', 2, '2023-06-09 17:26:58', '2023-06-09 17:26:58', NULL),
(3, 'Scotch', '/images/products/scotch.png', 'Rubí intenso. Seis grados de alcohol. Dulce y maltosa.', 3, '2023-06-09 17:26:58', '2023-06-09 17:26:58', NULL),
(4, 'Porter', '/images/products/porter.png', 'Maltas oscuras. Sabor y aroma penetrante y nocturno. Chocolate, azúcar negro y café.', 4, '2023-06-09 17:26:58', '2023-06-09 17:26:58', NULL),
(5, 'Cuatro tres', '/images/products/cuatro.png', ' Una cerveza cobriza intensa en maltas, con carácter sedoso y la dosis de lúpulo justa para redondear su personalidad.', 5, '2023-06-09 17:26:58', '2023-06-09 17:26:58', NULL),
(6, 'Monasterio', '/images/products/monasterio.png', 'Sus 14 grados de alcohol se esconden detrás de un aroma frutado como a damasco, zapallos en almíbar y banana, que se complementan con el aporte de vainilla y madera de la barrica. Oscura pero sin carácter torrado ni tostado, es una bomba para añejar durante años.', 1, '2023-06-09 17:26:58', '2023-06-09 17:26:58', NULL),
(7, 'La centinela', '/images/products/centinela.png', 'carácter de vainilla, coco y dulce de leche, con 14 grados de alcohol. Alcohólica, dulce, frutada, compleja, exquisita.', 2, '2023-06-09 17:26:58', '2023-06-09 17:26:58', NULL),
(8, 'Catalina la grande', '/images/products/catalina.png', ' La original solución fue elaborar cervezas más alcohólicas y fuertes para que soportaran el viaje.', 3, '2023-06-09 17:26:58', '2023-06-09 17:26:58', NULL),
(9, 'Imperial stout', '/images/products/imperial.png', 'la Imperial Stout, negra y tostada, empapada de alcohol y pasas, amarga y ahumada, inglesa y de importación', 4, '2023-06-09 17:26:58', '2023-06-09 17:26:58', NULL),
(10, '20 años', '/images/products/an.png', 'Compleja, aromática y especiada por el uso de levaduras belgas, frutas y especias. Añejada durante meses, maduró, creció y mejoró sin perder la esencia.', 5, '2023-06-09 17:26:58', '2023-06-09 17:26:58', NULL),
(16, 'messi', '/images/products/hola', 'ffff', 6, '2023-06-12 12:56:23', '2023-06-12 12:56:23', NULL),
(23, 'Mistery', '/images/products/an.png', 'La cerveza mistery es unica en su especialidad. Mechada en el límite entre Bélgica y Alemania, donde obtiene su sabor único y dulzón. ', 20, '2023-06-16 20:55:28', '2023-06-16 20:55:28', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `infousuarios`
--

CREATE TABLE `infousuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(250) NOT NULL,
  `user` varchar(250) NOT NULL,
  `contrasenia` varchar(250) NOT NULL,
  `fotoPerfil` varchar(250) NOT NULL,
  `numDocumento` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `infousuarios`
--

INSERT INTO `infousuarios` (`id`, `email`, `user`, `contrasenia`, `fotoPerfil`, `numDocumento`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'martinasteward@gmail.com', 'marti12345', '1234', '/images/users/stewart.jpg', 12345678, '2023-06-09 17:26:57', '2023-06-09 17:26:57', NULL),
(2, 'julietapogg@gmail.com', 'juli12345', '1234', '/images/users/stewart.jpg', 12345678, '2023-06-09 17:26:57', '2023-06-09 17:26:57', NULL),
(3, 'holder@gmail.com', 'holder12345', '1234', '/images/users/stewart.jpg', 12345678, '2023-06-09 17:26:57', '2023-06-09 17:26:57', NULL),
(4, 'messi@gmail.com', 'messi12345', '1234', '/images/users/stewart.jpg', 12345678, '2023-06-09 17:26:57', '2023-06-09 17:26:57', NULL),
(5, 'solperez@gmail.com', 'sol12345', '1234', '/images/users/stewart.jpg', 12345678, '2023-06-09 17:26:57', '2023-06-09 17:26:57', NULL),
(6, 'ssofialopez.30@gmail.com', 'soso', '$2a$10$193axPgpG1Yu3t1pbtKszeHIG2OEcl0y3CyLSOb8IwPlu1LujK5Sm', '/images/users/https://www.google.com/url?sa=i&url=https%3A%2F%2Fdisney.fandom.com%2Fes%2Fwiki%2FOlaf&psig=AOvVaw0cuODSl0jSLZzI1dX3TLxu&ust=1686832665505000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOC_98Hjwv8CFQAAAAAdAAAAABAD', 333333333, '2023-06-09 17:31:50', '2023-06-14 12:39:31', NULL),
(9, 'sol@gmail.com', 'solciperez', '$2a$10$3cYp2yBzdXI3WyPqEVc8Q.yw/zJNl85z.vnmPoSP26PDGl8Rq8cmq', '/images/users/857722DA-AA8E-4A45-A2D3-9C3A7D9EA859.JPG', 22222222, '2023-06-09 22:43:00', '2023-06-09 22:43:00', NULL),
(11, 'santi@gmail.com', 'santi', '$2a$10$J3m0pD4Mj033OfhuZc/AQemxRsBJ6NTP7Cx4hnW/iSXSGvIerFrkK', '/images/users/hola', 45563123, '2023-06-16 02:28:56', '2023-06-16 02:28:56', NULL),
(12, 'nose@gmail.com', 'nose', '$2a$10$EjIbJ/QV8qT9Ibbr4Uy1fukO5DhK8g6g0z/0DMvMq3Ff2VrzDnmLu', '/images/users/hola', 2222222, '2023-06-16 15:31:52', '2023-06-16 15:31:52', NULL),
(13, 'probando@gmail.com', 'prueba', '$2a$10$1NgbwSEj4SYwgBThc3Sjd./hoViZonP1aw2NygHsT/hf1kiO3sb8K', '/images/users/hola', 12345678, '2023-06-16 15:53:00', '2023-06-16 15:53:00', NULL),
(15, 'jaja@gmail.com', 'jaja', '$2a$10$q2.EPBxJ/iqhD25TVCjQn.ZvJ4cs/TKpMVM6a.9eWJu74tGM3b4oK', '/images/users/de', 1112332, '2023-06-16 15:58:17', '2023-06-16 15:58:17', NULL),
(16, 'hola@gmail.com', 'hooii', '$2a$10$FeOk0FE64hplyE7idRJn.OHp9KlivzNDR3piOfY4nHyVvvA4vP0Ae', '/images/users/fvv', 2224444, '2023-06-16 15:59:50', '2023-06-16 15:59:50', NULL),
(20, 'prueba@gmail.com', 'probando123', '$2a$10$k2C1PV8BGUY1uZfLjxzNG.ZAA71E26Qz44FfJecjD7Iyv9acaNbA2', '/images/users/dd', 22222222, '2023-06-16 19:14:39', '2023-06-16 19:14:39', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `infoUsuario_id` (`infoUsuario_id`),
  ADD KEY `infoProducto_id` (`infoProducto_id`);

--
-- Indexes for table `infoproductos`
--
ALTER TABLE `infoproductos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `infoUsuario_id` (`infoUsuario_id`);

--
-- Indexes for table `infousuarios`
--
ALTER TABLE `infousuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `user` (`user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `infoproductos`
--
ALTER TABLE `infoproductos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `infousuarios`
--
ALTER TABLE `infousuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`infoUsuario_id`) REFERENCES `infousuarios` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`infoProducto_id`) REFERENCES `infoproductos` (`id`);

--
-- Constraints for table `infoproductos`
--
ALTER TABLE `infoproductos`
  ADD CONSTRAINT `infoproductos_ibfk_1` FOREIGN KEY (`infoUsuario_id`) REFERENCES `infousuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
