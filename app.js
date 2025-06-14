const rootElement = document.documentElement;

rootElement.classList.add("hidden");

const challengeOneCard = document.getElementById("challenge-1-card");
const challengeTwoCard = document.getElementById("challenge-2-card");

document.addEventListener("DOMContentLoaded", () => {
  rootElement.classList.remove("hidden");
  window.addEventListener("load", () => {
    challengeOneCard.addEventListener("click", () => {
      window.location.href = "./01_qr_code_component/index.html";
    });

    challengeTwoCard.addEventListener("click", () => {
      window.location.href = "./02_blog_preview_card/index.html";
    });
  });
});
