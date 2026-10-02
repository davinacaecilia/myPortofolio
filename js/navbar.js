function initNavbar() {

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.querySelector(".nav-links");


    if (!menuToggle || !navLinks) {
        return;
    }


    menuToggle.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle("show");

        }
    );


    navLinks.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove("show");

                }
            );

        });


    const sections =
        document.querySelectorAll("main > div[id]");


    window.addEventListener(
        "scroll",
        () => {

            let current = "";


            sections.forEach(section => {

                const sectionTop =
                    section.offsetTop;

                if (
                    window.scrollY >=
                    sectionTop - 200
                ) {

                    current =
                        section.getAttribute("id");

                }

            });


            navLinks
                .querySelectorAll("a")
                .forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        `#${current}`
                    ) {

                        link.classList.add("active");

                    }

                });

        }
    );

}