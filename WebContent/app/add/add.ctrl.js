(function () {
    angular.module("app.add").controller("Add", function ($scope, $location, birthdaySvc) {
        
        $scope.$on("addBirthday", addBirthday);

        function addBirthday(event, args) {
            var birthday = new Birthday(args.date, args.name, args.relationship, args.greeting);
            birthdaySvc.addBirthday(birthday);
            $location.path("/birthdays");
        }
    });
})();