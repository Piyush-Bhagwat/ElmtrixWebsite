const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    });
});


const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));


const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navLinks");
    const navLinks = document.querySelectorAll(".navLinks li");
    const body = document.querySelector('body');
    const htmlEL = document.querySelector('html');

    burger.addEventListener("click", () => {
        nav.classList.toggle("navigationActive");
        body.classList.toggle("stuck");
        htmlEL.classList.toggle("stuck");

        // Animate
        navLinks.forEach((links, index) => {
            if (links.style.animation) {
                links.style.animation = '';
            } else {
                links.style.animation = `navLinkFade 0.7s ease  forwards ${index/7 + 0.5}s`;
            }
        });

        //Burger Anim
        burger.classList.toggle('toggle');
    });  
}

navSlide();