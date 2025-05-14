function inicio() {
  window.location.href = "/index.html";
}

function information() {
  window.location.href = "/src/components/information.html";
}

function caries() {
  window.location.href = "/src/components/caries.html";
}

function bruxismo() {
  window.location.href = "/src/components/bruxismo.html";
}

function tabaquismo() {
  window.location.href = "/src/components/tabaquismo.html";
}

function halitosis() {
  window.location.href = "/src/components/halitosis.html";
}

function autoexploracion() {
  window.location.href = "/src/components/autoexploracion.html";
}

function alimentacion() {
  window.location.href = "/src/components/alimentacion.html";
}

function higieneBucal() {
  window.location.href = "/src/components/higieneBucal.html";
}

function promociones() {
  window.location.href = "/src/components/promociones.html";
}

function intensivo() {
  window.location.href = "/src/components/intensivo.html";
}

function promos() {
  window.open("https://siegfried.com.mx/promociones", "_blank");
}

function planes() {
  window.open("https://siegfried.com.mx/promociones", "_blank");
}

function farmacias() {
  window.open("https://siegfried.com.mx/promociones", "_blank");
}

function diario() {
  window.location.href = "/src/components/diario.html";
}

function sensibilidad() {
  window.location.href = "/src/components/sensibilidad.html";
}

function irAInformacion() {
  const url = new URL(window.location.href);
  const isAlreadyAtInfo = url.hash === "#info";

  if (isAlreadyAtInfo) {
    location.reload(); // Fuerza recarga y scroll a #info
  } else {
    window.location.href = "/index.html#info";
  }
}
