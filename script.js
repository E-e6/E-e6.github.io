// Floating boba ball animation & page navigation with smooth transitions

// Generate random integer helper
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create animated boba balls in background
function createBobaBalls(num) {
  const container = document.getElementById("boba-background");

  for (let i = 0; i < num; i++) {
    const ball = document.createElement("div");
    ball.classList.add("boba-ball");
    const size = randomInt(20, 60);
    ball.style.width = size + "px";
    ball.style.height = size + "px";

    ball.style.left = randomInt(0, 100) + "vw";
    ball.style.top = randomInt(0, 100) + "vh";

    // Random animation duration and delay
    const duration = randomInt(20, 40);
    const delay = randomInt(0, 40);
    ball.style.animation = `floatUp ${duration}s linear infinite`;
    ball.style.animationDelay = `${delay}s`;

    container.appendChild(ball);
  }
}

// Animate floating up
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

// Page navigation and transitions
document.addEventListener("DOMContentLoaded", () => {
  createBobaBalls(20);

  const navItems = document.querySelectorAll(".boba-nav li");
  const pages = document.querySelectorAll(".page");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove active class from all nav icons
      navItems.forEach((i) => i.classList.remove("active"));
      // Add active to clicked
      item.classList.add("active");

      const targetId = item.getAttribute("data-target");

      // Show the target page, hide others with transition
      pages.forEach((page) => {
        if (page.id === targetId) {
          page.classList.add("visible");
        } else {
          page.classList.remove("visible");
        }
      });

      // Scroll to top on page change
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});