// Toggle  & Responsive Menu
const navSlide = () => {
    const burger = document.querySelector(".burger-menu")
    const navlists = document.querySelector("nav")

    burger.addEventListener("click", () =>{
        navlists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}