// ---------------------start first container

// start password eye icon 
let passwordEyeSlash = document.querySelector(".passwordeyeslash"),
    passwordEye = document.querySelector(".passwordEye"),
    cpasswordEyeSlash = document.querySelector(".cpasswordeyeslash"),
    cpasswordEye = document.querySelector(".cpasswordEye");

let passowrdInput = document.getElementById("password"),
    confirmInput = document.getElementById("confrirm");

passwordEyeSlash.addEventListener("click", function() {
    this.classList.remove("active");
    passwordEye.classList.add("active");
    passowrdInput.type = "text";
});

passwordEye.addEventListener("click", function() {
    this.classList.remove("active");
    passwordEyeSlash.classList.add("active");
    passowrdInput.type = "password";
});

cpasswordEyeSlash.addEventListener("click", function() {
    this.classList.remove("active");
    cpasswordEye.classList.add("active");
    confirmInput.type = "text";
});

cpasswordEye.addEventListener("click", function() {
    this.classList.remove("active");
    cpasswordEyeSlash.classList.add("active");
    confirmInput.type = "password";
});

// end password eye icon 

document.getElementById("first-btn").addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(".firstcontainer").classList.remove("active");
    document.querySelector(".secondcontainer").classList.add("active");
});

// ---------------------end first container

// ---------------------start second container 
let secondBtns = document.querySelectorAll(".seond-btn");

secondBtns.forEach((secondBtn) => {
    secondBtn.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(".secondcontainer").classList.remove("active");
        document.querySelector(".thirdcontainer").classList.add("active");
    })
});
// ---------------------end second container


// ---------------------start third conainer 
document.querySelector(".third-btn").addEventListener("click", function(e) {
    e.preventDefault();
    window.location.href = "./profile.html";
});
// ---------------------end third container