// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Particle JS
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        color: { value: "#00f5ff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: { enable: true, speed: 2 }
    }
});

// Typing Effect
const typingText = document.querySelector(".typing");
const words = ["Full Stack Developer", "UI Designer", "Creative Coder"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
    currentWord = words[i];
    if (!isDeleting) {
        typingText.textContent = currentWord.slice(0, ++j);
        if (j === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        typingText.textContent = currentWord.slice(0, --j);
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Project Filtering
const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        projects.forEach(project => {
            project.style.display =
                filter === "all" || project.classList.contains(filter)
                ? "block"
                : "none";
        });
    });
});

// certificate
const certificateBtn = document.getElementById("certificateBtn");
const certificateSection = document.getElementById("certificates");

certificateBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (certificateSection.style.display === "none" || certificateSection.style.display === "") {
        certificateSection.style.display = "block";
        certificateSection.scrollIntoView({ behavior: "smooth" });
    } else {
        certificateSection.style.display = "none";
    }
});