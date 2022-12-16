function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
}

const process = document.querySelector("#process");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        let oldScroll = window.scrollY;
        let elePos =  window.scrollY - getOffset(entry.target).top;
        console.log( window.scrollY - getOffset(process).top);
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
            if(elePos <0){
                entry.target.classList.add("hiddenDown")
                entry.target.classList.remove("hiddenUp");

            }else{
                entry.target.classList.add("hiddenUp")
                entry.target.classList.remove("hiddenDown");
            }
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