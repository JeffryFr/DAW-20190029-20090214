/* El arreglo de productos contiene el nombre y su respectivo precio a modo de matriz, para recurrir a cada uno de ellos cuando sea necesario,
especialmente en la tabulación de la factura */

var productos = [
["Ensalada",1.5],
["Papas fritas",1.25],
["Pieza de pollo grande",1.75],
["Pieza de pollo mediana",1.5],
["Pieza de pollo pequeña",1.25],
["Bebida grande",1.5],
["Bebida mediana",1.25],
["Bebida pequeña",1.00],
["Café",0.5],
["Postre",1.25]
]

/* Los keydown obtienen la combinación de las teclas Ctrl + E para habilitar el textarea y escribir con el focus; Ctrl + S para guardar el comentario,
agregándolo incluso a la factura */

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'e') {
    event.preventDefault()
    document.getElementById('area').removeAttribute("disabled")
    var eleme = document.getElementById('area')
    eleme.focus()
  }
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 's') {
    event.preventDefault()
    alert("Comentario guardado exitosamente :D")
    var comentario = document.getElementById('area').value
    document.getElementById('comenFactura').innerHTML = "<span>-------------------------------------<span><br>Comentario guardado:<br>" + comentario
  }
});

/* Las siguientes funciones y variables de "elegido" guardan e interpretan la información respecto al Combo, como función extra muestran un textarea con
los detalles de cada combo y lo agregan en tiempo real a la factura. Al final se itera la función para actualizar la factura. Tambien mencionar que se
agrega una serie de botones para aumentar o reeducir la cantidad de combos deseados, si esta iguala a cero el producto se elimina */

var comboFac, precCombo, elegidoAux

function elegido(value){
  elegidoAux = elegido
  var btnCantidad = "<td id='botones' colspan='2'><input type='button' value='-' id='redux' onclick='reducir()'>  <span id='cant'>1</span>  <input type='button' value='+' id='aumen' onclick='aumentar()'></div></td>"
  switch(value){
    case "3":
    document.getElementById('descripcion').textContent = "Valor: $7.25. Incluye 3 piezas de pollo, Ensalada, Papas fritas y Bebida grande."
    comboFac = "Súper Combo"
    precCombo = 7.25
    break;
    case "2":
    document.getElementById('descripcion').textContent = "Valor: $5.75. Incluye 2 piezas de pollo, Papas fritas y Bebida mediana."
    comboFac = "Combo Personal"
    precCombo = 5.75
    break;
    case "1":
    document.getElementById('descripcion').textContent = "Valor: $3.50. Incluye 1 pieza de pollo, Papas fritas y Bebida pequeña."
    comboFac = "Combo Infantil"
    precCombo = 3.50 
    break;
  }
  document.getElementById("cantidadCombo").innerHTML = btnCantidad
  document.getElementById("orden").innerHTML += "<tr id='combito'><td colspan='2'>" + comboFac + " (" + document.getElementById("cant").textContent + ")</td><td class='cobrar'>" + (parseInt(document.getElementById("cant").textContent, 10)*precCombo) + "</td></tr>"
  finalFinal()
}

/* Las variables attemp guardan el total de veces clickeadas para un checkbox evaluado las veces impares como verdadero y las veces pares como falso,
utilizando la variables aux puede conocerse la ubicación actual del elemento con que estamos tratando de la lista de productos. Al final se itera la
función para actualizar la factura */

var attemp1 = 0;
var attemp2 = 0;
var attemp3 = 0;
var attemp4 = 0;
var attemp5 = 0;
var attemp6 = 0;
var attemp7 = 0;
var attemp8 = 0;
var attemp9 = 0;
var attemp10 = 0;
var aux;

