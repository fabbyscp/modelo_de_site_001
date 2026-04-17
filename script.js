const revealElements = document.querySelectorAll(
  ".hero-copy, .hero-card, .metrics, .section, .highlight, .contact .section-heading, .contact-form"
);

revealElements.forEach((element) => {
  element.setAttribute("data-reveal", "");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealElements.forEach((element) => observer.observe(element));

const form = document.querySelector(".contact-form");
const feedback = document.querySelector(".form-feedback");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  feedback.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  form.reset();
});
