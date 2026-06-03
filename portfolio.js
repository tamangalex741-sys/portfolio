
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close menu when link clicked
document.querySelectorAll(".nav-link a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});
function changeText() {
           let a= document.querySelector(".p-two");
		  a.style.color="green";
        }
		function conformMsg(){
		confirm("Your name is correct");
		}
