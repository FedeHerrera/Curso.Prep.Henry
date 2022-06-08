// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  primero = array[0]
  return primero
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  ultimo = array[array.length - 1]
  return ultimo
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (x = 0; x < array.length; x++){
    array[x] = array[x] + 1
  }
  return array
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  oracion = ""
  for (x = 0; x < palabras.length - 1; x++){
    oracion = oracion + palabras[x] + " "
  }
  oracion = oracion + palabras[x]
  return oracion
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.includes(elemento)) return true
  return false
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  total = 0
  for (x = 0; x < numeros.length; x++){
    total = total + numeros[x]
  }
  return total
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  total = 0
  for (x = 0; x < resultadosTest.length; x++){
    total = total + resultadosTest[x]
  }
  return total/x
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  max = 0
  for (i = 0; i < numeros.length; i++){
    if (numeros[i] > max){
      max = numeros[i]
    }
  }
  return max
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length == 0) return 0
  if (arguments.length == 1) return arguments[0]
  total = arguments[0]
  for (i = 1; i < arguments.length; i++){ 
    total = total * arguments[i]
  }
  return total
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  cant = 0
  for (i = 0; i < arreglo.length; i++){
    if (arreglo[i] > 18) cant+= 1
  }
  return cant
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia > 1 && numeroDeDia < 7) return "Es dia Laboral"
  return "Es fin de semana"
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  a = n.toString()
  if (a.includes("9", 0)){
    return true
  }
  return false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  i = 0
  band = 0
  elemento = arreglo[0]
  while (band == 0 && i <= arreglo.length-1){
    if (elemento != arreglo[i]){
      band = 1
    }
    i = i+1
  }
  if (band == 1){return false}
  return true

  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  //Esto me parece mejor solución pero no es lo que me piden, de todas formas lo dejo como comentario
  //if (array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre")){
  //  nuevoarray = ["Enero", "Marzo", "Noviembre"]
  //}
  i = 0
  bandera = 0
  arraynuevo = []
  while (bandera != 3 && i <= array.length-1){   
    switch(array[i]){
      case "Enero":
        arraynuevo.push(array[i])
        bandera += 1
        break;
      case "Marzo":
        arraynuevo.push(array[i])
        bandera +=1
        break;
      case "Noviembre":
        arraynuevo.push(array[i])
        bandera +=1
        break;
    }
    i += 1
  }
  if (bandera == 3){return arraynuevo}
  return ("No se encontraron los meses pedidos")
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  nuevoarray = []
  for (i = 0; i <= array.length-1; i++){
    if (array[i] > 100){
      nuevoarray.push(array[i])
    }
  }
  return nuevoarray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  band = 0
  nuevoarray = []
  for(i = 0; i < 10; i++){
    if (numero == i){
      band = 1
      break;
    }
    numero = numero + 2
    nuevoarray.push(numero)
  }
  if (band == 1) {return "Se interrumpió la ejecución"}
  return nuevoarray
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  nuevoarray = []
  for(i = 0; i < 10; i++){
    if (i == 5){
      continue;
    }
    numero = numero + 2
    nuevoarray.push(numero)
  }
  return nuevoarray
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
