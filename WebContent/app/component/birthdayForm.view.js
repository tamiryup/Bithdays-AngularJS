(function () {

    angular.module("app.component")
        .directive("tmBirthdayForm", function () {
            return {
                templateUrl: "app/component/birthdayForm.html",
                controller: birthdayFormCntrl
            };
        });

    function birthdayFormCntrl($scope, $location, $routeParams, birthdaySvc) {
        $scope.date = null;
        $scope.name = "";
        $scope.greeting = "";
        $scope.relationship = null;
        $scope.buttonTitle = "Add Birthday";

        var event = "addBirthday";
        var birthday = null;

        function loadBirthday() {
            if ($routeParams.id == null) {
                return
            }
            birthday = birthdaySvc.getId($routeParams.id);
            if (birthday != null) {
                $scope.date = birthday.date;
                $scope.name = birthday.name;
                $scope.greeting = birthday.greeting;
                $scope.relationship = birthday.relationship;
                $scope.buttonTitle = "Update Birthday";
                event = "editBirthday";
            } else {
                console.log("no such id");
                $location.path("/birthdays");
            }
        }

        loadBirthday();

        $scope.triggerEvent = function () {
            if ($scope.date == null || $scope.name == "" ||
                $scope.greeting == "" || $scope.relationship == null) {
                return;
            }
            $scope.$emit(event, {
                date: $scope.date,
                name: $scope.name,
                greeting: $scope.greeting,
                relationship: $scope.relationship
            });
        }

        $scope.back = function () {
            $location.path("/birthdays");
        }

    }
})();