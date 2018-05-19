(function () {
	var name = "app.shell", requires = ["ngRoute"];

	angular.module(name, requires).config(function ($routeProvider) {
		$routeProvider.when("/birthdays", {
			templateUrl: "app/birthdays/birthdays.html",
			controller: "Birthdays"
		}).when("/add", {
			templateUrl: "app/add/add.html",
			controller: "Add"
		}).when("/edit/:id", {
			templateUrl: "app/edit/edit.html",
			controller: "Edit"
		}).otherwise({
			redirectTo: "/birthdays"
		});
	});
})();