const productos = [
    { nombre: "Cuaderno", precio: 2.00, categoria: "Utiles" }, 
    { nombre: "Lapiz", precio: 0.50, categoria: "Utiles" },
    { nombre: "Mochila", precio: 15.00, categoria: "Accesorios" }
];

let sumaTotal = 0;

function mostrarProductos() {
    const tbody = document.getElementById("tablaProductos");
    tbody.innerHTML = ""; 

    productos.forEach(item => {
        const fila = `
            <tr>
                <td>${item.nombre}</td>
                <td>${item.precio.toFixed(2)}</td> 
                <td>${item.categoria}</td>
            </tr>
        `;
        tbody.innerHTML += fila;

        sumaTotal+=item.precio;
    });
}


function calcularTotal() {
     

   // for (let i = 0; i < productos.length; i++) {
    //    sumaTotal = sumaTotal + productos[i].precio; 
    //}
    document.getElementById("resultadoTotal").innerText = "Total a pagar: $" + sumaTotal.toFixed(2);
}


const boton = document.getElementById("btnCalcular");
boton.addEventListener("click", calcularTotal);


mostrarProductos();