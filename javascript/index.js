const burger = document.querySelector(".humberger_menu")


burger.addEventListener("click", () => {
    document.body.classList.toggle("open")

    console.log("got yah!!")
});