(function () {
	var name = "app",
		requires = [
			"app.shell",
			"app.birthdays",
			"app.data",
			"app.component",
			"app.add", 
			"app.edit"
		];

	angular.module(name, requires);
})();