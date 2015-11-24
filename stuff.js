var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'HomeController'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'templates/about.html',
			controller: 'AboutController'
		})
		.state('portfolio', {
			url: '/portfolio',
			templateUrl: 'templates/portfolio.html',
			controller: 'PortfolioController'
		})
		.state('resume', {
			url:'/resume',
			templateUrl: 'templates/resume.html',
			controller: 'ResumeController'
		})
});

myApp.controller('HomeController', function($scope) {
	$scope.home = "img/home.jpg";
})

myApp.controller('AboutController', function($scope) {
	$scope.url = "img/about.jpg";
	$scope.aboutText = "Hello, my name is Tabitha Kim and my passion includes project management, development, and design. I am currently a junior at the University of Washington in Seattle pursuing a degree in Informatics and/or Health Informatics. I have always been a tech freak and I am always amazed how technology has revolutionized the world in almost every aspect.";
	$scope.hobbies = "Hobbies: Playing with my bunnies, dancing, cooking, drinking coffee, working out, design, eating, and traveling."; 
})

myApp.controller('PortfolioController', function($scope, $http) {
	$http.get("./data/projects.json").then(function(d) {
		$scope.data = d.data;
		console.log($scope.data);
	})
})

myApp.controller('ResumeController', function($scope) {
	$scope.resume = "img/resume.png";
})