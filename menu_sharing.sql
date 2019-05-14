-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 14, 2019 at 10:41 AM
-- Server version: 5.5.60-MariaDB
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `menu_sharing`
--

-- --------------------------------------------------------

--
-- Table structure for table `access_level`
--

CREATE TABLE IF NOT EXISTS `access_level` (
  `accessLevelID` int(11) NOT NULL,
  `access_level` int(11) DEFAULT NULL,
  `accessLevelName` varchar(50) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `access_level`
--

INSERT INTO `access_level` (`accessLevelID`, `access_level`, `accessLevelName`) VALUES
(1, 0, 'Administrator'),
(2, 1, 'User');

-- --------------------------------------------------------

--
-- Table structure for table `animal`
--

CREATE TABLE IF NOT EXISTS `animal` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `animal`
--

INSERT INTO `animal` (`id`, `name`) VALUES
(1, 'tiger'),
(2, 'cat'),
(3, 'dog');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `commentID` int(11) NOT NULL,
  `restaurantID` int(11) DEFAULT NULL,
  `userID` int(11) DEFAULT NULL,
  `textComment` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `creationDate` date DEFAULT NULL,
  `deleteDate` date DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`commentID`, `restaurantID`, `userID`, `textComment`, `creationDate`, `deleteDate`) VALUES
(1, 4, 1, 'test comment ', '0000-00-00', '2009-00-00'),
(2, 4, 2, 'test comment ', '0000-00-00', '2009-00-00'),
(3, 3, 3, 'test comment for vuo kebab', '0000-00-00', '2009-00-00'),
(5, 4, 5, 'test comment ', '0000-00-00', '2009-00-00'),
(7, 2, 1, 'test comment hardrock', '2009-00-00', '2010-00-00'),
(8, 3, 1, 'test comment vuo kebab pizza', '2009-00-00', '2010-00-00'),
(9, 2, 1, 'test comment ', '2009-00-00', '2010-00-00'),
(10, 5, 1, 'test comment ', '2009-00-00', '2010-00-00'),
(11, 1, 1, 'test comment vapiano 1', '2009-00-00', '2010-00-00'),
(14, 5, 1, 'test comment ', '2008-07-04', '2008-07-04');

-- --------------------------------------------------------

--
-- Table structure for table `meal`
--

