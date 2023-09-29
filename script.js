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

// back.reveal(".logo",{delay:100, origin: "left"});
// back.reveal(".navbar",{delay:100, origin: "right"});


stay.reveal(".home-text span",{delay:200, origin: "top"});
stay.reveal(".home-text h1",{delay:300, origin: "left"});
stay.reveal(".home-text p",{delay:300, origin: "right"});
stay.reveal(".main-btn",{delay:400, origin: "left"});
stay.reveal(".home-img",{delay:400, origin: "right"});

back.reveal(".about-me img", {delay: 300, origin: "right"});


stay.reveal(".grid-container",{delay:100, origin: "right"});
stay.reveal(".certification",{delay:100, origin: "left"});
stay.reveal(".my-projects-container",{delay:100, origin: "bottom"});
stay.reveal(".box",{delay:300, origin: "right"});
stay.reveal(".cm",{delay:100, origin: "left"});







/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////contackt me///////////////////////////////////////////////////////////////////////// */

















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
///////////////////////////////////////////////////////makingthe scroll event for the navbar///////////////////////////////////////////////////////////////////////// */



window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});

















/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////scroll///////////////////////////////////////////////////////////////////////// */







// button to top


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













// for navbaren og logoen



function getDynamicOffset(targetId) {
    const height = window.innerHeight;

    // Default offset for "My-projects" and "my-knowledge" in full screen
    if ((targetId === "My-projects" || targetId === "my-knowledge") && height > 630) {
        return 20;
    }

    let offset;
    switch (targetId) {
        case "My-projects":
        case "my-knowledge":
            offset = 30;
            break;
        case "Contact-me":
            if (height <= 500) {
                offset = 100;
            } else if (height <= 580) {
                offset = 30;
            } else {
                offset = 0; // Default for other heights
            }
            break;
        case "about-me":
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const contentHeight = targetElement.offsetHeight; // The height of the "about-me" content
                offset = (height - contentHeight) / 2; // Centering "about-me" vertically on the screen
            } else {
                offset = 0;
            }
            break;
        default:
            offset = 0; // Default offset
            break;
    }
    return offset;
}




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetHref = this.getAttribute('href');
        
        if (targetHref === "#") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const targetId = targetHref.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = getDynamicOffset(targetId);
            const rect = targetElement.getBoundingClientRect();
            const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
            const targetPosition = rect.top + currentScrollPos - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});




































































// function getDynamicOffset(targetId) {
//     const height = window.innerHeight;
    
//     // Default offset for "My-projects" in full screen
//     if (targetId === "My-projects" && height > 630) {
//         return 20;
//     }

//     // Dynamic offsets for other cases
//     let offset;
//     switch (targetId) {
//         case "My-projects":
//             offset = 30;
//             break;
//         case "Contact-me":
//             if (height <= 500) {
//                 offset = 100;
//             } else if (height <= 580) {
//                 offset = 30;
//             } else {
//                 offset = 0; // Default for other heights
//             }
//             break;
//         case "my-knowledge":
//             if (height <= 500) {
//                 offset = 150;
//             } else if (height <= 550) {
//                 offset = 100;
//             } else if (height <= 630) {
//                 offset = 60;
//             } else {
//                 offset = 0; // Default for other heights
//             }
//             break;
//         case "about-me":
//             if (height <= 500) {
//                 offset = 130;
//             } else {
//                 offset = 50; // Default for other heights
//             }
//             break;
//         default:
//             offset = 0; // Default offset
//             break;
//     }
//     return offset;
// }






// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         const targetHref = this.getAttribute('href');
        
//         if (targetHref === "#") {
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth'
//             });
//             return;
//         }

//         const targetId = targetHref.substring(1);
//         const targetElement = document.getElementById(targetId);

//         if (targetElement) {
//             const offset = getDynamicOffset(targetId);
//             const rect = targetElement.getBoundingClientRect();
//             const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
//             const targetPosition = rect.top + currentScrollPos - offset;

//             window.scrollTo({
//                 top: targetPosition,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });







// // when max width is 800px

// if (window.matchMedia('(max-width: 800px)').matches) {

// document.querySelector('a[href="#about-me"]').addEventListener('click', function (e) {
//     e.preventDefault();
    
//     const targetElement = document.getElementById('about-me');
//     const offset = 0; 

//     if (targetElement) {
//         window.scrollTo({
//             top: targetElement.offsetTop - offset,
//             behavior: 'smooth'
//         });
//     }
// });


// document.querySelector('a[href="#My-projects"]').addEventListener('click', function (e) {
//     e.preventDefault();
    
//     const targetElement = document.getElementById('My-projects');
//     const offset = 0; 

//     if (targetElement) {
//         window.scrollTo({
//             top: targetElement.offsetTop - offset,
//             behavior: 'smooth'
//         });
//     }
// });
// }









