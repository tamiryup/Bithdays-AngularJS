(function () {
	angular.module("app.birthdays").controller("Birthdays", function ($scope, $location, birthdaySvc) {

		$scope.birthdays = birthdaySvc.getBirthdays();

		$scope.redirectAdd = function (str) {
			$location.path("/add");
		}

		$scope.deleteBirthday = function (birthday) {
			birthdaySvc.deleteBirthday(birthday.id);
			$scope.birthdays = birthdaySvc.getBirthdays();
		}

		$scope.editBirthday = function (birthday) {
			$location.path("/edit/"+birthday.id);
		}
	});
})();

