var picture = document.querySelectorAll('.picture');
var loggedIn:boolean = false;

 picture.forEach((e)=>{
    e.addEventListener('click', ()=>{
        if(e.classList[0].toString() === "visitors")
            location.href = "../visitors.html";
        else
        {
             location.href = "../students.html";
        }
    });
});