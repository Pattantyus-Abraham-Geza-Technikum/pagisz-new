var picture = document.querySelectorAll('.picture');
var loggedIn = false;
picture.forEach(function (e) {
    e.addEventListener('click', function () {
        if (e.classList[0].toString() === "visitors")
            location.href = "../visitors.html";
        else {
            location.href = "../students.html";
        }
    });
});
