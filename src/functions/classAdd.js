export default function classAdd() {
    /* 404 */
    if (document.getElementById("back-button")) { document.getElementById("back-button").classList.add("not-found-button-dark") }
    if (document.getElementById("not-found-container")) { document.getElementById("not-found-container").classList.add("not-found-container-dark") }

    /* Main */
    if (document.getElementById("main-header")) { document.getElementById("main-header").classList.add("main-header-dark") }
    if (document.getElementById("main-button-lang")) { document.getElementById("main-button-lang").classList.add("main-button-dark") }
    if (document.getElementById("main-button-dlmode")) { document.getElementById("main-button-dlmode").classList.add("main-button-dark") }
    if (document.getElementById("main-content")) { document.getElementById("main-content").classList.add("main-content-dark") }
    if (document.getElementById("main-content-buttons")) { document.getElementById("main-content-buttons").classList.add("main-content-buttons-dark") }
    if (document.getElementById("linkedin-icon")) { document.getElementById("linkedin-icon").classList.add("linkedin-icon-dark") }
    if (document.getElementById("github-icon")) { document.getElementById("github-icon").classList.add("github-icon-dark") }
    if (document.getElementById("email-icon")) { document.getElementById("email-icon").classList.add("email-icon-dark") }

    /* My Projects */
    if (document.getElementById("projects")) { document.getElementById("projects").classList.add("section-dark") }
    if (document.getElementById("coffee-blog")) { document.getElementById("coffee-blog").classList.add("coffee-blog-dark") }

    /* Skills */
    if (document.getElementById("skills")) { document.getElementById("skills").classList.add("section-dark") }
    if (document.getElementsByClassName("skills-boxes")) {
        document.getElementsByClassName("skills-boxes")[0].classList.add("skills-boxes-dark");
        document.getElementsByClassName("skills-boxes")[1].classList.add("skills-boxes-dark");
    }
    const boxes = document.getElementsByClassName("skills-box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.add("skills-box-dark");
    }

    /* About Me */
    if (document.getElementById("about")) { document.getElementById("about").classList.add("section-dark") }
    const containers = document.getElementsByClassName("about-container");
    for (let i = 0; i < containers.length; i++) {
        containers[i].classList.add("about-container-dark");
    }
    const buttons = document.getElementsByClassName("contact-content");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("contact-content-dark");
    }
    if (document.getElementsByClassName("about-github-icon")) { document.getElementsByClassName("about-github-icon")[0].classList.add("about-github-icon-dark") }
    if (document.getElementsByClassName("github")) { document.getElementsByClassName("github")[0].classList.add("github-dark") }

    /* Footer */
    if (document.getElementById("footer")) { document.getElementById("footer").classList.add("footer-dark") }

    return;
}