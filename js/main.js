/* =========================================================
   MON CHÈRIE BEAUTY
   Main JavaScript
   ========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const header = document.querySelector("header");
    const nav = document.querySelector("nav");

    if (header && nav) {

        // Create mobile menu button
        const menuButton = document.createElement("button");

        menuButton.classList.add("menu-toggle");

        menuButton.setAttribute("aria-label", "Open navigation menu");

        menuButton.innerHTML = "☰";

        header.querySelector(".container").appendChild(menuButton);


        // Toggle menu
        menuButton.addEventListener("click", function () {

            nav.classList.toggle("nav-open");

            if (nav.classList.contains("nav-open")) {

                menuButton.innerHTML = "✕";
                menuButton.setAttribute(
                    "aria-label",
                    "Close navigation menu"
                );

            } else {

                menuButton.innerHTML = "☰";
                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        });


        // Close menu after clicking a link
        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("nav-open");

                menuButton.innerHTML = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });

    }



    /* =====================================================
       SMOOTH SCROLLING
       ===================================================== */

    const anchorLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });



    /* =====================================================
       IMAGE CAROUSEL
       ===================================================== */

    const carousel = document.querySelector(".carousel");

    if (carousel) {

        // Find all carousel slides
        const slides =
            carousel.querySelectorAll(".carousel-slide");


        // IMPORTANT:
        // The dots are outside the .carousel element in your HTML,
        // so we search for them from the whole document.
        const dots =
            document.querySelectorAll(".carousel-dots .dot");


        // Find Previous button
        const prevButton =
            carousel.querySelector(".carousel-btn.prev");


        // Find Next button
        const nextButton =
            carousel.querySelector(".carousel-btn.next");


        // Keep track of which image is currently displayed
        let currentSlide = 0;



        /* =================================================
           SHOW A PARTICULAR SLIDE
           ================================================= */

        function showSlide(index) {

            // Make sure the requested slide exists
            if (slides.length === 0) {
                return;
            }


            // Remove active class from every slide
            slides.forEach(function (slide) {

                slide.classList.remove("active");

            });


            // Remove active class from every dot
            dots.forEach(function (dot) {

                dot.classList.remove("active");

            });


            // Add active class to selected slide
            slides[index].classList.add("active");


            // Add active class to selected dot
            if (dots[index]) {

                dots[index].classList.add("active");

            }


            // Update current slide
            currentSlide = index;

        }



        /* =================================================
           NEXT BUTTON
           ================================================= */

        if (nextButton) {

            nextButton.addEventListener("click", function () {

                let nextSlide = currentSlide + 1;


                // If we're at the last image,
                // go back to the first image
                if (nextSlide >= slides.length) {

                    nextSlide = 0;

                }


                showSlide(nextSlide);

            });

        }



        /* =================================================
           PREVIOUS BUTTON
           ================================================= */

        if (prevButton) {

            prevButton.addEventListener("click", function () {

                let previousSlide = currentSlide - 1;


                // If we're at the first image,
                // go to the last image
                if (previousSlide < 0) {

                    previousSlide = slides.length - 1;

                }


                showSlide(previousSlide);

            });

        }



        /* =================================================
           CAROUSEL DOTS
           ================================================= */

        dots.forEach(function (dot, index) {

            dot.addEventListener("click", function () {

                showSlide(index);

            });

        });



        /* =================================================
           INITIALISE CAROUSEL
           ================================================= */

        // Make sure the first slide and first dot
        // are active when the page loads.
        showSlide(0);

    }



    /* =====================================================
       SCROLL REVEAL ANIMATIONS
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".hero, .offer, .about, .services, .service-category, .opening-hours, .contact"
    );


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.05
            }
        );


        revealElements.forEach(function (element) {

            element.classList.add("reveal");

            observer.observe(element);

        });

    }



    /* =====================================================
       ACTIVE NAVIGATION PAGE
       ===================================================== */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";


    const navLinks = document.querySelectorAll("nav a");


    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href").split("/").pop();


        if (
            linkPage === currentPage &&
            !link.getAttribute("href").includes("#")
        ) {

            link.classList.add("active");

        }

    });



    /* =====================================================
       BACK TO TOP BUTTON
       ===================================================== */

    const backToTop = document.createElement("button");

    backToTop.classList.add("back-to-top");

    backToTop.innerHTML = "↑";

    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );

    document.body.appendChild(backToTop);


    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });



    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const yearElements =
        document.querySelectorAll(".current-year");


    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });



});