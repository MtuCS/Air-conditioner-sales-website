$(document).ready(function() {
    var userDataString = localStorage.getItem('userData');
    if (userDataString) {
        var userData = JSON.parse(userDataString);
        var username = userData.name;
        $('.user-account .username').text(username);
    }
});
