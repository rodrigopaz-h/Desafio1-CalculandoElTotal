const precio = 400000
const precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = precio


function precioTotal(cantidad, precio){
  const amount = Number(cantidad)
  const price = Number(precio)
  const total = price * amount

  return new Intl.NumberFormat("en-ES", {
    style: "currency",
    currency: "CLP",
    currencySign: 'accounting',
    maximumFractionDigits: 2,
  }).format(total)
}

function aumenta() {
  const precioTotalElement = document.querySelector(".valor-total")
  const cantidadElement = document.querySelector(".cantidad")
  const cantidadValue = Number(document.querySelector(".cantidad").innerHTML)
  const nuevaCantidad = cantidadValue + 1
  cantidadElement.innerHTML = nuevaCantidad
  const valorTotal = precioTotal(nuevaCantidad, precio)

  precioTotalElement.innerHTML = valorTotal
}

function disminuye() {
  const precioTotalElement = document.querySelector(".valor-total")
  const cantidadElement = document.querySelector(".cantidad")
  const cantidadValue = Number(document.querySelector(".cantidad").innerHTML)

  if (cantidadValue > 0) {
    const nuevaCantidad = cantidadValue - 1
    cantidadElement.innerHTML = nuevaCantidad
    const valorTotal = precioTotal(nuevaCantidad, precio)
    
    precioTotalElement.innerHTML = valorTotal
  }
}


