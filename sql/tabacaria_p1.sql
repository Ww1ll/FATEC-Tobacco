-- phpMyAdmin SQL Dump
-- version 4.0.4.2
-- http://www.phpmyadmin.net
--
-- Máquina: localhost
-- Data de Criação: 28-Maio-2023 às 20:47
-- Versão do servidor: 5.6.13
-- versão do PHP: 5.4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de Dados: `tabacaria_p1`
--
CREATE DATABASE IF NOT EXISTS `tabacaria_p1` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `tabacaria_p1`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cad_prod`
--

CREATE TABLE IF NOT EXISTS `cad_prod` (
  `cod_prod` int(20) NOT NULL,
  `img_prod` varchar(300) DEFAULT NULL,
  `capa_prod` varchar(300) DEFAULT NULL,
  `desc_prod` varchar(100) DEFAULT NULL,
  `preco_prod` double(20,2) DEFAULT NULL,
  `id_resp` int(20) DEFAULT NULL,
  `data_cad` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cod_prod`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cad_prod`
--

INSERT INTO `cad_prod` (`cod_prod`, `img_prod`, `capa_prod`, `desc_prod`, `preco_prod`, `id_resp`, `data_cad`) VALUES
(1, 'assets/imagens/products/RapeXingu/001.webp', 'assets/imagens/products/RapeXingu/002.webp', 'Rape Xingu2', 100.00, 27, '2023-05-25 13:14:20'),
(2, 'assets/imagens/products/SedaZomoBrown/001.webp', 'assets/imagens/products/SedaZomoBrown/002.webp', 'Seda ZOMO Brown', 25.50, 25, '2023-05-25 14:23:23'),
(3, 'assets/imagens/products/kingTobacco/001.webp', 'assets/imagens/products/kingTobacco/002.webp', 'Combo King Tobacco', 185.00, 25, '2023-05-25 14:43:44'),
(4, 'assets/imagens/products/seda-vidro/001.webp', 'assets/imagens/products/seda-vidro/002.webp', 'Seda Vidro SESSAOZADA', 68.95, 27, '2023-05-28 17:42:57');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cad_user`
--

CREATE TABLE IF NOT EXISTS `cad_user` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `sobrenome` varchar(50) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `senha` varchar(20) NOT NULL,
  `nascto` varchar(10) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=29 ;

--
-- Extraindo dados da tabela `cad_user`
--

INSERT INTO `cad_user` (`id`, `nome`, `sobrenome`, `cpf`, `senha`, `nascto`, `telefone`, `email`) VALUES
(25, 'admin', 'admin', '123456', 'admin', '1010-10-10', '12', 'admin'),
(28, 'ALICE', 'OLIVEIRA', '987.654.321-00', '123456', '2010-10-10', '(11) 11111-1111', 'aliceoliveira@gmail.com');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cart_user`
--

CREATE TABLE IF NOT EXISTS `cart_user` (
  `id_user` int(20) DEFAULT NULL,
  `cod_prod` int(20) DEFAULT NULL,
  `desc_prod` varchar(100) DEFAULT NULL,
  `preco_prod` decimal(20,2) DEFAULT NULL,
  `qtd_prod` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cart_user`
--

INSERT INTO `cart_user` (`id_user`, `cod_prod`, `desc_prod`, `preco_prod`, `qtd_prod`) VALUES
(28, 4, 'Narguile Mini Completo', '399.99', 1),
(28, 3, 'Combo King Tobacco', '185.00', 1),
(27, 1, 'Rape Xingu', '100.00', 1),
(27, 2, 'Seda ZOMO Brown', '25.50', 1),
(27, 3, 'Combo King Tobacco', '185.00', 1),
(27, 4, 'Narguile Mini Completo', '399.99', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_sugest`
--

CREATE TABLE IF NOT EXISTS `tb_sugest` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `assunto` varchar(300) NOT NULL,
  `lido` varchar(1) NOT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Extraindo dados da tabela `tb_sugest`
--

INSERT INTO `tb_sugest` (`id`, `nome`, `email`, `assunto`, `lido`, `data`) VALUES
(4, 'Fernando Bonde Leonelli', 'fernandobondeleonelli@gmail.com', 'Teste de mensagen de contato', 'n', '2023-05-28 19:48:48');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
