/////// counter
    document.addEventListener("DOMContentLoaded", function () {
        const counters = document.querySelectorAll(".counter");

        counters.forEach(counter => {
            let target = +counter.getAttribute("data-target");
            let count = 0;
            let increment = target / 100; // Adjust speed

            function updateCounter() {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.floor(count);
                    setTimeout(updateCounter, 70); // Adjust delay for smoothness
                } else {
                    counter.innerText = target;
                }
            }

            updateCounter();
        });
    });

// /////////nav back-ground 
window.onscroll = function() {
    const navbar = document.getElementsByClassName('navbar')[0];
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
///////// add animation when reaching a div
document.addEventListener("DOMContentLoaded", function () {
    let target1 = document.querySelector("#con3");
    let target2=document.querySelector("#con2");

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                target1.classList.add("fade-in-right");// Add animation class
                target2.classList.add("fade-in-left");// Add animation class
                
            } else {
                target1.classList.remove("fade-in-right"); // Remove if needed
                target2.classList.remove("fade-in-left"); // Remove if needed



            }
        });
    }, { threshold: 0.5 });

    observer.observe(target1);
});