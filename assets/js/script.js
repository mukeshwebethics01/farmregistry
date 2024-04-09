const hamburger = document.querySelector(".hamburger")
const sidebarBody = document.querySelector(".sidebar-body")
const mobiletoggle = document.querySelector(".mobile-toggle")
// const datepicker = document.querySelector("#datepicker")

hamburger.addEventListener("click", () => {
    sidebarBody.classList.toggle("sidebar-toggle")
    console.log("clicking")

})

mobiletoggle.addEventListener("click", () => {
    sidebarBody.classList.toggle("sidebar-toggle")
    console.log("clicking")
})





// $(function () {
//     $('#datepicker').datepicker();
//     console.log("input clicked")
// });



// document.addEventListener("DOMContentLoaded", function () {

//     var datepicker = document.getElementById('datepicker');
//     datepicker.addEventListener('click', function () {
//         console.log("input clicked");
//     });

// });