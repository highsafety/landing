document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const popup = document.getElementById("thank-you-popup");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          popup.style.display = "block";
        } else {
          alert(
            "Hubo un error al enviar el mensaje. Por favor, intentá nuevamente."
          );
        }
      })
      .catch(() => {
        alert("Error de conexión. Verificá tu red.");
      });
  });
});

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  if (scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
