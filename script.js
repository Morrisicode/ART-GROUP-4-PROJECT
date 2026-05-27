document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const popup = document.getElementById("popup");
  const openPopupBtn = document.getElementById("openPopup");
  const cancelBtn = document.getElementById("cancelBtn");
  const confirmBtn = document.getElementById("confirmBtn");
  const form = document.getElementById("contactForm");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      const active = navLinks.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", active ? "true" : "false");
      hamburger.classList.toggle("active");
    });
  }

  if (form && popup) {
    form.addEventListener("submit", (event) => {
      if (popup.style.display !== "flex") {
        event.preventDefault();
        popup.style.display = "flex";
      }
    });
  }

  if (openPopupBtn && popup) {
    openPopupBtn.addEventListener("click", (event) => {
      event.preventDefault();
      popup.style.display = "flex";
    });
  }

  if (cancelBtn && popup) {
    cancelBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }

  if (confirmBtn && popup && form) {
    confirmBtn.addEventListener("click", () => {
      popup.style.display = "none";
      alert("Form Submitted Successfully");
      form.submit();
    });
  }

  if (window.AOS) {
    AOS.init({
      duration: 1000,
      easing: "ease",
    });
  }
});

window.showHideContent = function (trigger) {
  if (!trigger) return;
  const card = trigger.closest(".card");
  const content = card?.querySelector(".content");
  if (content) {
    content.classList.toggle("hide");
  }
};
