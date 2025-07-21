document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("servicios-list");

  fetch("assets/data/servicios.json")
    .then((res) => res.json())
    .then((services) => {
      services.forEach((service) => {
        const card = document.createElement("div");
        card.className = "servicio";

        const iconWrapper = document.createElement("div");
        iconWrapper.className = "icono";
        iconWrapper.innerHTML = service.svg; // SVG inline

        const title = document.createElement("h3");
        title.textContent = service.title;

        const desc = document.createElement("p");
        desc.textContent = service.description;

        card.appendChild(iconWrapper);
        card.appendChild(title);
        card.appendChild(desc);
        container.appendChild(card);
      });
    })
    .catch((err) => {
      console.error("Error cargando los servicios:", err);
    });
});
