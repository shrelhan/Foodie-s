var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})
foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}
})
foodieApp.controller('restaurantController',function($scope,$routeParams) {
	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
  	name: 'Relhan Sweets',
  	address: 'Lal Kuan, Delhi',
  	location: 'Lal Kuan',
  	category: 'Sweets shop',
  	vote: '4.2',
  	cuisines: 'Sweets, Chinese, South Indian, Snacks',
  	cost: '600',
  	hours: '6 AM to 10:30 PM (Mon-Sun)',
  	image: 'relhan.jpg'
  },
  {
  name: 'Haldirams',
  address: 'Mohan-Co, Badarpur',
  location: 'Mohan-Co',
  category: 'Casual Dining',
  vote: '4.0',
  cuisines: 'North Indian, Sweets, Snacks',
  cost: '1200',
  hours: '11 AM to 10 PM (Mon-Sun)',
  image: 'http://i.ndtvimg.com/i/2015-02/haldiram2_240x180_51423052523.jpg'
},
{
name: 'Sagar Ratna',
address: 'Mohan-Co, Badarpur',
location: 'Badarpur',
category: 'Casual Dining',
vote: '4.3',
cuisines: 'South Indian',
cost: '800',
hours: '11 AM to 10 PM (Mon-Sun)',
image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/logos/original/Sagarratna_1449307245.png'
},
{
name: 'Rasoi',
address: 'Pul Pehladpur, Delhi',
location: 'Pul Pehladpur',
category: 'Casual Dining',
vote: '3.9',
cuisines: 'Non Veg, Veg',
cost: '750',
hours: '11 AM to 11 PM (Mon-Sun)',
image: 'https://www.guialis.co.in/uploads/in/orig/0233242001_rasoi-logo-01-jpg--.jpg'
},
{
name: 'Kake Di Hatti',
address: 'Inner Circle, Connaught Place',
location: 'Connaught Place',
category: 'Casual Dining',
vote: '4.2',
cuisines: 'North Indian',
cost: '1000',
hours: '11 PM to 1 AM (Mon-Sun)',
image: 'https://sharkingforchipsanddrinks.files.wordpress.com/2012/03/sam_5270.jpg'
}]
	$scope.restaurant = restaurants[$routeParams.id - 1];
})
foodieApp.controller('mainController',function($scope) {
  $scope.restaurants = [{
  	name: 'Relhan Sweets',
  	address: 'Lal Kuan, Delhi',
  	location: 'Lal Kuan',
  	category: 'Sweets shop',
  	vote: '4.2',
  	cuisines: 'Sweets, Chinese, South Indian, Snacks',
  	cost: '600',
  	hours: '6 AM to 10:30 PM (Mon-Sun)',
  	image: 'relhan.jpg'
  },
  {
  name: 'Haldirams',
  address: 'Mohan-Co, Badarpur',
  location: 'Mohan-Co',
  category: 'Casual Dining',
  vote: '4.0',
  cuisines: 'North Indian, Sweets, Snacks',
  cost: '1200',
  hours: '11 AM to 10 PM (Mon-Sun)',
  image: 'http://i.ndtvimg.com/i/2015-02/haldiram2_240x180_51423052523.jpg'
},
{
name: 'Sagar Ratna',
address: 'Mohan-Co, Badarpur',
location: 'Badarpur',
category: 'Casual Dining',
vote: '4.3',
cuisines: 'South Indian',
cost: '800',
hours: '11 AM to 10 PM (Mon-Sun)',
image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/logos/original/Sagarratna_1449307245.png'
},
{
name: 'Rasoi',
address: 'Pul Pehladpur, Delhi',
location: 'Pul Pehladpur',
category: 'Casual Dining',
vote: '3.9',
cuisines: 'Non Veg, Veg',
cost: '750',
hours: '11 AM to 11 PM (Mon-Sun)',
image: 'https://www.guialis.co.in/uploads/in/orig/0233242001_rasoi-logo-01-jpg--.jpg'
},
{
name: 'Kake Di Hatti',
address: 'Inner Circle, Connaught Place',
location: 'Connaught Place',
category: 'Casual Dining',
vote: '4.2',
cuisines: 'North Indian',
cost: '1000',
hours: '11 PM to 1 AM (Mon-Sun)',
image: 'https://sharkingforchipsanddrinks.files.wordpress.com/2012/03/sam_5270.jpg'
}]
})
