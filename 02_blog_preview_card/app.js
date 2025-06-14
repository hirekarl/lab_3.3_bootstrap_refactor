const rootElement = document.documentElement;

rootElement.classList.add("hidden");

document.addEventListener("DOMContentLoaded", () => {
    rootElement.classList.remove("hidden");
});
