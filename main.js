// This is used for routing the view pages
var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
// route location to login page
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	// route location to home
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	// route location to restaurant with id
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
	// route to my module or my project
	.when('/myModule', {
		templateUrl: 'pages/myModule.html',
		controller: 'moduleController'
	})
	// route to myDish with id
	.when('/dish/:id', {
		templateUrl: 'pages/myDish.html',
		controller: 'dishController'
	})
})
// controller for login view
foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}
})
// controller for restaurant
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	$scope.ingredients = [];
	// sending image to clarifai to get ingredients
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
	// array of objects of restaurants
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
  	image: 'relhan.jpg',
		id: '1'
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
  image: 'http://i.ndtvimg.com/i/2015-02/haldiram2_240x180_51423052523.jpg',
	id: '2'
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
image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/logos/original/Sagarratna_1449307245.png',
id: '3'
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
image: 'https://www.guialis.co.in/uploads/in/orig/0233242001_rasoi-logo-01-jpg--.jpg',
id: '4'
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
image: 'https://sharkingforchipsanddrinks.files.wordpress.com/2012/03/sam_5270.jpg',
id: '5'
}]
	$scope.restaurant = restaurants[$routeParams.id-1];
})
// this is controller for main.html
foodieApp.controller('mainController',function($scope) {
// this is array of objects of restaurants
	$scope.restaurants = [{
  	name: 'Relhan Sweets',
  	address: 'Lal Kuan, Delhi',
  	location: 'Lal Kuan',
  	category: 'Sweets shop',
  	vote: '4.2',
  	cuisines: 'Sweets, Chinese, South Indian, Snacks',
  	cost: '600',
  	hours: '6 AM to 10:30 PM (Mon-Sun)',
  	image: 'relhan.jpg',
		id: '1'
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
  image: 'http://i.ndtvimg.com/i/2015-02/haldiram2_240x180_51423052523.jpg',
	id: '2'
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
image: 'https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/logos/original/Sagarratna_1449307245.png',
id: '3'
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
image: 'https://www.guialis.co.in/uploads/in/orig/0233242001_rasoi-logo-01-jpg--.jpg',
id: '4'
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
image: 'https://sharkingforchipsanddrinks.files.wordpress.com/2012/03/sam_5270.jpg',
id: '5'
}]
})
// controller for mydish
foodieApp.controller('dishController',function($scope,$routeParams,$http){
	$scope.ingredients = [];
	//$scope.fats = [];
	//$scope.prots = [];
	//$scope.carbs = [];
	// this is to send image to clarifai and get ingredients
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
			var fats= ["meat"];
	    var prots= ["egg"];
	    var carbs= ["samosa"];
// this loop is checking that if dish is rich in which nutrient
	    for (var i=0;i< ingredients.length;i++) {

					if (ingredients[i].name == fats[0]) {
           alert("This is rich in Fats");
					 break;
							}
					else if (ingredients[i].name == prots[0]) {
			           alert("This is rich in Protien");
								 break;
											}

	        else if (ingredients[i].name == carbs[0]) {
				           alert("This is rich in Carbohydrates");
									 break;
										 } }
  			for (var i =0;i < ingredients.length;i++) {
					$scope.ingredients.push(ingredients[i].name);
  			}



    		// $('.ingredients').html(list);
    		console.log(ingredients);
        }, function (xhr) {
        	console.log(xhr);
        })

}
	$scope.dishId = $routeParams.id;
	// array of objects for dishes
	var dishes = [{
		name: 'Butter Chicken',
		image:'https://i.ytimg.com/vi/a03U45jFxOI/maxresdefault.jpg',
		id: '1'
	},
{
	name: 'Egg Curry',
	image:  'http://indianhealthyrecipes.com/wp-content/uploads/2016/01/egg-curry-recipe-12.jpg',
	id: '2'
},
{
	name: 'Samosa',
	image: 'https://i.ytimg.com/vi/iIVJN0Yz1Y0/maxresdefault.jpg',
	id: '3'
}]
$scope.dish = dishes[$routeParams.id-1];
})
foodieApp.controller('moduleController',function($scope){
	$scope.dishes = [{
		name: 'Butter Chicken',
		image:'https://i.ytimg.com/vi/a03U45jFxOI/maxresdefault.jpg',
		category: 'Non-Veg',
		id: '1'
	},
{
	name: 'Egg Curry',
	image:  'http://www.arusuvai.com/sites/default/files/howto/2015/10/Fish-Curry.jpg',
	category: 'Non-Veg',
	id: '2'
},
{
	name: 'Samosa',
	image: 'https://i.ytimg.com/vi/iIVJN0Yz1Y0/maxresdefault.jpg',
  category: 'Snacks',
	id: '3'
}]

})
