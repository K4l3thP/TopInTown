function FechaFooter() {
  const fechaActual = new Date();
  const anio = fechaActual.getFullYear();
  let texto = "© " + anio + " Copyright TopInTownCR.";
  document.getElementById("pFooter").innerText = texto;
}
