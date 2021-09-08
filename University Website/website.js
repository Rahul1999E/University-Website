let navLinks = document.getElementById('navLinks');
let menu_bar = document.getElementById("bars");
let close_menu = document.getElementById("close");

close_menu.addEventListener("click",()=>{

    navLinks.style.right="-300";
})

menu_bar.addEventListener("click",()=>{
    navLinks.style.right="0";
    
})