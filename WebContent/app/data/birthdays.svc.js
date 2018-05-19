(function () {

    var birthdays = [new Birthday(new Date(1999, 7, 20), "john doe", "partner", "nice")];

    angular.module("app.data").factory("birthdaySvc", function () {
        return {
            addBirthday: addToList,
            getBirthdays: getBirthdays,
            deleteBirthday: deleteFromList,
            editBirthday: replaceBirthday, 
            getId: getBirthdayById
        };

        function addToList(birthday) {
            birthdays.push(birthday);
        }

        function getBirthdays() {
            return birthdays;
        }

        function deleteFromList(id) {
            for (var i = 0; i < birthdays.length; i++) {
                if (birthdays[i].id == id) {
                    birthdays.splice(i, 1);
                }
            }
        }

        function replaceBirthday(id, birthday) {
            for (var i = 0; i < birthdays.length; i++) {
                if (birthdays[i].id == id) {
                    birthdays.splice(i, 1, birthday);
                }
            }
        }

        function getBirthdayById(id){
            for(var i=0;i<birthdays.length;i++){
                if(birthdays[i].id==id){
                    return birthdays[i];
                }
            }
        }
    });
})();