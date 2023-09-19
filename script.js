// let menu = document.querySelector("#menu-icon")
// let navbar = document.querySelector(".navbar")


// menu.onclick = () =>{
//     menu.classList.toggle("bx-x")
//     navbar.classList.toggle("open")
// };

const back = ScrollReveal({
    distance: "40px",
    duration: 2500,
    reset: false,
});

const stay = ScrollReveal({
    distance: "40px",
    duration: 2500,
    reset: false,
});

back.reveal("h3", {delay: 100, origin: "top"});

back.reveal(".logo",{delay:100, origin: "left"});
back.reveal(".navbar",{delay:100, origin: "right"});


stay.reveal(".home-text span",{delay:400, origin: "top"});
stay.reveal(".home-text h1",{delay:500, origin: "left"});
stay.reveal(".home-text p",{delay:600, origin: "right"});
stay.reveal(".main-btn",{delay:700, origin: "left"});
stay.reveal(".home-img",{delay:700, origin: "right"});

back.reveal(".about-me img", {delay: 300, origin: "right"});


stay.reveal(".grid-container",{delay:100, origin: "right"});
stay.reveal(".certification",{delay:100, origin: "left"});
stay.reveal(".my-projects-container",{delay:100, origin: "bottom"});
stay.reveal(".box",{delay:300, origin: "right"});
stay.reveal(".cm",{delay:100, origin: "left"});







/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////contackt me///////////////////////////////////////////////////////////////////////// */



































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












/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////button from norsk to english///////////////////////////////////////////////////////////////////////// */





   
    
    function toggleLanguage() {
        const button = document.getElementById('switch');
    
        if (button.innerText === 'English') {
            button.innerText = 'Norsk';
            setNorwegianText();
        } else {
            button.innerText = 'English';
            setOriginalText();
        }
    }
    
    function setNorwegianText() {
        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        
        elementsToTranslate.forEach(element => {
            const translatedText = element.innerText;
            element.innerText = element.dataset.translate;
            element.dataset.translate = translatedText;
        });
    }
    
    function setOriginalText() {
        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        
        elementsToTranslate.forEach(element => {
            const originalText = element.innerText;
            element.innerText = element.dataset.translate;
            element.dataset.translate = originalText;
        });
    }
    








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





if (window.matchMedia('(max-width: 1000px)').matches) {
    // The viewport is 768 pixels wide or less
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); // Remove the "#" symbol
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                let offset = 0; // Default offset

                // Define special offsets for specific sections
                if (targetId === 'about-me') {
                    offset = 220; // Adjust as needed
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
}