CREATE TABLE IF NOT EXISTS `meal` (
  `mealID` int(11) NOT NULL,
  `mealTypeID` int(11) DEFAULT NULL,
  `mealName` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `mealDescription` varchar(150) CHARACTER SET utf8 DEFAULT NULL,
  `mealPrice` double DEFAULT NULL,
  `mealPicture` varchar(250) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `meal`
--

INSERT INTO `meal` (`mealID`, `mealTypeID`, `mealName`, `mealDescription`, `mealPrice`, `mealPicture`) VALUES
(1, 1, 'Crema Di Avacado', 'Healthy vegan pasta with fried onions, cherry tomatoes and bell peppers in a creamy avacado sauce.', 13.9, 'https://media-cdn.tripadvisor.com/media/photo-s/0f/a2/33/b8/pasta-crema-di-avocado.jpg'),
(2, 2, 'Caprese', 'Cherry tomatoes with buffalo mozzarella, basil and rocket..', 13.5, 'http://4.bp.blogspot.com/-8ZQ6j5EOEKI/U2Wc_iGjm5I/AAAAAAAADpw/W7iXWOcifiE/s1600/IMG_0308.JPG'),
(3, 3, 'Creme Brulee', 'Our classical Creme brulee, decorated with caramelized sugar and seasonal garnish.', 6.5, 'https://i.pinimg.com/236x/95/13/b1/9513b109bd52733c3f5fb626090efd41--juicy-black.jpg'),
(4, 4, 'Aranciata, Limonata', 'Italian lemonades, 0,2l.', 2.9, 'https://pbs.twimg.com/media/Biqp4y4CAAAXqCb.jpg'),
(5, 1, 'Jumbo Combo', 'A collection of our most popular appetizers: signature wings, onion rings, Tupelo chicken tenders. Southwest spring rolls and Bruschetta.', 19.5, 'https://media-cdn.tripadvisor.com/media/photo-s/0c/6e/72/54/hard-rock-cafe.jpg'),
(6, 2, 'Classic Waldorf Salad', 'Grilled fresh chicken with fresh spinach and kale tossed in a\r\nherb ranch dressing, with sliced green apples, pomegranate seeds, green grapes, celery ', 14.5, 'https://media-cdn.tripadvisor.com/media/photo-s/13/4a/af/43/classic-waldorf-salad.jpg'),
(7, 3, 'Cheesecake made with oreo®', 'A rich and creamy NY-style cheesecake baked with a generous\r\nhelping of Oreo® cookies, drizzled with GHIRARDELLI® chocolate\r\nsauce with a decadent Ore', 10.5, 'https://media-cdn.tripadvisor.com/media/photo-s/13/d4/06/df/cheesecake-made-with.jpg'),
(8, 4, 'Hurricane', 'Orange, mango and pineapple juice infused with Bacardi Superior Rum, Bacardi Black Rum, Amaretto and Finest Call Grenadines.', 14.5, 'https://i.pinimg.com/originals/3b/80/86/3b8086a518d9e6722cfce4843485985e.jpg'),
(9, 1, 'Pizza Americano', 'Ananas, kinkku; iso', 15, 'https://media-cdn.tripadvisor.com/media/photo-s/11/b2/f6/cd/pizza-americano.jpg'),
(10, 2, 'KanaSalaatti', 'ananas, broilerin rintafilé, kurkku, lehtisalaatti, pitaleipä, sipuli, tomaatti, tomaattikastike, valkosipulikastike ja vihreä chilipippur', 8.8, 'https://public.keskofiles.com/f/k-ruoka/recipe/1959?w=1440&h=640&fit=crop&q=60'),
(11, 3, 'Ranskalaiset perunat', 'Ranskalaiset perunat', 4, 'https://images.cdn.yle.fi/image/upload//w_1199,h_800,f_auto,fl_lossy,q_auto/13-3-9946681.jpg'),
(12, 4, '0,33', '7 up, jaffa, pepsi tai pepsi max ', 2.3, 'https://img.ilcdn.fi/VOyyDXo3Iyl0GDKdm_B23GR3lUw=/full-fit-in/612x/img-s3.ilcdn.fi/2088372d9a7b37f6ab941b1ca527078ad9a95e5004e4c9b31cce11d34be25974.jpg'),
(13, 1, 'Churrasco', 'Churrasco is a Brazilian-style barbecue.', 17.9, 'https://i.ytimg.com/vi/yMbXlPeG9NI/maxresdefault.jpg'),
(14, 2, 'Teppanyaki', 'Teppanyaki is a Japanese cooking method where the food is baked with a large griddle..', 13.5, 'http://www.caverna.fi/images/teppanyaki.jpg'),
(15, 3, 'Dessert', 'Dessert: fruit mix.', 7.5, 'https://thetoughcookie.com/wp-content/uploads/2015/05/Fruit-Salad-Pudding-Mix-2.jpg'),
(16, 4, 'Deakin Estate Viognier', 'White vine. Bottle.', 40, 'https://cdn1.wine-searcher.net/images/labels/04/34/10900434.jpg'),
(17, 1, 'Paella', 'Mussels, tigerprawns, rabbit, saffron rice & alioli', 21, 'http://3.bp.blogspot.com/-ZnezRaF51LU/UWXoXO9qB5I/AAAAAAAADVc/XHSax3olOp0/s1600/IMG_2107.JPG'),
(18, 2, 'Tuna tartar', 'Lightly smoked tuna, cucamber, seasame, chili, coriander', 12, 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/tuna_tartare_with_chilli_29432_16x9.jpg'),
(19, 3, 'Carribian shake', 'Icecream, coconut, passion fruit, pineapple', 8, 'http://3.bp.blogspot.com/_lMrrL3i85MM/SpNQrPahiMI/AAAAAAAADfk/JngzNzuMTjM/w1200-h630-p-k-no-nu/IMG_7020_1.jpg'),
(20, 4, 'Pina colada', 'Angostura rum, fresh åineapple, coconut', 10, 'https://assets.punchdrink.com/wp-content/uploads/2017/09/Recipe-Pina-Colada-Castro-2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `meal_type`
--

CREATE TABLE IF NOT EXISTS `meal_type` (
  `mealTypeID` int(11) NOT NULL,
  `mealTypeName` varchar(50) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `meal_type`
--

INSERT INTO `meal_type` (`mealTypeID`, `mealTypeName`) VALUES
(1, 'Main'),
(2, 'Appetizer'),
(3, 'Desserts'),
(4, 'Drinks');

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

CREATE TABLE IF NOT EXISTS `restaurant` (
  `restaurantID` int(11) NOT NULL,
  `restaurantTypeID` int(11) DEFAULT NULL,
  `restaurantPicture` varchar(150) CHARACTER SET utf8 DEFAULT NULL,
  `restaurantName` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `location` varchar(60) CHARACTER SET utf8 DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `open` time DEFAULT NULL,
  `close` time DEFAULT NULL,
  `creationDate` date DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `restaurant`
--

INSERT INTO `restaurant` (`restaurantID`, `restaurantTypeID`, `restaurantPicture`, `restaurantName`, `location`, `description`, `open`, `close`, `creationDate`) VALUES
(1, 7, 'https://www.restaurantsofmanchester.com/photos/italian/vapiano-foodselection.jpg', 'Vapiano', ' Mikonkatu 15, 00100 Helsinki', 'Euro-chic chain for pastas, pizzas & more, ordered cafeteria-style in modern environs with a bar.', '11:00:00', '23:00:00', '2019-06-05'),
(2, 4, 'https://media.licdn.com/dms/image/C561BAQHVdBc7yR2DBA/company-background_10000/0?e=2159024400&v=beta&t=0bcJfFPwt7VvucLp8xy5bDZ0oUdpU-r0MBm7YQ3nqVk', 'Hard Rock Cafe', 'Aleksanterinkatu 21, 00100 Helsinki', 'Rock ’n’ roll-themed chain with a high-energy vibe serving burgers & American classics.', '11:00:00', '24:00:00', '2019-06-05'),
(3, 3, 'https://www.vuopizzakebab.fi/images/shop_front.jpg', 'Vuo Kebab Pizza', 'Vuosaarentie 8, 00980 Helsinki', 'Good place for eating pizza', '09:00:00', '21:00:00', '2018-03-08'),
(4, 5, 'https://i0.wp.com/blog.juhah.org/wp-content/uploads/2016/07/image-24.jpeg', 'Caverna Restaurant', 'Yliopistonkatu 5, 00101 Helsinki', 'Caverna is an inviting cave restaurant in Helsinki city center. We hope to treat our guests with a gratifying experience that is a combination of a large variety of dishes from different corners of the world, an exotic ambience and a five star client serv', '11:00:00', '22:00:00', '2019-05-07'),
(5, 2, 'https://qul.imgix.net/10ccd873-f763-4b33-a639-244b1026da6b/342345_sld.jpg', 'Treffi Pub&Bistro', 'Hiihtomäentie 14, 00810 Helsinki', 'Treffi Pub & Bistro is the most beloved restaurant in Helsinki, just opposite the Herttoniemi metro station. Welcome!', '09:00:00', '02:00:00', '2019-05-07');

-- --------------------------------------------------------

--
-- Table structure for table `restaurantMeal`
--

CREATE TABLE IF NOT EXISTS `restaurantMeal` (
  `restaurantID` int(11) DEFAULT NULL,
  `mealID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `restaurantMeal`
--

INSERT INTO `restaurantMeal` (`restaurantID`, `mealID`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 6),
(2, 7),
(2, 8),
(3, 9),
(3, 10),
(3, 11),
(3, 12),
(4, 13),
(4, 14),
(4, 15),
(4, 16),
(5, 17),
(5, 18),
(5, 19),
(5, 20),
(2, 5);

-- --------------------------------------------------------

--
-- Table structure for table `restaurantRating`
--

CREATE TABLE IF NOT EXISTS `restaurantRating` (
  `ratingID` int(11) NOT NULL,
  `restaurantID` int(11) DEFAULT NULL,
  `ratingValue` int(11) DEFAULT NULL,
  `rateDate` date DEFAULT NULL,
  `userID` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `restaurantRating`
--

INSERT INTO `restaurantRating` (`ratingID`, `restaurantID`, `ratingValue`, `rateDate`, `userID`) VALUES
(1, 1, 4, '0009-00-00', 1),
(2, 1, 5, '2008-07-04', 2),
(3, 2, 4, '2008-07-04', 3),
(4, 2, 3, '2008-07-04', 1),
(5, 3, 4, '2008-07-04', 1),
(6, 3, 2, '2008-07-04', 1),
(8, 4, 1, '2008-07-04', 1),
(9, 5, 5, '2008-07-04', 1);

-- --------------------------------------------------------

--
-- Table structure for table `restaurantType`
--

CREATE TABLE IF NOT EXISTS `restaurantType` (
  `restaurantTypeID` int(11) NOT NULL,
  `restaurantTypeName` varchar(50) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `restaurantType`
--

INSERT INTO `restaurantType` (`restaurantTypeID`, `restaurantTypeName`) VALUES
(1, 'FastFood'),
(2, 'Pub'),
(3, 'Pizzeria'),
(4, 'Cafe'),
(5, 'Buffet'),
(6, 'Steakhouse'),
(7, 'Dining restaurant');

-- --------------------------------------------------------

--
-- Table structure for table `uploaded_files`
--

CREATE TABLE IF NOT EXISTS `uploaded_files` (
  `fileID` int(11) NOT NULL,
  `fileName` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `userID` int(11) DEFAULT NULL,
  `fileSize` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `fileType` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `uploadDate` date DEFAULT NULL,
  `deleteDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `userID` int(11) NOT NULL,
  `userName` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `passwordHash` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `creationDate` date DEFAULT NULL,
  `deleteDate` date DEFAULT NULL,
  `accessLevelID` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userID`, `userName`, `passwordHash`, `creationDate`, `deleteDate`, `accessLevelID`) VALUES
(1, 'anton', 'anton74', '2019-05-14', NULL, 1),
(4, 'parampam', '1234567', '2019-05-14', NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `access_level`
--
ALTER TABLE `access_level`
  ADD PRIMARY KEY (`accessLevelID`);

--
-- Indexes for table `animal`
--
ALTER TABLE `animal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`commentID`);

--
-- Indexes for table `meal`
--
ALTER TABLE `meal`
  ADD PRIMARY KEY (`mealID`);

--
-- Indexes for table `meal_type`
--
ALTER TABLE `meal_type`
  ADD PRIMARY KEY (`mealTypeID`);

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`restaurantID`);

--
-- Indexes for table `restaurantRating`
--
ALTER TABLE `restaurantRating`
  ADD PRIMARY KEY (`ratingID`);

--
-- Indexes for table `restaurantType`
--
ALTER TABLE `restaurantType`
  ADD PRIMARY KEY (`restaurantTypeID`);

--
-- Indexes for table `uploaded_files`
--
ALTER TABLE `uploaded_files`
  ADD PRIMARY KEY (`fileID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `access_level`
--
ALTER TABLE `access_level`
  MODIFY `accessLevelID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `commentID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `meal`
--
ALTER TABLE `meal`
  MODIFY `mealID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `meal_type`
--
ALTER TABLE `meal_type`
  MODIFY `mealTypeID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `restaurantID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `restaurantRating`
--
ALTER TABLE `restaurantRating`
  MODIFY `ratingID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `restaurantType`
--
ALTER TABLE `restaurantType`
  MODIFY `restaurantTypeID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `uploaded_files`
--
ALTER TABLE `uploaded_files`
  MODIFY `fileID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
