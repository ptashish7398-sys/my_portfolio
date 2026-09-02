// ================= TYPING EFFECT =================

const text = "Full Stack Developer";
const typingElement = document.querySelector(".home h2");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

// Remove original text before starting
if (typingElement) {
    typingElement.textContent = "";
    typeEffect();
}


// ================= SMOOTH SCROLL =================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {

            event.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });

});


// ================= ACTIVE NAVBAR =================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".about, .skills, .projects, .education, .contact, .card, .project"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================= CONTACT FORM =================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector(
            'input[placeholder="Your Name"]'
        ).value.trim();

        const email = document.querySelector(
            'input[placeholder="Email"]'
        ).value.trim();

        const subject = document.querySelector(
            'input[placeholder="Subject"]'
        ).value.trim();

        const message = document.querySelector(
            "textarea"
        ).value.trim();


        if (name === "" || email === "" || subject === "" || message === "") {

            alert("Please fill all the fields.");

            return;
        }


        // Simple email validation

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;
        }


        alert("Thank you, " + name + "! Your message has been submitted.");

        form.reset();

    });

}


// ================= RESUME BUTTON =================

const resumeButton = document.querySelector(
    '.buttons a[href="#"]'
);

if (resumeButton) {

    resumeButton.addEventListener("click", function (event) {

        event.preventDefault();

        // Change "resume.pdf" to your actual resume file name

        const resumeFile = "resume.pdf";

        const link = document.createElement("a");

        link.href = resumeFile;
        link.download = "Ashish_Resume.pdf";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

    });

}


// ================= CURRENT YEAR =================

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Ashish | All Rights Reserved.`;

}