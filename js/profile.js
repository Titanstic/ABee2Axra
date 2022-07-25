let jobCards = document.querySelectorAll(".job-card");
let profileModal = document.querySelector('.profile-modal');

jobCards.forEach((jobCard) => {
    jobCard.addEventListener("click", function(e) {
        console.log(e);
        window.location.href = "./jobpost.html";
    })
});


document.getElementById("edirprofile").addEventListener("click", function(e) {
    e.preventDefault();
    profileModal.classList.add("active");
    document.querySelector("body").classList.add("active");
});

document.querySelector(".close-modal").addEventListener("click", function() {
    profileModal.classList.remove("active");
    document.querySelector("body").classList.remove("active");
});