const sidebarIcon = document.querySelector(".sidebar-icon button");
const sidebar = document.querySelector(".sidebar");
const xIcon = document.querySelector(".sidebar button");

const body = document.querySelector("body");

sidebarIcon.onclick = function(){

sidebar.classList.add("active");
body.classList.add("overlay");

}

xIcon.onclick = function(){
    sidebar.classList.remove("active");
    body.classList.remove("overlay");
}

