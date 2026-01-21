const componenteCartList = document.querySelector("#cart-modal cart-list"),
  modal = document.querySelector("#cart-modal"),
  cartBtn = document.querySelector("#cart-btn"),
  $sct = document.querySelector("main section + section"),
  cartBtnNum = document.querySelector("#cart-btn span");

/* ---- El boton agregar de cada producto dispara un evento. Usamos el Html para escuchar ese evento (asi podemos escuchar el eventos de todos lo botones que existan) 
y recibir lo datos que envia ese boton, renderizamos el componente cart-list con esos datos, reiniciamos la notificacion 
del boton carrito y si las unidades de ese producto es mayor a cero se selecciona el producto y si no se deselecciona.
----*/
document.addEventListener("agregar-al-carrito", (e) => {
  const imgSecl = e.target.closest("figure").querySelector("div");
  // console.log(e.detail);
  componenteCartList.render(e);
  cartNotification();
  if (e.detail.unidades > 0) {
    imgSecl.style.border = "2px solid hsl(14, 86%, 42%)";
  } else {
    imgSecl.style.border = "none";
  }
});
/* --------------------------------------------------------------------------------------------------------- */
/* ############################################################################################## */
/* ----- El componente cart-list dispara un evento cuando se elimina un producto de la lista. Escuchamos ese evento
  y deseleccionamos el producto correspondiente, resetiamos su boton agregar y reiniaciamos la notificacion del boton carrito ------*/
componenteCartList.addEventListener("delete-product", (e) => {
  const product = document.querySelector(`#${e.detail.idProduct} div`);
  const btnAgregar = document.querySelector(
    `#${e.detail.idProduct} div boton-agregar`,
  );

  btnAgregar.reset = "0";
  product.style.border = "none";
  cartNotification();
});

const cartNotification = () => {
  cartBtnNum.textContent = componenteCartList.cantidad;
  parseInt(cartBtnNum.textContent) > 0
    ? cartBtnNum.classList.remove("hidden")
    : cartBtnNum.classList.add("hidden");
};
/* -------------------------------------------------------------------------------------------------------------- */
/* #################################################################################### */
/* ---------- Para abrir y cerral el carrito de compras en moviles ---------------- */
cartBtn.addEventListener("click", (e) => {
  modal.showModal();
  document.body.classList.add("overflow-hidden");
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.close();
    document.body.classList.remove("overflow-hidden");
  }
});
/* -------------------------------------------------------------------------------------------------------- */
/* ###################################################################################################### */
/* --------- Se agrega el componente cart-list un algun lugar segun el ancho de la pantalla ----------- */
let estado = false;

if (window.innerWidth >= "1024") {
  $sct.appendChild(componenteCartList);
  cartBtn.classList.add("hidden");
  estado = true;
}

const width = () => {
  if (window.innerWidth >= "1024") {
    if (!estado) {
      $sct.appendChild(componenteCartList);
      cartBtn.classList.add("hidden");
      estado = true;
    }
  }
  if (window.innerWidth < "1024") {
    if (estado) {
      modal.appendChild(componenteCartList);
      cartBtn.classList.remove("hidden");
      estado = false;
    }
  }
};

window.addEventListener("resize", width);
/* --------------------------------------------------------------------------------------------- */
componenteCartList.addEventListener("confirm-order", (e) => {
  console.log(e.detail.$fragment);
});
