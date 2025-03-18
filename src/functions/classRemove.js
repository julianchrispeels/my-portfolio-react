export default function classRemove() {
    /* Body */
    document.body.classList.remove("dark-mode");

    /* 404 */
    if (document.getElementById("back-button")) { document.getElementById("back-button").classList.remove("not-found-button-dark") }
    if (document.getElementById("not-found-container")) { document.getElementById("not-found-container").classList.remove("not-found-container-dark") }

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
    const projectBoxes = document.getElementsByClassName("project-box");
    for (let i = 0; i < projectBoxes.length; i++) {
        projectBoxes[i].classList.remove("project-box-dark");
    }

    /* Skills */
    if (document.getElementById("skills")) { document.getElementById("skills").classList.remove("section-dark") }
    if (document.getElementById("hard-skills")) { document.getElementById("hard-skills").classList.remove("skills-boxes-dark") }
    if (document.getElementById("soft-skills")) { document.getElementById("soft-skills").classList.remove("skills-boxes-dark") }
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
    if (document.getElementById("about-github-icon")) { document.getElementById("about-github-icon").classList.remove("about-github-icon-dark") }
    if (document.getElementById("github")) { document.getElementById("github").classList.remove("github-dark") }

    /* Footer */
    if (document.getElementById("footer")) { document.getElementById("footer").classList.remove("footer-dark") }

    return;
}