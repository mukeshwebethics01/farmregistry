const hamburger = document.querySelector(".hamburger")
const sidebarBody = document.querySelector(".sidebar-body")
const mobiletoggle = document.querySelector(".mobile-toggle")
hamburger.addEventListener("click", () => {
    sidebarBody.classList.toggle("sidebar-toggle")
    console.log("clicking")

})

mobiletoggle.addEventListener("click", () => {
    sidebarBody.classList.toggle("sidebar-toggle")
    console.log("clicking")
})




// const sidebar = document.querySelector('.sidebar-bodyr');

// function openSidebar() {
//     sidebar.classList.add('slideXanimation');
//     sidebar.style.transform = 'scaleX(1)';
// }

// function closeSidebar() {
//     sidebar.classList.add('slideXanimation');
//     sidebar.style.transform = 'scaleX(0)';
//     setTimeout(() => {
//         sidebar.style.display = 'none';     // Hide sidebar after animation completes
//     }, 500);   //     Adjust this value to match the animation duration
// }