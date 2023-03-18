// PRODUCTOS

const productos = [
    {nombre: "Psicologia", precio: 100000},
{nombre: "Terapia ocupacional", precio: 70000},
{nombre: "Fonoaudiologia", precio: 70000}, {nombre: "Neuropsicologia", precio: 200000}
];

// CARRITO VACIO
let carrito = [];

// DIALOGO CON EL COMPRADOR
let seleccion = prompt("Hola, deseas adquirir algun servicio?")

while (seleccion != "si" && seleccion != "no") {
alert("porfavor ingresa si o no")
seleccion = prompt ("Hola desea comprar algo si o no")  
}

// MOSTRAR PRODUCTOS

if(seleccion = "si"){
    alert("A continuacion nuestra lista de servicios")
    let todoslosServicios = productos.map((producto) => producto.nombre + " " + producto.precio + "$" );
    alert (todoslosServicios.join(" - "))
} else if (seleccion == "no"){
    alert("Muchas gracias por tu visita vuelve pronto 😊")
}

// MOSTRAR PRODUCTOS 

while (seleccion != "no") {
    let producto = prompt("Agrega un servicio a tu carrito 🛒")
    let precio = 0
    if (producto == "Psicologia" || producto == "Fonoaudiologia" || producto == "Terapia ocupacional" || producto == "Neuropsicologia") {
        switch (producto) {
            case "Psicologia":
            precio = 100000;
            case "Terapia Ocupacional":
            precio = 70000;
            case "Fonoaudiologia":
            precio = 70000;
            case "Neuropsicologia":
            precio = 200000;
                break;
                default:
                    break;
        }
        let unidades = parseInt(prompt("Cuantos servicios desea adquirir?💵"))
        
        carrito.push({producto, unidades, precio})
        console.log(carrito)
        } else {alert("No tenemos ese servicio 😢")}
        
        seleccion = prompt("Desea seguir comprando?🔍")
        while (seleccion === "no") {
            alert("Grcias por tu compra hasta luego")
            carrito.forEach((carritoFinal) =>{
                console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
            })
            break;
        }
    }

    // MOSTRAR TOTAL

    const total = carrito.reduce((ecc, el) => ecc + el.precio * el.unidades, 0)
    console.log(`el total a pagar por sus servicios es: ${total}`)

    



