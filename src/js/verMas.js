document.addEventListener("DOMContentLoaded", () => {
  const maxChars = 200; // Puedes ajustar el límite
  const textElement = document.getElementById("f-text");

  const fullText = `Siegfried Rhein S.A. de C.V. empresa farmacéutica dedicada al desarrollo, producción, comercialización de productos farmacéuticos y distribución de productos higiénicos, materiales de curación, nutricionales, cosméticos y bebidas hidratantes de uso humano, como muestra de su compromiso con la calidad, la seguridad, la salud ocupacional y el medio ambiente, ha definido los siguientes principios como parte de su política de gestión integral.`;

  if (!textElement) return;

  if (fullText.length <= maxChars) {
    textElement.textContent = fullText;
    return;
  }

  const shortText = fullText.slice(0, maxChars);
  let expanded = false;

  // Crear el botón como span
  const spanToggle = document.createElement("span");
  spanToggle.className = "toggle-span";
  spanToggle.textContent = " Ver más";

  const renderText = () => {
    textElement.textContent = expanded ? fullText : shortText + "...";
    textElement.appendChild(spanToggle);
    spanToggle.textContent = expanded ? " Ver menos" : " Ver más";
  };

  // Evento de clic
  spanToggle.addEventListener("click", () => {
    expanded = !expanded;
    renderText();
  });

  // Inicializar
  renderText();
});
