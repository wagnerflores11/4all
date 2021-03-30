CREATE DATABASE  IF NOT EXISTS `4all` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `4all`;

DROP TABLE IF EXISTS `tb_movie`;

CREATE TABLE `tb_movie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `director` varchar(512) NOT NULL,
  `total` int(11) NOT NULL,
  `register` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--

LOCK TABLES `tb_movie` WRITE;

--INSERT INTO `tb_movie` (`id`, `title`, `director`,`total`) VALUES
--(1, 'Vingadores I', 'Jorge',11),
--(2, 'Star Wars: Episódio V', 'Tirulipa',22),
--(3, 'Teste', 'Cleiton Rasta',30)


UNLOCK TABLES;

--
-- Table structure for table `tb_reservations`
--

DROP TABLE IF EXISTS `tb_reservations`;

CREATE TABLE `tb_reservations` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `title` varchar(256) NOT NULL,
  `register` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--
-- Dumping data for table `tb_reservations`
--

LOCK TABLES `tb_reservations` WRITE;

--INSERT INTO `tb_users` VALUES (1,'Wagner Flores','Star Wars: Episódio V','2021-03-27 18:57:44');

UNLOCK TABLES;


DROP TABLE IF EXISTS `tb_users`;

CREATE TABLE `tb_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `register` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;


--
-- Dumping data for table `tb_users`
--

LOCK TABLES `tb_users` WRITE;

--INSERT INTO `tb_users` VALUES (1,'Wagner Flores','wagner@4all.com.br','123456','2021-03-27 18:57:44');

UNLOCK TABLES;

