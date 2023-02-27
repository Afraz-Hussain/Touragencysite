let openBtn=document.getElementById('openbtn');
let closeBtn=document.getElementById('closebtn');
let navbar=document.getElementById('navbar');


openBtn.addEventListener("click",()=>{
openBtn.classList.toggle("hide");
closeBtn.classList.toggle("hide");
navbar.classList.toggle("hide");
});

closeBtn.addEventListener("click",()=>{
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    navbar.classList.toggle("hide");
    });
    