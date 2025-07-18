// Helper for random integers
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create floating animated boba balls background
function createBobaBalls(num) {
  const container = document.getElementById("boba-background");

  for (let i = 0; i < num; i++) {
    const ball = document.createElement("div");
    ball.classList.add("boba-ball");
    const size = randomInt(25, 65);
    ball.style.width = size + "px";
    ball.style.height = size + "px";

    ball.style.left = randomInt(0, 100) + "vw";
    ball.style.top = randomInt(0, 100) + "vh";

    const duration = randomInt(22, 40);
    const delay = randomInt(0, 40);
    ball.style.animation = `floatUp ${duration}s linear infinite`;
    ball.style.animationDelay = `${delay}s`;

    container.appendChild(ball);
  }
}

// Append floatUp keyframe animation to head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes floatUp {
  0% { transform: translateY(0); opacity: 0.7; }
  50% { opacity: 1; }
  100% { transform: translateY(-120vh); opacity: 0; }
}
`;
document.head.appendChild(styleSheet);

// Page navigation and smooth transitions
document.addEventListener("DOMContentLoaded", () => {
  createBobaBalls(22);

  const navItems = document.querySelectorAll(".boba-nav li");
  const pages = document.querySelectorAll(".page");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      const targetId = item.getAttribute("data-target");

      pages.forEach((page) => {
        if (page.id === targetId) {
          page.classList.add("visible");
        } else {
          page.classList.remove("visible");
        }
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});