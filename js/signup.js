// start first container
document.getElementById("first-btn").addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(".firstcontainer").classList.remove("active");
    document.querySelector(".secondcontainer").classList.add("active");
});
// end first container

// start second container 
let secondBtns = document.querySelectorAll(".seond-btn");

secondBtns.forEach((secondBtn) => {
    secondBtn.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(".secondcontainer").classList.remove("active");
        document.querySelector(".thirdcontainer").classList.add("active");
    })
});
// end second container


// start third conainer 
document.querySelector(".third-btn").addEventListener("click", function(e) {
    e.preventDefault();
    window.location.href = "./profile.html";
});
// end third container