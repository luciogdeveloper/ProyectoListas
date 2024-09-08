-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-09-2024 a las 02:54:17
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
  `curso_asignado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`id_alumno`, `apellido`, `nombre`, `dni`, `curso_asignado`) VALUES
(18, 'Gayoso', 'Lucio', '19062999', '4 A'),
(21, 'Miranda', 'Vitalia', '93249966', '4 B'),
(22, 'Gomez', 'Andres', '22048546', '2 B'),
(23, 'Miranda', 'Santi', '56887385', '1 B'),
(24, 'Duran', 'Angel', '94658494', '2 B'),
(25, 'Ortis', 'Adriel', '25321789', '4 A'),
(26, 'Gomez', 'Vitalia', '19062999', '3 B'),
(27, 'Miranda', 'Vitalia', '93249966', '3 B'),
(28, 'Miranda', 'Brisa', '78124512', '2 B'),
(29, 'Roriguez', 'Yisiano', '12456123', '2 B'),
(30, 'Mamani', 'Daniel', '87456123', '1 B'),
(31, 'Molina', 'Dante', '12456987', '4 A'),
(32, 'Leyes', 'Jorge', '25369741', '2 A'),
(33, 'Fleitas', 'Omar', '98456147', '2 B');

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
(4, 18, 3),
(5, 18, 5),
(6, 18, 7),
(7, 18, 9),
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
(68, 33, 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `id_materia` int(11) NOT NULL,
  `nombre_materia` varchar(50) NOT NULL,
  `docente` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`id_materia`, `nombre_materia`, `docente`) VALUES
(1, 'Matemática A', 'Lopez Andres'),
(2, 'Matemática B', 'Lopez Andres'),
(3, 'Lengua A', 'Lopez Andres'),
(4, 'Lengua B', 'Lopez Andres'),
(5, 'Historia A', 'Lopez Andres'),
(6, 'Historia B', 'Lopez Andres'),
(7, 'FEC A', 'Lopez Andres'),
(8, 'FEC B', 'Lopez Andres'),
(9, 'Ingles A', 'Lopez Andres'),
(10, 'Ingles B', 'Lopez Andres'),
(11, 'Geografía A', 'Lopez Andres'),
(12, 'Geografía B', 'Lopez Andres'),
(13, 'Química A', 'Lopez Andres'),
(14, 'Química B', 'Lopez Andres'),
(15, 'Biología A', 'Lopez Andres'),
(16, 'Biología B', 'Lopez Andres'),
(17, 'Tecnología A', 'Lopez Andres'),
(18, 'Tecnología B', 'Lopez Andres'),
(19, 'Contabilidad A', 'Lopez Andres'),
(20, 'Contabilidad b', 'Lopez Andres'),
(21, 'Ed Fisica A', 'Lopez Andres'),
(22, 'Ed Fisica B', 'Lopez Andres');

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
  MODIFY `id_alumno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `cursa`
--
ALTER TABLE `cursa`
  MODIFY `id_cursa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT de la tabla `materia`
--
ALTER TABLE `materia`
  MODIFY `id_materia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

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
