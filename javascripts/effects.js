    // let dot = document.getElementById("dot");
    // let herosection = document.querySelector(".aboutTextContainer");

    // herosection.addEventListener("mousemove", function(pappu) {
    //     dot.style.transition = ".1s";
    //     dot.style.opacity = 1;
    //     dot.style.left = pappu.x + "px";
    //     dot.style.top = pappu.y + "px";
    // })
    
    // herosection.addEventListener("mouseleave", function(pappu){
    //     dot.style.opacity = 0;

    // } ) 

    // GLOW EFFECT WHILE HOVERING


    function animateNumber(element, start, end, duration, callback) {
        let range = end - start;
        let current = start;
        let increment = range / (duration / 20); // 20ms per frame
        let interval = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(interval);
                element.style.textShadow = "none"; // Remove glow after animation
                if (callback) callback();
            }
            element.innerText = Math.floor(current);
        }, 20);
    }
    
    document.addEventListener("DOMContentLoaded", () => {
        const elements = [
            { selector: ".number150M span", end: 150 },
            { selector: ".number6 span", end: 6 },
            { selector: ".number456 span", end: 456 }
        ];
    
        elements.forEach(({ selector, end }) => {
            const el = document.querySelector(selector);
            animateNumber(el, 0, end, 1500);
        });
    });
    