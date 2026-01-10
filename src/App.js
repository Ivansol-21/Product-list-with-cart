// import "./components/BotonAgregar.js";
const h1 = document.querySelector("h1");
let eje;

document.addEventListener("agregar-al-carrito", (e) => {
  const imgSecl = e.target.closest("figure").querySelector("div");
  eje = e.detail.dataId;
  console.log(eje);
  if (e.detail.cantidad > 0) {
    imgSecl.style.border = "2px solid hsl(14, 86%, 42%)";
  } else {
    imgSecl.style.border = "none";
  }
});

h1.addEventListener("click", (e) => {
  const product = document.querySelector(`#${eje} div`);
  const btnAgregar = document.querySelector(`#${eje} div boton-agregar`);

  console.log(btnAgregar.contador);
  btnAgregar.reset = "0";
  console.log(btnAgregar.contador);
  product.style.border = "none";
});
