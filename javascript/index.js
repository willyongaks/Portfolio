const burger = document.querySelector(".humberger_menu");
const navLinks = document.querySelectorAll(".nav_links")


burger.addEventListener("click", () => {
    document.body.classList.toggle("open")

    console.log("got yah!!")
});

navLinks.forEach(links =>{
    links.addEventListener("click", () => {
        document.body.classList.remove("open")
    });
});