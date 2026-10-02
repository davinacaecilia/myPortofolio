function initProjects() {
    const projectImageContent =
        document.getElementById("projectImageContent");

    const projectNumber =
        document.getElementById("projectNumber");

    const projectType =
        document.getElementById("projectType");

    const projectTitle =
        document.getElementById("projectTitle");

    const projectDescription =
        document.getElementById("projectDescription");

    const projectTags =
        document.getElementById("projectTags");

    const projectLink =
        document.getElementById("projectLink");

    const projectCounter =
        document.getElementById("projectCounter");

    const carouselDots =
        document.getElementById("carouselDots");

    const prevButton =
        document.getElementById("prevProject");

    const nextButton =
        document.getElementById("nextProject");

    const tabs =
        document.querySelectorAll(".project-tab");

    // Ambil elemen container kartu project untuk area swipe
    const projectDisplay =
        document.querySelector(".project-display");

    const projectData = {
        web: [
            {
                title: "BookScape",
                type: "WEB APPLICATION",
                description:
                    "Final group project for Advanced Web Programming class, a library and book management web application with authentication, book browsing, genres, ratings, cart, and checkout functionality.",
                tags: ["Laravel", "MySQL", "Blade"],
                link: "https://github.com/davinacaecilia/BookScape",
                image: "images/projects/pwl.png"
            },
            
            {
                title: "Healthseek",
                type: "WEB APPLICATION",
                description:
                    "Final group project for Semantic Web class, a web-based search system for hospital in North Sumatera, utilizing SPARQL queries and RDF data to provide accurate and relevant information.",
                tags: ["Laravel", "SPARQL", "RDF", "OWL"],
                link: "https://github.com/davinacaecilia/Medan_HealthSeek",
                image: "images/projects/healthseek.jpeg"
            },

            {
                title: "Rizhaqi Laundry Website",
                type: "WEB APPLICATION",
                description:
                    "Final group project for Database System Management class, a web application for managing laundry business operations, including customer management and order tracking.",
                tags: ["Laravel", "MySQL"],
                link: "https://github.com/davinacaecilia/rizhaqi_laundry",
                image: "images/projects/msbd.jpeg"
            }
        ],

        uiux: [
            {
                title: "My First UI/UX Project",
                type: "UI / UX DESIGN",
                description:
                    "My first attempt in UI/UX Design, made for my final project in Kelas Produktif HIMATIF UI/UX course, a simple mobile design for a streaming app.",
                tags: ["Figma", "UI Design", "Prototype"],
                link: "https://www.figma.com/proto/fkyEUQ79veEC1ETBce5uSu/TUGAS-AKHIR-UI-UX?node-id=6-3&t=krL9ItcDZC6A9tS7-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A3",
                image: "images/projects/uiux1.png"
            },

            {
                title: "Book Haven",
                type: "UI / UX DESIGN",
                description:
                    "Final project for UI/UX Pathway organized by Google Developer Groups on Campus Universitas Sumatera Utara, a web application design for a bookstore platform, later would be the basis for BookScape development.",
                tags: ["Figma", "UI Design", "Prototype"],
                link: "https://www.figma.com/proto/3fQWifUN2DKStBZEfUlZC2/Untitled?node-id=78-378&t=j2G4LPv82Pfp9EKr-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=78%3A378&show-proto-sidebar=1",
                image: "images/projects/uiux2.png"
            },

            {
                title: "Ditjen Yankes Dashboard Redesign",
                type: "UI / UX DESIGN",
                description:
                    "An assignment to redesign an existing website for Human-Computer Interaction Practicum, focusing on improving its usability and user experience.",
                tags: ["Figma", "UI Design", "UX"],
                link: "https://www.figma.com/proto/3y6W6fbCJMCzH0gfQcyHfN/Untitled?node-id=1-2&p=f&t=RrOnAYV4s5RL0EpX-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
                image: "images/projects/uiux3.png"
            },

            {
                title: "EcoPoint",
                type: "UI / UX DESIGN",
                description:
                    "Final group project for System Analysis and Design class, a desktop application design for reward-based waste management system on Universitas Sumatera Utara.",
                tags: ["Figma", "UI Design", "UX", "Prototype"],
                link: "https://www.figma.com/proto/gMAH3jb15puZjmKR0r3O87/EcoPoint?node-id=68-4&starting-point-node-id=179%3A740&t=wkOTdq0lK3BitwkS-1",
                image: "images/projects/uiux4.png"
            }
        ]
    };

    let currentCategory = "web";
    let currentProject = 0;

    function updateProject() {
        const projects =
            projectData[currentCategory];

        const project =
            projects[currentProject];

        projectTitle.textContent =
            project.title;

        projectType.textContent =
            project.type;

        projectDescription.textContent =
            project.description;

        projectLink.href =
            project.link;

        projectNumber.textContent =
            String(currentProject + 1)
                .padStart(2, "0");

        projectCounter.textContent =
            `${currentProject + 1} / ${projects.length}`;

        projectTags.innerHTML =
            project.tags
                .map(tag => `<span>${tag}</span>`)
                .join("");

        projectImageContent.src = project.image;
        projectImageContent.alt = project.title;

        updateDots();
    }

    function updateDots() {
        carouselDots.innerHTML = "";

        const projects =
            projectData[currentCategory];

        projects.forEach((_, index) => {
            const dot =
                document.createElement("button");

            dot.classList.add("carousel-dot");

            if (index === currentProject) {
                dot.classList.add("active");
            }

            dot.addEventListener(
                "click",
                () => {
                    currentProject = index;
                    updateProject();
                }
            );

            carouselDots.appendChild(dot);
        });
    }

    nextButton.addEventListener(
        "click",
        () => {
            const projects =
                projectData[currentCategory];

            currentProject =
                (currentProject + 1)
                % projects.length;

            updateProject();
        }
    );

    prevButton.addEventListener(
        "click",
        () => {
            const projects =
                projectData[currentCategory];

            currentProject =
                (currentProject - 1 + projects.length)
                % projects.length;

            updateProject();
        }
    );

    // --- FITUR SWIPE MOBILE ---
    let touchStartX = 0;
    let touchEndX = 0;

    if (projectDisplay) {
        projectDisplay.addEventListener(
            "touchstart",
            (e) => {
                touchStartX = e.changedTouches[0].clientX;
            },
            { passive: true }
        );

        projectDisplay.addEventListener(
            "touchend",
            (e) => {
                touchEndX = e.changedTouches[0].clientX;
                handleSwipe();
            },
            { passive: true }
        );
    }

    function handleSwipe() {
        const swipeDistance = touchStartX - touchEndX;
        const minSwipeThreshold = 40; // Batas minimal usapan jari (px)

        // Swipe ke Kiri -> Next
        if (swipeDistance > minSwipeThreshold) {
            nextButton.click();
        } 
        // Swipe ke Kanan -> Prev
        else if (swipeDistance < -minSwipeThreshold) {
            prevButton.click();
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener(
            "click",
            () => {
                tabs.forEach(item =>
                    item.classList.remove("active")
                );

                tab.classList.add("active");

                currentCategory =
                    tab.dataset.category;

                currentProject = 0;

                updateProject();
            }
        );
    });

    updateProject();
}