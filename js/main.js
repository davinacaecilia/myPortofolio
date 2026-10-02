async function loadSection(id, file) {

    const element = document.getElementById(id);

    try {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}`);
        }

        const html = await response.text();

        element.innerHTML = html;

    } catch (error) {

        console.error(error);

    }

}


async function loadAllSections() {

    await loadSection("navbar", "sections/navbar.html");
    await loadSection("home", "sections/home.html");
    await loadSection("about", "sections/about.html");
    await loadSection("skills", "sections/skills.html");
    await loadSection("projects", "sections/projects.html");
    await loadSection("experience", "sections/experience.html");
    await loadSection("contact", "sections/contact.html");
    await loadSection("footer", "sections/footer.html");

    initProjects();
    initNavbar();
    initExperience();
    initReveal();

}

function initReveal() {

    const revealElements =
        document.querySelectorAll(".reveal");


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add("show");

                    }

                });

            },
            {
                threshold: 0.1
            }
        );


    revealElements.forEach(element => {

        observer.observe(element);

    });

}

loadAllSections();