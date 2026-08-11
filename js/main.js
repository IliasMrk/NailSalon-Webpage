
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
       SCROLL REVEAL ANIMATIONS
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".hero, .offer, .about, .services, .service-category, .booking, .opening-hours, .contact"
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
                threshold: 0.12
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
```
