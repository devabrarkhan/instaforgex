// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      navLinks.classList.remove("open");
    }
  });
}

// Smooth scroll for nav links (extra control beyond CSS behavior)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").slice(1);
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    e.preventDefault();
    const offset = 80; // navbar height
    const rect = targetEl.getBoundingClientRect();
    const targetPos = window.scrollY + rect.top - offset;

    window.scrollTo({
      top: targetPos,
      behavior: "smooth",
    });
  });
});

// Scroll-triggered fade in / up effects (both directions)
const fadeSections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        // Remove visible when scrolling away so it animates again
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

fadeSections.forEach((section) => observer.observe(section));

// Touch feedback for shiny buttons and cards
function addTapFeedback(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    el.addEventListener(
      "touchstart",
      () => {
        el.classList.add("tapped");
      },
      { passive: true }
    );
    el.addEventListener("touchend", () => {
      setTimeout(() => el.classList.remove("tapped"), 180);
    });
  });
}

addTapFeedback(".btn");
addTapFeedback(".card");

// Optional: slight scale on tap
const style = document.createElement("style");
style.innerHTML = `
  .btn.tapped, .card.tapped {
    transform: scale(0.97);
  }
`;
document.head.appendChild(style);
const liquidBtn = document.getElementById('liquid-btn');
const form = document.querySelector('.contact-form');

liquidBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Shine animation
  liquidBtn.classList.add('flash');
  setTimeout(() => {
    liquidBtn.classList.remove('flash');
  }, 450);

  // Custom Event trigger
  const event = new Event('liquid-btn');
  form.dispatchEvent(event);
});

// WhatsApp Redirect Handler
form.addEventListener('liquid-btn', function (event) {
  event.preventDefault(); // Stop normal submit

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const whatsappNumber = "919583075623"; // Country code + Number

  const whatsAppMsg = `Hello Abrar, I'm ${name}, My mail ID is ${email}.%0AMy query is that, ${message}.%0APlease send me the final Form.`;
  const url = `https://wa.me/${whatsappNumber}?text=${whatsAppMsg}`;

  window.open(url, "_blank").focus();
});
  const btn = document.getElementById("blackGlassBtn");

    btn.addEventListener("click", () => {
      btn.classList.add("intense");

      setTimeout(() => {
        window.location.assign("#contact"); 
      }, 250);
    });
// Dynamic footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
