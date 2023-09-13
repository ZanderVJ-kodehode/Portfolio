// let menu = document.querySelector("#menu-icon")
// let navbar = document.querySelector(".navbar")


// menu.onclick = () =>{
//     menu.classList.toggle("bx-x")
//     navbar.classList.toggle("open")
// };

const back = ScrollReveal ({
    distance: "40px",
    duration: 2500,
    reset: false,
});

back.reveal(".logo",{delay:100, origin: "left"});
back.reveal(".navbar",{delay:100, origin: "right"});

const stay = ScrollReveal ({
    distance: "40px",
    duration: 2500,
    reset: false
});


stay.reveal(".home-text span",{delay:400, origin: "top"});
stay.reveal(".home-text h1",{delay:500, origin: "left"});
stay.reveal(".home-text p",{delay:600, origin: "right"});
stay.reveal(".main-btn",{delay:700, origin: "left"});
stay.reveal(".home-img",{delay:700, origin: "right"});




// stay.reveal("#scrollToTop",{delay:400, origin: "top"});














/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////contackt me///////////////////////////////////////////////////////////////////////// */


























/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////scroll///////////////////////////////////////////////////////////////////////// */






    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Remove the "#" symbol
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                let offset = 0; // Default offset

                // Define special offsets for specific sections
                if (targetId === 'about-me') {
                    offset = 10; // Adjust as needed
                } else if (targetId === 'my-knowledge') {
                    offset = 150; // Adjust as needed
                } else if (targetId === 'My-projects') {
                    offset = 0; // Adjust as needed
                } else if (targetId === 'Contact-me') {
                    offset = 0; // Adjust as needed
                }

                window.scrollTo({
                    top: targetElement.offsetTop - offset, // Apply the offset
                    behavior: 'smooth'
                });
            }
        });
    });











    document.addEventListener('DOMContentLoaded', function() {
        stay.reveal("#scrollToTop", {delay: 400, origin: "top"});
        
        // Add your existing JavaScript code here
        document.getElementById('scrollToTop').addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        var scrollToTopBtn = document.getElementById('scrollToTop');
        scrollToTopBtn.style.display = 'none';
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });
    });