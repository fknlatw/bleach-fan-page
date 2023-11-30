const menuButton = document.querySelector(".menu-button");
const sections = document.querySelector(".sections");
const tabs = document.querySelectorAll(".tab-head");
const tabContent = document.querySelectorAll(".tab-content");
const year = document.querySelector(".year");
const header = document.querySelector(".header");
let today = new Date();

menuButton.addEventListener("click", () => {
    sections.classList.toggle("active");
});

tabs.forEach( (tab)=> {
    tab.addEventListener("click", (e) => {
        e.preventDefault();
        currentTab = e.target;
        currentContent = currentTab.parentNode.parentNode.children[1];
        currentContent.classList.toggle("active");
    })
});

year.innerHTML = `${today.getFullYear()} year`;

window.onscroll = (e) => {
    let headerScroll = window.scrollY;
    headerHeight = header.offsetHeight;
    if( headerScroll >= headerHeight){
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}