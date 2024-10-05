-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-10-2024 a las 03:12:28
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gestionsubir`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `id_alumno` int(11) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `dni` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `curso_asignado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`id_alumno`, `apellido`, `nombre`, `dni`, `mail`, `telefono`, `curso_asignado`) VALUES
(18, 'Gayoso', 'Lucio', '19062999', 'gerson@gmail.com', '', '4 A'),
(21, 'Miranda', 'Vitalia', '93249966', '', '', '4 B'),
(22, 'Gomez', 'Andres', '22048546', '', '', '2 B'),
(23, 'Miranda', 'Santi', '56887385', '', '', '1 B'),
(24, 'Duran', 'Angel', '94658494', '', '', '2 B'),
(25, 'Ortis', 'Adriel', '25321789', '', '', '4 A'),
(26, 'Gomez', 'Vitalia', '19062999', '', '', '3 B'),
(27, 'Miranda', 'Vitalia', '93249966', '', '', '3 B'),
(28, 'Miranda', 'Brisa', '78124512', '', '', '2 B'),
(29, 'Roriguez', 'Yisiano', '12456123', '', '', '2 B'),
(30, 'Mamani', 'Daniel', '87456123', '', '', '1 B'),
(31, 'Molina', 'Dante', '12456987', '', '', '4 A'),
(32, 'Leyes', 'Jorge', '25369741', '', '', '2 A'),
(33, 'Fleitas', 'Omar', '98456147', '', '', '2 B'),
(34, 'Abreu', 'dani', '4343466436', '', '', '3 B'),
(35, 'Abreu', 'dani', '43434543', '', '', '3 B'),
(36, 'Mamani', 'Gerson', '43434543', 'gerson@gmail.com', '', '1 A'),
(37, 'Abreu', 'dani', '43434543', '', '', '4 B');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursa`
--

CREATE TABLE `cursa` (
  `id_cursa` int(11) NOT NULL,
  `id_alumno` int(11) NOT NULL,
  `id_materia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cursa`
--

INSERT INTO `cursa` (`id_cursa`, `id_alumno`, `id_materia`) VALUES
(8, 21, 6),
(9, 21, 8),
(10, 21, 10),
(11, 21, 12),
(12, 21, 14),
(13, 22, 3),
(14, 22, 5),
(15, 22, 7),
(16, 22, 9),
(17, 22, 11),
(18, 23, 1),
(19, 23, 3),
(20, 23, 6),
(21, 23, 8),
(22, 24, 3),
(23, 24, 9),
(24, 24, 13),
(25, 24, 21),
(26, 25, 2),
(27, 25, 3),
(28, 25, 8),
(29, 25, 10),
(30, 25, 12),
(31, 26, 5),
(32, 26, 7),
(33, 26, 9),
(34, 26, 13),
(35, 27, 5),
(36, 27, 7),
(37, 27, 9),
(38, 27, 11),
(39, 28, 8),
(40, 28, 9),
(41, 28, 19),
(42, 28, 22),
(43, 29, 3),
(44, 29, 6),
(45, 29, 9),
(46, 29, 16),
(47, 29, 22),
(48, 30, 3),
(49, 30, 10),
(50, 30, 17),
(51, 30, 20),
(52, 30, 21),
(53, 31, 2),
(54, 31, 3),
(55, 31, 10),
(56, 31, 14),
(57, 31, 17),
(58, 31, 21),
(59, 32, 1),
(60, 32, 3),
(61, 32, 8),
(62, 32, 11),
(63, 32, 18),
(64, 33, 2),
(65, 33, 3),
(66, 33, 8),
(67, 33, 11),
(68, 33, 16),
(69, 34, 6),
(70, 34, 10),
(71, 34, 13),
(72, 34, 15),
(73, 34, 21),
(74, 35, 5),
(75, 35, 9),
(76, 35, 11),
(77, 35, 13),
(78, 36, 1),
(79, 36, 10),
(80, 36, 13),
(81, 36, 14),
(87, 37, 65),
(88, 37, 68),
(89, 37, 72),
(97, 18, 2),
(98, 18, 41);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `id_materia` int(11) NOT NULL,
  `nombre_materia` varchar(50) NOT NULL,
  `curso` varchar(50) NOT NULL,
  `divicion` varchar(50) NOT NULL,
  `doble` bit(1) NOT NULL,
  `dia1` varchar(20) NOT NULL,
  `primerahora1` int(11) NOT NULL,
  `segundahora1` int(11) NOT NULL,
  `tercerahoa` int(11) NOT NULL,
  `dia2` varchar(20) NOT NULL,
  `primerahora2` int(11) NOT NULL,
  `seguandahora2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`id_materia`, `nombre_materia`, `curso`, `divicion`, `doble`, `dia1`, `primerahora1`, `segundahora1`, `tercerahoa`, `dia2`, `primerahora2`, `seguandahora2`) VALUES
