// ---------------------start second container 
let secondBtns = document.querySelectorAll(".seond-btn");

secondBtns.forEach((secondBtn) => {
    secondBtn.addEventListener("click", function(e) {
        e.preventDefault();
        window.location.href = "./thirdsignup.html";
    })
});
// ---------------------end second container