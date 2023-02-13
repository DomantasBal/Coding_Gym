const navContainer = document.getElementById ("nav-container");
const burger = document.getElementById ("burger");



let countClicks = 0;
burger.addEventListener("click", ()=>{
    countClicks++;
    navContainer.style.height = countClicks % 2 === 1 ? "100vh" : "60px";
    
})