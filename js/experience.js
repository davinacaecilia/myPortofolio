function initExperience() {

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxCaption =
        document.getElementById("lightboxCaption");


    window.openLightbox = function(image, caption) {

        lightboxImage.src = image;

        lightboxImage.alt = caption;

        lightboxCaption.textContent = caption;

        lightbox.classList.add("show");

        document.body.style.overflow = "hidden";

    };


    window.closeLightbox = function(event) {

        if (
            event &&
            event.target !== lightbox
        ) {
            return;
        }

        lightbox.classList.remove("show");

        document.body.style.overflow = "";

    };


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                lightbox.classList.contains("show")
            ) {

                closeLightbox();

            }

        }
    );

}