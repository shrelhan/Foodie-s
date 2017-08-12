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
	.when('/myModule', {
		templateUrl: 'pages/myModule.html',
		controller: 'moduleController'
	})
})
foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}
})
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	$scope.ingredients = [];
	$scope.getIngredients = function(url) {
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key d069c54dd0d74aed8bfe6ad7ea79ad13',
			'Content-Type': 'application/json'
		},
		'data': data
	}).then(function (response) {
			var ingredients = response.data.outputs[0].data.concepts;
  			for (var i =0;i < ingredients.length;i++) {
  				$scope.ingredients.push(ingredients[i].name);
  			}
    		// $('.ingredients').html(list);
    		console.log(ingredients);
        }, function (xhr) {
        	console.log(xhr);
        })
	}
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
		bestDish: {
			name: 'Samosa',
			image: 'https://i.ytimg.com/vi/iIVJN0Yz1Y0/maxresdefault.jpg'
		},
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
	bestDish: {
	name: 'Raj Kachori',
	image: 'https://i.ytimg.com/vi/YYca7m-DM3c/maxresdefault.jpg'
},
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
bestDish: {
	name: 'Dosa',
	image: 'https://img.grouponcdn.com/deal/fndYqd3FYJpV1ip78C86/tR-1762x1057/v1/c700x420.jpg'
},
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
bestDish: {
	name: 'Chicken Curry',
	image: 'http://www.ndtv.com/cooks/images/quick-chicken-curry-new.jpg'
},
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
bestDish: {
	name: 'Shahi Paneer',
	image: 'https://i.ytimg.com/vi/lzS-aeiCvF8/maxresdefault.jpg'
},
image: 'https://sharkingforchipsanddrinks.files.wordpress.com/2012/03/sam_5270.jpg'
}]
	$scope.restaurant = restaurants[$routeParams.id-1];
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
foodieApp.controller('moduleController',function($scope){
	var fats  = [beef,lamb,pork,poultry,beef,cream,butter,cheese,avocado,walnuts,olives,egg];
	var prots = [];
	var carbs = [];
})
