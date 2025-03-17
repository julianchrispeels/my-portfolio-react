export default function classRemove() {
    /* Main */
    if (document.getElementById("main-header")) { document.getElementById("main-header").classList.remove("main-header-dark") }
    if (document.getElementById("main-button-lang")) { document.getElementById("main-button-lang").classList.remove("main-button-dark") }
    if (document.getElementById("main-button-dlmode")) { document.getElementById("main-button-dlmode").classList.remove("main-button-dark") }
    if (document.getElementById("main-content")) { document.getElementById("main-content").classList.remove("main-content-dark") }
    if (document.getElementById("main-content-buttons")) { document.getElementById("main-content-buttons").classList.remove("main-content-buttons-dark") }
    if (document.getElementById("linkedin-icon")) { document.getElementById("linkedin-icon").classList.remove("linkedin-icon-dark") }
    if (document.getElementById("github-icon")) { document.getElementById("github-icon").classList.remove("github-icon-dark") }
    if (document.getElementById("email-icon")) { document.getElementById("email-icon").classList.remove("email-icon-dark") }

    /* My Projects */
    if (document.getElementById("projects")) { document.getElementById("projects").classList.remove("section-dark") }
    if (document.getElementById("coffee-blog")) { document.getElementById("coffee-blog").classList.remove("coffee-blog-dark") }

    /* Skills */
    if (document.getElementById("skills")) { document.getElementById("skills").classList.remove("section-dark") }
    if (document.getElementsByClassName("skills-boxes")) {
        document.getElementsByClassName("skills-boxes")[0].classList.remove("skills-boxes-dark");
        document.getElementsByClassName("skills-boxes")[1].classList.remove("skills-boxes-dark");
    }
    const boxes = document.getElementsByClassName("skills-box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("skills-box-dark");
    }

    /* About Me */
    if (document.getElementById("about")) { document.getElementById("about").classList.remove("section-dark") }
    const containers = document.getElementsByClassName("about-container");
    for (let i = 0; i < containers.length; i++) {
        containers[i].classList.remove("about-container-dark");
    }
    const buttons = document.getElementsByClassName("contact-content");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("contact-content-dark");
    }
    if (document.getElementsByClassName("about-github-icon")) { document.getElementsByClassName("about-github-icon")[0].classList.remove("about-github-icon-dark") }
    if (document.getElementsByClassName("github")) { document.getElementsByClassName("github")[0].classList.remove("github-dark") }

    /* Footer */
    if (document.getElementById("footer")) { document.getElementById("footer").classList.remove("footer-dark") }

    return;
}