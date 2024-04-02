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