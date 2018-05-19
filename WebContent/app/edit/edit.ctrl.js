(function () {

    angular.module("app.edit").controller("Edit", function ($scope, $location, $routeParams, birthdaySvc) {

        $scope.$on("editBirthday", updateBirthday);

        function updateBirthday(event, args) {
            var birthday = new Birthday(args.date, args.name, args.relationship, args.greeting);
            birthdaySvc.editBirthday($routeParams.id, birthday);
            $location.path("/birthdays");
        }
    });
})();