(1, 'Lengua y Literatura', '1', 'A', b'1', 'Martes', 1, 2, 0, 'Miercoles', 5, 6),
(2, 'Lengua y Literatura', '1', 'B', b'1', 'Lunes', 1, 2, 0, 'Viernes', 1, 2),
(3, 'Lengua Adicional', '1', 'A', b'0', 'Viernes', 5, 6, 7, '', 0, 0),
(4, 'Lengua Adicional', '1', 'B', b'0', 'Martes', 1, 2, 3, '', 0, 0),
(5, 'Matemática', '1', 'A', b'1', 'Miercoles', 3, 4, 0, 'Jueves', 3, 4),
(6, 'Matemática', '1', 'B', b'1', 'Miercoles', 1, 2, 0, 'Jueves', 1, 2),
(7, 'Biología', '1', 'A', b'1', 'Jueves', 1, 2, 0, 'Viernes', 3, 4),
(8, 'Biología', '1', 'B', b'1', 'Lunes', 6, 7, 0, 'Jueves', 3, 4),
(9, 'Geografía', '1', 'A', b'0', 'Martes', 5, 6, 0, '', 0, 0),
(10, 'Geografía', '1', 'B', b'0', 'Lunes', 3, 4, 0, '', 0, 0),
(11, 'Historia', '1', 'A', b'1', 'Lunes', 5, 6, 0, 'Viernes', 1, 2),
(12, 'Historia', '1', 'B', b'1', 'Martes', 4, 5, 0, 'Viernes', 3, 4),
(13, 'FEC', '1', 'A', b'0', 'Miercoles', 1, 2, 0, '', 0, 0),
(14, 'FEC', '1', 'B', b'0', 'Miercoles', 3, 4, 0, '', 0, 0),
(15, 'Educ. Tecnológica', '1', 'A', b'0', 'Martes', 3, 4, 0, '', 0, 0),
(16, 'Educ. Tecnologica', '1', 'B', b'0', 'Miercoles', 5, 6, 0, '', 0, 0),
(17, 'Arte', '1', 'A', b'0', 'Lunes', 3, 4, 0, '', 0, 0),
(18, 'Arte', '1', 'B', b'0', 'Jueves', 5, 6, 0, '', 0, 0),
(19, 'Educ. Física', '1', 'A', b'0', 'Miercoles', -1, -2, 0, '', 0, 0),
(20, 'Educ. Física', '1', 'B', b'0', 'Martes', -1, -2, 0, '', 0, 0),
(21, 'Tutoría', '1', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(22, 'Tutoría', '1', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(23, 'EDI', '1', 'A', b'0', 'Lunes', 1, 2, 0, '', 0, 0),
(24, 'EDI', '1', 'B', b'0', 'Martes', 6, 7, 0, '', 0, 0),
(27, 'Lengua y Literatura', '2', 'A', b'1', 'Martes', 1, 2, 0, 'Miercoles', 5, 6),
(28, 'Lengua y Literatura', '2', 'B', b'1', 'Jueves', 1, 2, 0, 'Viernes', 3, 4),
(29, 'Lengua Adicional', '2', 'A', b'0', 'Viernes', 5, 6, 7, '', 0, 0),
(30, 'Lengua Adicional', '2', 'B', b'0', 'Miercoles', 5, 6, 7, '', 0, 0),
(31, 'Matemática', '2', 'A', b'1', 'Miercoles', 3, 4, 0, 'Jueves', 3, 4),
(32, 'Matemática', '2', 'B', b'1', 'Lunes', 1, 2, 0, 'Jueves', 5, 6),
(33, 'Biología', '2', 'A', b'1', 'Jueves', 1, 2, 0, 'Viernes', 3, 4),
(34, 'Biología', '2', 'B', b'1', 'Lunes', 5, 6, 0, 'Jueves', 3, 4),
(35, 'Geografía', '2', 'A', b'0', 'Martes', 5, 6, 7, '', 0, 0),
(36, 'Geografía', '2', 'B', b'0', 'Martes', 2, 3, 4, '', 0, 0),
(37, 'Historia', '2', 'A', b'1', 'Lunes', 3, 4, 0, 'Viernes', 1, 2),
(38, 'Historia', '2', 'B', b'1', 'Lunes', 3, 4, 0, 'Viernes', 5, 6),
(39, 'FEC', '2', 'A', b'0', 'Miercoles', 1, 2, 0, '', 0, 0),
(40, 'FEC', '2', 'B', b'0', 'Miercoles', 3, 4, 0, '', 0, 0),
(41, 'Educ. Tecnológica', '2', 'A', b'0', 'Martes', 3, 4, 0, '', 0, 0),
(42, 'Educ. Tecnologica', '2', 'B', b'0', 'Miercoles', 1, 2, 0, '', 0, 0),
(43, 'Arte', '2', 'A', b'0', 'Lunes', 1, 2, 0, '', 0, 0),
(44, 'Arte', '2', 'B', b'0', 'Martes', 5, 6, 0, '', 0, 0),
(45, 'Educ. Física', '2', 'A', b'0', 'Martes', -1, -2, 0, '', 0, 0),
(46, 'Educ. Física', '2', 'B', b'0', 'Lunes', -1, -2, 0, '', 0, 0),
(47, 'Tutoría', '2', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(48, 'Tutoría', '2', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(49, 'EDI', '2', 'A', b'0', 'Jueves', 5, 6, 0, '', 0, 0),
(50, 'EDI', '2', 'B', b'0', 'Viernes', 1, 2, 0, '', 0, 0),
(51, 'Lengua y Literatura', '3', 'A', b'0', 'Miercoles', 4, 5, 6, '', 0, 0),
(52, 'Lengua y Literatura', '3', 'B', b'0', 'Viernes', 2, 3, 4, '', 0, 0),
(53, 'Lengua Adicional', '3', 'A', b'0', 'Viernes', 3, 4, 0, '', 0, 0),
(54, 'Lengua Adicional', '3', 'B', b'0', 'Miercoles', 3, 4, 0, '', 0, 0),
(55, 'Matemática', '3', 'A', b'0', 'Lunes', 3, 4, 5, '', 0, 0),
(56, 'Matemática', '3', 'B', b'0', 'Jueves', 4, 5, 6, '', 0, 0),
(57, 'Físico-Quimica', '3', 'A', b'1', 'Lunes', 6, 7, 0, 'Miercoles', 1, 2),
(58, 'Físico-Quimica', '3', 'B', b'1', 'Martes', 6, 7, 0, 'Jueves', 6, 7),
(59, 'Economía', '3', 'A', b'0', 'Jueves', 3, 4, 5, '', 0, 0),
(60, 'Economía', '3', 'B', b'0', 'Lunes', 5, 0, 0, '', 0, 0),
(61, 'Biología', '3', 'A', b'1', '', 0, 0, 0, '', 0, 0),
(62, 'Biología', '3', 'B', b'1', '', 0, 0, 0, '', 0, 0),
(63, 'Geografía', '3', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(64, 'Geografía', '3', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(65, 'Historia', '3', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(66, 'Historia', '3', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(67, 'FEC', '3', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(68, 'FEC', '3', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(69, 'Administración', '3', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(70, 'Administración', '3', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(71, 'Tec. De la Información', '3', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(72, 'Tec. De la Información', '3', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(73, 'Organizaciones', '3', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(74, 'Organizacione', '3', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(75, 'Sist de inf Contable', '3', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(76, 'Sist de inf Contable', '3', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(77, 'Derecho', '3', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(78, 'Derecho', '3', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(79, 'Arte', '3', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(80, 'Arte', '3', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(81, 'Educ. Física', '3', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(82, 'Educ. Física', '3', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(83, 'EDI', '3', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(84, 'EDI', '3', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(85, 'Lengua y Literatura', '4', 'A', b'1', '', 0, 0, 0, '', 0, 0),
(86, 'Lengua y Literatura', '4', 'B', b'1', '', 0, 0, 0, '', 0, 0),
(87, 'Lengua Adicional', '4', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(88, 'Lengua Adicional', '4', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(89, 'Matemática', '4', 'A', b'1', '', 0, 0, 0, '', 0, 0),
(90, 'Matemática', '4', 'B', b'1', '', 0, 0, 0, '', 0, 0),
(91, 'Físico', '4', 'A', b'1', '', 0, 0, 0, '', 0, 0),
(92, 'Físico', '4', 'B', b'1', '', 0, 0, 0, '', 0, 0),
(93, 'Quimica', '4', 'A', b'1', '', 0, 0, 0, '', 0, 0),
(94, 'Quimica', '4', 'B', b'1', '', 0, 0, 0, '', 0, 0),
(95, 'Geografía', '4', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(96, 'Geografía', '4', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(97, 'Historia', '4', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(98, 'Historia', '4', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(99, 'Historia Orientada', '4', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(100, 'Historia Orientada', '4', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(101, 'FEC', '4', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(102, 'FEC', '4', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(103, 'Contabilidad patrimonial y de gestion', '4', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(104, 'Contabilidad patrimonial y de gestion', '4', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(105, 'Proyecto Organizacional', '4', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(106, 'Proyecto Organizacional', '4', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(107, 'Filosofía', '4', 'A', b'1', '', 0, 0, 0, '', 0, 0),
(108, 'Filosofía', '4', 'B', b'1', '', 0, 0, 0, '', 0, 0),
(109, 'Tec. De la Información 1', '4', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(110, 'Tec. De la Información 1', '4', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(111, 'Tec. De la Información 2', '4', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(112, 'Tec. De la Información 2', '4', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(113, 'Sist Administración', '4', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(114, 'Sist Administración', '4', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(115, 'Educ. Física', '4', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(116, 'Educ. Física', '4', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(117, 'Economía', '4', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(118, 'Economía', '4', 'B', b'0', '', 0, 0, 0, '', 0, 0),
(119, 'EDI', '4', 'A', b'0', '', 0, 0, 0, '', 0, 0),
(120, 'EDI', '4', 'B', b'0', '', 0, 0, 0, '', 0, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`id_alumno`);

--
-- Indices de la tabla `cursa`
--
ALTER TABLE `cursa`
  ADD PRIMARY KEY (`id_cursa`),
  ADD KEY `id_alumno` (`id_alumno`),
  ADD KEY `id_materia` (`id_materia`);

--
-- Indices de la tabla `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`id_materia`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumno`
--
ALTER TABLE `alumno`
  MODIFY `id_alumno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `cursa`
--
ALTER TABLE `cursa`
  MODIFY `id_cursa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT de la tabla `materia`
--
ALTER TABLE `materia`
  MODIFY `id_materia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cursa`
--
ALTER TABLE `cursa`
  ADD CONSTRAINT `cursa_ibfk_1` FOREIGN KEY (`id_alumno`) REFERENCES `alumno` (`id_alumno`),
  ADD CONSTRAINT `cursa_ibfk_2` FOREIGN KEY (`id_materia`) REFERENCES `materia` (`id_materia`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
