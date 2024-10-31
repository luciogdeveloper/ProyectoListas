-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-10-2024 a las 17:29:42
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursa`
--

CREATE TABLE `cursa` (
  `id_cursa` int(11) NOT NULL,
  `id_alumno` int(11) NOT NULL,
  `id_materia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario`
--

CREATE TABLE `horario` (
  `id_horario` int(11) NOT NULL,
  `id_materia` int(11) NOT NULL,
  `dia` varchar(20) NOT NULL,
  `primera` varchar(20) NOT NULL,
  `segunda` varchar(20) NOT NULL,
  `tercera` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `horario`
--

INSERT INTO `horario` (`id_horario`, `id_materia`, `dia`, `primera`, `segunda`, `tercera`) VALUES
(1, 23, 'Lunes', '18:45 a 19:20', '19:20 a 19:55', ''),
(2, 17, 'Lunes', '20:00 a 20:35', '20:35 a 21:10', ''),
(3, 11, 'Lunes', '21:15 a 21:50', '21:50 a 22:25', ''),
(6, 1, 'Martes', '18:45 a 19:20', '19:20 a 19:55', ''),
(7, 15, 'Martes', '20:00 a 20:35', '20:35 a 21:10', ''),
(8, 9, 'Martes', '21:15 a 21:50', '21:50 a 22:25', '22:25 a 23:00'),
(9, 13, 'Miercoles', '18:45 a 19:20', '19:20 a 19:55', ''),
(10, 5, 'Miercoles', '20:00 a 20:35', '20:35 a 21:10', ''),
(11, 1, 'Miercoles', '21:15 a 21:50', '21:50 a 22:25', ''),
(12, 7, 'Jueves', '18:45 a 19:20', '19:20 a 19:55', ''),
(13, 5, 'Jueves', '20:00 a 20:35', '20:35 a 21:10', ''),
(14, 11, 'Viernes', '18:45 a 19:20', '19:20 a 19:55', ''),
(15, 7, 'Viernes', '20:00 a 20:35', '20:35 a 21:10', ''),
(16, 19, 'Miercoles', '17:00 a 17:35', '17:35 a 18:10', '18:10 a 18:40'),
(17, 2, 'Lunes', '18:45 a 19:20', '19:20 a 19:55', ''),
(18, 10, 'Lunes', '20:00 a 20:35', '20:35 a 21:10', '21:15 a 21:50'),
(19, 8, 'Lunes', '21:50 a 22:25', '22:25 a 23:00', ''),
(20, 20, 'Martes', '17:00 a 17:35', '17:35 a 18:10', '18:10 a 18:40'),
(21, 4, 'Martes', '18:45 a 19:20', '19:20 a 19:55', '20:00 a 20:35'),
(22, 12, 'Martes', '20:35 a 21:10', '21:15 a 21:50', ''),
(23, 24, 'Martes', '21:50 a 22:25', '22:25 a 23:00', ''),
(24, 6, 'Miercoles', '18:45 a 19:20', '19:20 a 19:55', ''),
(25, 14, 'Miercoles', '20:00 a 20:35', '20:35 a 21:10', ''),
(26, 16, 'Miercoles', '21:15 a 21:50', '21:50 a 22:25', ''),
(27, 6, 'Jueves', '18:45 a 19:20', '19:20 a 19:55', ''),
(28, 8, 'Jueves', '20:00 a 20:35', '20:35 a 21:10', ''),
(29, 18, 'Jueves', '21:15 a 21:50', '21:50 a 22:25', ''),
(30, 2, 'Viernes', '18:45 a 19:20', '19:20 a 19:55', ''),
(31, 12, 'Viernes', '20:00 a 20:35', '20:35 a 21:10', ''),
(32, 45, 'Lunes', '17:00 a 17:35', '17:35 a 18:10', '18:10 a 18:40'),
(33, 43, 'Lunes', '18:45 a 19:20', '19:20 a 19:55', ''),
(34, 37, 'Lunes', '20:00 a 20:35', '20:35 a 21:10', ''),
(35, 27, 'Martes', '18:45 a 19:20', '19:20 a 19:55', ''),
(36, 41, 'Martes', '20:00 a 20:35', '20:35 a 21:10', ''),
(37, 35, 'Martes', '21:15 a 21:50', '21:50 a 22:25', '22:25 a 23:00'),
(38, 39, 'Miercoles', '18:45 a 19:20', '19:20 a 19:55', ''),
(39, 31, 'Miercoles', '20:00 a 20:35', '20:35 a 21:10', ''),
(40, 27, 'Miercoles', '21:15 a 21:50', '21:50 a 22:25', ''),
(41, 33, 'Jueves', '18:45 a 19:20', '19:20 a 19:55', ''),
(42, 31, 'Jueves', '20:00 a 20:35', '20:35 a 21:10', ''),
(43, 49, 'Jueves', '21:15 a 21:50', '21:50 a 22:25', ''),
(44, 37, 'Viernes', '18:45 a 19:20', '19:20 a 19:55', ''),
(45, 33, 'Viernes', '20:00 a 20:35', '20:35 a 21:10', ''),
(46, 29, 'Viernes', '21:15 a 21:50', '21:50 a 22:25', '22:25 a 23:00'),
(47, 46, 'Lunes', '17:00 a 17:35', '17:35 a 18:10', '18:10 a 18:40'),
(48, 32, 'Lunes', '18:45 a 19:20', '19:20 a 19:55', ''),
(49, 38, 'Lunes', '20:00 a 20:35', '20:35 a 21:10', ''),
(50, 34, 'Lunes', '21:15 a 21:50', '21:50 a 22:25', ''),
(51, 36, 'Martes', '19:20 a 19:55', '20:00 a 20:35', '20:35 a 21:10'),
(52, 44, 'Martes', '21:15 a 21:50', '21:50 a 22:25', ''),
(53, 42, 'Miercoles', '18:45 a 19:20', '19:20 a 19:55', ''),
(54, 40, 'Miercoles', '20:00 a 20:35', '20:35 a 21:10', ''),
(55, 30, 'Miercoles', '21:15 a 21:50', '21:50 a 22:25', '22:25 a 23:00'),
(56, 28, 'Jueves', '18:45 a 19:20', '19:20 a 19:55', ''),
(57, 34, 'Jueves', '20:00 a 20:35', '20:35 a 21:10', ''),
(58, 32, 'Jueves', '21:15 a 21:50', '21:50 a 22:25', ''),
(59, 50, 'Viernes', '18:45 a 19:20', '19:20 a 19:55', ''),
(60, 28, 'Viernes', '20:00 a 20:35', '20:35 a 21:10', ''),
(61, 38, 'Viernes', '21:15 a 21:50', '21:50 a 22:25', ''),
(62, 67, 'Lunes', '18:45 a 19:20', '19:20 a 19:55', ''),
(63, 55, 'Lunes', '20:00 a 20:35', '20:35 a 21:10', '21:15 a 21:50'),
(64, 57, 'Lunes', '21:50 a 22:25', '22:25 a 23:00', ''),
(65, 61, 'Martes', '18:10 a 18:45', '18:45 a 19:20', ''),
(66, 77, 'Martes', '19:20 a 19:55', '20:00 a 20:35', '20:35 a 21:10'),
(67, 69, 'Martes', '21:15 a 21:50', '21:50 a 22:25', '22:25 a 23:00'),
(68, 57, 'Miercoles', '18:45 a 19:20', '19:20 a 19:55', ''),
(69, 51, 'Miercoles', '20:00 a 20:35', '20:35 a 21:10', '21:15 a 21:50'),
(70, 65, 'Miercoles', '21:50 a 22:25', '22:25 a 23:00', ''),
(71, 81, 'Miercoles', '17:00 a 17:35', '17:35 a 18:10', '18:10 a 18:40'),
(72, 79, 'Jueves', '18:10 a 18:45', '', ''),
(73, 71, 'Jueves', '18:45 a 19:20', '19:20 a 19:55', ''),
(74, 59, 'Jueves', '20:00 a 20:35', '20:35 a 21:10', '21:15 a 21:50'),
(75, 63, 'Jueves', '21:50 a 22:25', '22:25 a 23:00', ''),
(76, 73, 'Viernes', '18:10 a 18:45', '18:45 a 19:20', '19:20 a 19:55'),
(77, 53, 'Viernes', '20:00 a 20:35', '20:35 a 21:10', ''),
(78, 75, 'Viernes', '21:15 a 21:50', '21:50 a 22:25', '22:25 a 23:00'),
(79, 66, 'Lunes', '18:10 a 18:45', '18:45 a 19:20', ''),
(80, 78, 'Lunes', '19:20 a 19:55', '20:00 a 20:35', '20:35 a 21:10'),
(81, 60, 'Lunes', '21:15 a 21:50', '21:50 a 22:25', '22:25 a 23:00'),
(82, 82, 'Lunes', '17:00 a 17:35', '17:35 a 18:10', '18:10 a 18:40'),
(83, 74, 'Martes', '18:45 a 19:20', '19:20 a 19:55', '20:00 a 20:35'),
(84, 62, 'Martes', '20:35 a 21:10', '21:15 a 21:50', ''),
(85, 58, 'Martes', '21:50 a 22:25', '22:25 a 23:00', ''),
(86, 70, 'Miercoles', '18:10 a 18:45', '18:45 a 19:20', '19:20 a 19:55'),
(87, 54, 'Miercoles', '20:00 a 20:35', '20:35 a 21:10', ''),
(88, 76, 'Miercoles', '21:15 a 21:50', '21:50 a 22:25', '22:25 a 23:00'),
(89, 80, 'Jueves', '18:10 a 18:45', '', ''),
(90, 68, 'Jueves', '18:45 a 19:20', '19:20 a 19:55', ''),
(91, 56, 'Jueves', '20:00 a 20:35', '20:35 a 21:10', '21:15 a 21:50'),
(92, 58, 'Jueves', '21:50 a 22:25', '22:25 a 23:00', ''),
(93, 52, 'Viernes', '18:45 a 19:20', '19:20 a 19:55', '20:00 a 20:35'),
(94, 64, 'Viernes', '20:35 a 21:10', '21:15 a 21:50', ''),
(95, 72, 'Viernes', '21:50 a 22:25', '22:25 a 23:00', ''),
(96, 85, 'Lunes', '18:45 a 19:20', '19:20 a 19:55', '20:00 a 20:35'),
(97, 87, 'Lunes', '20:35 a 21:10', '21:15 a 21:50', ''),
(98, 101, 'Lunes', '21:50 a 22:25', '22:25 a 23:00', ''),
(99, 93, 'Lunes', '18:10 a 18:45', '', ''),
(100, 117, 'Martes', '18:45 a 19:20', '19:20 a 19:55', '20:00 a 20:35'),
(101, 97, 'Martes', '20:35 a 21:10', '21:15 a 21:50', ''),
(102, 95, 'Martes', '21:50 a 22:25', '22:25 a 23:00', ''),
(103, 103, 'Miercoles', '18:45 a 19:20', '19:20 a 19:55', ''),
(104, 113, 'Miercoles', '20:00 a 20:35', '20:35 a 21:10', '21:15 a 21:50'),
(105, 107, 'Miercoles', '21:50 a 22:25', '22:25 a 23:00', ''),
(106, 91, 'Jueves', '18:45 a 19:20', '19:20 a 19:55', '20:00 a 20:35'),
(107, 105, 'Jueves', '20:35 a 21:10', '21:15 a 21:50', ''),
(108, 89, 'Viernes', '18:45 a 19:20', '19:20 a 19:55', '20:00 a 20:35'),
(109, 109, 'Viernes', '20:35 a 21:10', '21:15 a 21:50', ''),
(110, 118, 'Lunes', '19:20 a 19:55', '20:00 a 20:35', '20:35 a 21:10'),
(111, 98, 'Lunes', '21:15 a 21:50', '21:50 a 22:25', ''),
(112, 94, 'Martes', '17:00 a 17:35', '17:35 a 18:10', ''),
(113, 90, 'Martes', '18:45 a 19:20', '19:20 a 19:55', '20:00 a 20:35'),
(114, 96, 'Martes', '20:35 a 21:10', '21:15 a 21:50', ''),
(115, 108, 'Martes', '21:50 a 22:25', '22:25 a 23:00', ''),
(116, 86, 'Miercoles', '18:45 a 19:20', '19:20 a 19:55', '20:00 a 20:35'),
(117, 88, 'Miercoles', '20:35 a 21:10', '21:15 a 21:50', ''),
(118, 116, 'Jueves', '17:00 a 17:35', '17:35 a 18:10', '18:10 a 18:45'),
(119, 104, 'Jueves', '18:45 a 19:20', '19:20 a 19:55', ''),
(120, 102, 'Jueves', '20:00 a 20:35', '20:35 a 21:10', ''),
(121, 114, 'Jueves', '21:15 a 21:50', '21:50 a 22:25', '22:25 a 23:00'),
(122, 110, 'Viernes', '18:45 a 19:20', '19:20 a 19:55', ''),
(123, 106, 'Viernes', '20:00 a 20:35', '20:35 a 21:10', ''),
(124, 92, 'Viernes', '21:15 a 21:50', '21:50 a 22:25', '22:25 a 23:00'),
(125, 99, 'Martes', '20:35 a 21:10', '21:15 a 21:50', ''),
(126, 100, 'Lunes', '21:15 a 21:50', '21:50 a 22:25', ''),
(127, 111, 'Viernes', '20:35 a 21:10', '21:15 a 21:50', ''),
(128, 112, 'Viernes', '18:45 a 19:20', '19:20 a 19:55', ''),
(129, 115, 'Jueves', '17:00 a 17:35', '17:35 a 18:10', '18:10 a 18:40'),
(130, 3, 'Viernes', '21:15 a 21:50', '21:50 a 22:25', '22:25 a 23:00'),
(131, 93, 'Jueves', '18:45 a 19:20', '19:20 a 19:55', '20:00 a 20:35'),
(132, 94, 'Viernes', '21:15 a 21:50', '21:50 a 22:25', '22:25 a 23:00');

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
  `cuatrimestre` int(11) NOT NULL,
  `segundo_cuatrimestre` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`id_materia`, `nombre_materia`, `curso`, `divicion`, `doble`, `cuatrimestre`, `segundo_cuatrimestre`) VALUES
(1, 'Lengua y Literatura', '1', 'A', b'1', 0, 0),
(2, 'Lengua y Literatura', '1', 'B', b'1', 0, 0),
(3, 'Lengua Adicional', '1', 'A', b'0', 0, 0),
(4, 'Lengua Adicional', '1', 'B', b'0', 0, 0),
(5, 'Matemática', '1', 'A', b'1', 0, 0),
(6, 'Matemática', '1', 'B', b'1', 0, 0),
(7, 'Biología', '1', 'A', b'1', 0, 0),
(8, 'Biología', '1', 'B', b'1', 0, 0),
(9, 'Geografía', '1', 'A', b'0', 0, 0),
(10, 'Geografía', '1', 'B', b'0', 0, 0),
(11, 'Historia', '1', 'A', b'1', 0, 0),
(12, 'Historia', '1', 'B', b'1', 0, 0),
(13, 'FEC', '1', 'A', b'0', 0, 0),
(14, 'FEC', '1', 'B', b'0', 0, 0),
(15, 'Educ. Tecnológica', '1', 'A', b'0', 0, 0),
(16, 'Educ. Tecnologica', '1', 'B', b'0', 0, 0),
(17, 'Arte', '1', 'A', b'0', 0, 0),
(18, 'Arte', '1', 'B', b'0', 0, 0),
(19, 'Educ. Física', '1', 'A', b'0', 0, 0),
(20, 'Educ. Física', '1', 'B', b'0', 0, 0),
(21, 'Tutoría', '1', 'A', b'0', 0, 0),
(22, 'Tutoría', '1', 'B', b'0', 0, 0),
(23, 'EDI', '1', 'A', b'0', 0, 0),
(24, 'EDI', '1', 'B', b'0', 0, 0),
(27, 'Lengua y Literatura', '2', 'A', b'1', 0, 0),
(28, 'Lengua y Literatura', '2', 'B', b'1', 0, 0),
(29, 'Lengua Adicional', '2', 'A', b'0', 0, 0),
(30, 'Lengua Adicional', '2', 'B', b'0', 0, 0),
(31, 'Matemática', '2', 'A', b'1', 0, 0),
(32, 'Matemática', '2', 'B', b'1', 0, 0),
(33, 'Biología', '2', 'A', b'1', 0, 0),
(34, 'Biología', '2', 'B', b'1', 0, 0),
(35, 'Geografía', '2', 'A', b'0', 0, 0),
(36, 'Geografía', '2', 'B', b'0', 0, 0),
(37, 'Historia', '2', 'A', b'1', 0, 0),
(38, 'Historia', '2', 'B', b'1', 0, 0),
(39, 'FEC', '2', 'A', b'0', 0, 0),
(40, 'FEC', '2', 'B', b'0', 0, 0),
(41, 'Educ. Tecnológica', '2', 'A', b'0', 0, 0),
(42, 'Educ. Tecnologica', '2', 'B', b'0', 0, 0),
(43, 'Arte', '2', 'A', b'0', 0, 0),
(44, 'Arte', '2', 'B', b'0', 0, 0),
(45, 'Educ. Física', '2', 'A', b'0', 0, 0),
(46, 'Educ. Física', '2', 'B', b'0', 0, 0),
(47, 'Tutoría', '2', 'A', b'0', 0, 0),
(48, 'Tutoría', '2', 'B', b'0', 0, 0),
(49, 'EDI', '2', 'A', b'0', 0, 0),
(50, 'EDI', '2', 'B', b'0', 0, 0),
(51, 'Lengua y Literatura', '3', 'A', b'0', 0, 0),
(52, 'Lengua y Literatura', '3', 'B', b'0', 0, 0),
(53, 'Lengua Adicional', '3', 'A', b'0', 0, 0),
(54, 'Lengua Adicional', '3', 'B', b'0', 0, 0),
(55, 'Matemática', '3', 'A', b'0', 0, 0),
(56, 'Matemática', '3', 'B', b'0', 0, 0),
(57, 'Físico-Quimica', '3', 'A', b'1', 0, 0),
(58, 'Físico-Quimica', '3', 'B', b'1', 0, 0),
(59, 'Economía', '3', 'A', b'0', 0, 0),
(60, 'Economía', '3', 'B', b'0', 0, 0),
(61, 'Biología', '3', 'A', b'0', 0, 0),
(62, 'Biología', '3', 'B', b'0', 0, 0),
(63, 'Geografía', '3', 'A', b'0', 0, 0),
(64, 'Geografía', '3', 'B', b'0', 0, 0),
(65, 'Historia', '3', 'A', b'0', 0, 0),
(66, 'Historia', '3', 'B', b'0', 0, 0),
(67, 'FEC', '3', 'A', b'0', 0, 0),
(68, 'FEC', '3', 'B', b'0', 0, 0),
(69, 'Administración', '3', 'A', b'0', 0, 0),
(70, 'Administración', '3', 'B', b'0', 0, 0),
(71, 'Tec. De la Información', '3', 'A', b'0', 0, 0),
(72, 'Tec. De la Información', '3', 'B', b'0', 0, 0),
(73, 'Organizaciones', '3', 'A', b'0', 0, 0),
(74, 'Organizaciones', '3', 'B', b'0', 0, 0),
(75, 'Sist de inf Contable', '3', 'A', b'0', 0, 0),
(76, 'Sist de inf Contable', '3', 'B', b'0', 0, 0),
(77, 'Derecho', '3', 'A', b'0', 0, 0),
(78, 'Derecho', '3', 'B', b'0', 0, 0),
(79, 'Arte', '3', 'A', b'0', 0, 0),
(80, 'Arte', '3', 'B', b'0', 0, 0),
(81, 'Educ. Física', '3', 'A', b'0', 0, 0),
(82, 'Educ. Física', '3', 'B', b'0', 0, 0),
(83, 'EDI', '3', 'A', b'0', 0, 0),
(84, 'EDI', '3', 'B', b'0', 0, 0),
(85, 'Lengua y Literatura', '4', 'A', b'0', 0, 0),
(86, 'Lengua y Literatura', '4', 'B', b'0', 0, 0),
(87, 'Lengua Adicional', '4', 'A', b'0', 0, 0),
(88, 'Lengua Adicional', '4', 'B', b'0', 0, 0),
(89, 'Matemática', '4', 'A', b'0', 0, 0),
(90, 'Matemática', '4', 'B', b'0', 0, 0),
(91, 'Fisica', '4', 'A', b'1', 93, 0),
(92, 'Fisica', '4', 'B', b'1', 94, 0),
(93, 'Quimica', '4', 'A', b'1', 91, 1),
(94, 'Quimica', '4', 'B', b'1', 92, 1),
(95, 'Geografía', '4', 'A', b'0', 0, 0),
(96, 'Geografía', '4', 'B', b'0', 0, 0),
(97, 'Historia', '4', 'A', b'1', 99, 0),
(98, 'Historia', '4', 'B', b'1', 100, 0),
(99, 'Historia Orientada', '4', 'A', b'1', 97, 1),
(100, 'Historia Orientada', '4', 'B', b'1', 98, 1),
(101, 'FEC', '4', 'A', b'0', 0, 0),
(102, 'FEC', '4', 'B', b'0', 0, 0),
(103, 'Contabilidad patrimonial y de gestion', '4', 'A', b'0', 0, 0),
(104, 'Contabilidad patrimonial y de gestion', '4', 'B', b'0', 0, 0),
(105, 'Proyecto Organizacional', '4', 'A', b'0', 0, 0),
(106, 'Proyecto Organizacional', '4', 'B', b'0', 0, 0),
(107, 'Filosofía', '4', 'A', b'1', 0, 0),
(108, 'Filosofía', '4', 'B', b'1', 0, 0),
(109, 'Tecnologia de la informacion  1', '4', 'A', b'1', 111, 0),
(110, 'Tecnologia de la informacion  1', '4', 'B', b'1', 112, 0),
(111, 'Tecnologia de la informacion  2', '4', 'A', b'1', 109, 1),
(112, 'Tecnologia de la informacion  2', '4', 'B', b'1', 110, 1),
(113, 'Sist Administración', '4', 'A', b'0', 0, 0),
(114, 'Sist Administración', '4', 'B', b'0', 0, 0),
(115, 'Educ. Física', '4', 'A', b'0', 0, 0),
(116, 'Educ. Física', '4', 'B', b'0', 0, 0),
(117, 'Economía', '4', 'A', b'0', 0, 0),
(118, 'Economía', '4', 'B', b'0', 0, 0),
(119, 'EDI', '4', 'A', b'0', 0, 0),
(120, 'EDI', '4', 'B', b'0', 0, 0);

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
  ADD PRIMARY KEY (`id_cursa`);

--
-- Indices de la tabla `horario`
--
ALTER TABLE `horario`
  ADD PRIMARY KEY (`id_horario`);

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
  MODIFY `id_alumno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT de la tabla `cursa`
--
ALTER TABLE `cursa`
  MODIFY `id_cursa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;

--
-- AUTO_INCREMENT de la tabla `horario`
--
ALTER TABLE `horario`
  MODIFY `id_horario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=133;

--
-- AUTO_INCREMENT de la tabla `materia`
--
ALTER TABLE `materia`
  MODIFY `id_materia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