function ordenarProducto(id) {
  switch(id){
    case "e1":
    aux = "1";
    break;
    case "e2":
    aux = "2";
    break;
    case "e3":
    aux = "3";
    break;
    case "e4":
    aux = "4";
    break;
    case "e5":
    aux = "5";
    break;
    case "e6":
    aux = "6";
    break;
    case "e7":
    aux = "7";
    break;
    case "e8":
    aux = "8";
    break;
    case "e9":
    aux = "9";
    break;
    case "e10":
    aux = "10";
    break;
  }
  var valued = ("attemp" + aux)
  switch(valued){
    case "attemp1":
    attemp1 += 1
    ash = attemp1
    break;
    case "attemp2":
    attemp2 += 1
    ash = attemp2
    break;
    case "attemp3":
    attemp3 += 1
    ash = attemp3
    break;
    case "attemp4":
    attemp4 += 1
    ash = attemp4
    break;
    case "attemp5":
    attemp5 += 1
    ash = attemp5
    break;
    case "attemp6":
    attemp6 += 1
    ash = attemp6
    break;
    case "attemp7":
    attemp7 += 1
    ash = attemp7
    break;
    case "attemp8":
    attemp8 += 1
    ash = attemp8
    break;
    case "attemp9":
    attemp9 += 1
    ash = attemp9
    break;
    case "attemp10":
    attemp10 += 1
    ash = attemp10
    break;
  }
  

  if((ash) % 2 == 1){
    document.getElementById("cant" + aux).innerHTML = "<input type='number' onchange='actuFactura()' id='number" + aux + "' min='1' value='1' step='1'>"
  }else if((ash % 2) == 0){
    document.getElementById("cant" + aux).innerHTML = ""  
    document.getElementById("prodFac" + aux).remove()
  }
  document.getElementById("orden").innerHTML += "<tr id='prodFac" + aux + "'><td colspan='2'>" + productos[(aux-1)][0] + " (" + document.getElementById("number" + aux).value + ") </td><td class='cobrar'>" + (document.getElementById("number" + aux).value * productos[(aux-1)][1]) + "</td></tr>"
  finalFinal()
}

/* La función actuFactura se utiliza cuando se modifica uno de las cantidades de los productos ordenados */

function actuFactura(){
  document.getElementById("prodFac" + aux).innerHTML = "<td colspan='2'>" + productos[(aux-1)][0] + " (" + document.getElementById("number" + aux).value + ") </td><td class='cobrar'>" + (document.getElementById("number" + aux).value * productos[(aux-1)][1]) + "</td>"
  finalFinal()
}

/* Reducir es uno de los botones especiales de los combos para reducir la cantidad deseada, esto afecta el elemento donde estan los botones
y la factura en tiempo real */

function reducir(){
  var elem = document.getElementById("cant").textContent
  var newVal = parseInt(elem,10);
  newVal -= 1
  if(newVal == 0){
    document.getElementById("cantidadCombo").innerHTML = "<br><br>";
    document.getElementById("combito").remove()
    precCombo = 0
    document.getElementsByTagName("combo" + elegidoAux).setAttribute("checked","false")
  }else {
    document.getElementById("cant").innerHTML = newVal
     document.getElementById("combito").innerHTML = "<td colspan='2'>" + comboFac + " (" + newVal + ")</td><td class='cobrar'>" + (precCombo * newVal) + "</td>"
  }
 finalFinal()
}

/* Aumentar es el otro boton para alterar la cantidad de combos deseados */

function aumentar(){
  var elem = document.getElementById("cant").textContent
  var newVal = parseInt(elem,10);
  newVal += 1
  document.getElementById("cant").innerHTML = newVal
  document.getElementById("combito").innerHTML = "<td colspan='2'>" + comboFac + " (" + newVal + ")</td><td class='cobrar'>" + (precCombo * newVal) + "</td>"
  finalFinal()
}

/* FinalFinal es la función que reimprime y actualiza la tabla, cada elemento a cobrar en el js se guarda con una clase "cobrar", al final js  llama a
todos los elementos con dicha clase y suma su contenido */

function finalFinal(){
  var cobro = 0;
  for (var i = 0; i <= document.getElementsByClassName('cobrar').length -1; i++) {
    console.log(document.getElementsByClassName('cobrar')[i].textContent)
    cobro += parseFloat(document.getElementsByClassName('cobrar')[i].textContent,10)
  }
  document.getElementById('final').innerHTML = cobro

}