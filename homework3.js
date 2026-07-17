//Nombre y Apellido: Joaquin Calandroni
//Curso:  6°B
//Grupo:
//Taller de Programacion III
//Departamento de Informatica - EESTn°1 - Raul Scalabrini Ortiz

// Trabajo Practico N°3
// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
 function devolverPrimerElemento(array) {
  return array[0];
}
}
console.log(devolverPrimerElemento(['Martin', 'Antonio', 'Sara', 'Samuel']));




function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}
 console.log(devolverUltimoElemento(['martin', 'Antonio', 'manuel', 'Samuel']));



function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}
console.log(obtenerLargoDelArray(['martin', 'Antonio', 'manuel', 'Samuel']));


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    array[i]++;
  }

  return array;
}
console.log(incrementarPorUno([1, 2, 3, 4]));


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}
console.log(agregarItemAlFinalDelArray(["Felipe", "Anto", "Alonso"], "ALBERTO"));




function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

console.log(agregarItemAlComienzoDelArray(["Felipe", "Anto", "Alonso"], "ALBERTO"));



function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}

console.log(dePalabrasAFrase(["Hello", "world!"]));





function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
 
  return array.includes(elemento);
}

console.log(arrayContiene(["uva", "banana", "manzana"], "naranja"));
console.log(arrayContiene(["uva", "banana", "manzana"], "uva"));





function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:


  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  return suma;
}
console.log(agregarNumeros([1, 2, 3, 4]));





function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

 let resultado = 0;

  for (let i = 0; i < resultadosTest.length; i++) {
    resultado += resultadosTest[i];
  }

  return resultado / resultadosTest.length;
}

console.log(promedioResultadosTest([1, 2, 3, 4]));








function numeroMasGrande(numeros) { 
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }

  return mayor;
}
console.log(numeroMasGrande([1, 2, 3, 4, 5]));






function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  if (arguments.length === 0) {
    return 0;
  }

  let producto = 1;

  for (let i = 0; i < arguments.length; i++) {
    producto = producto * arguments[i];
  }

  return producto;

}
 console.log(multiplicarArgumentos(5));






function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  let contador = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      contador++;
    }
  }

  return contador;
}
const numeros = [10, 20, 5, 19, 30, 18, 25];
console.log(cuentoElementos(numeros));



function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  if (numeroDeDia  === 1 || numeroDeDia === 7) {
      return "Es fin de semana";
    } else {
      return "Es dia Laboral";
    }
  }
console.log(diaDeLaSemana(1));







function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (n.toString().startsWith("9")) {
    return true;
  }
  return false;
}

console.log(empiezaConNueve(9123)); 
console.log(empiezaConNueve(1234)); 




function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  if (arreglo.length === 0) {
    return true; 
  }
  const primerElemento = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] !== primerElemento) {
      return false;
    }
  }
  return true;
}
console.log(todosIguales([1, 1, 1, 1]));
console.log(todosIguales([1, 2, 1, 1]));






function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let mesesEncontrados = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      mesesEncontrados.push(array[i]);
    }
  }

  if (mesesEncontrados.length === 3) {
    return mesesEncontrados;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

console.log(mesesDelAño(["Febrero", "Enero", "Marzo", "Junio", "Mayo", "Abril", "Julio", "Agosto", "Noviembre", "Octubre", "Septiembre", "Diciembre"]));
console.log(mesesDelAño(["Febrero", "Marzo", "Junio", "Mayo", "Abril", "Julio", "Agosto", "Noviembre", "Octubre", "Septiembre", "Diciembre"]));


  function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
  let valoresMayores = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      valoresMayores.push(array[i]);
    }
  }
  return valoresMayores;
}

console.log(mayorACien([50, 75, 100, 150, 175, 2512]));



function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  for (let i = 0; i < 10; i++) {
    numero += 2;
    if (numero === i) {
      return "Se interrumpió la ejecución";
    }
  }
  return numero;
}
console.log(breakStatement(5));
console.log(breakStatement(10));





function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    numero += 2;
  }
  return numero;
}
console.log(continueStatement(5));
console.log(continueStatement(10));





function buscarIndice(array, elemento) {
  // Usa el método `.indexOf` para devolver el índice de "elemento" dentro de "array".
  // Si el elemento no existe, devuelve -1.
  // Tu código:
  return array.indexOf(elemento);
}
console.log(buscarIndice(["manzana", "banana", "naranja"], "banana"));


function cortarArray(array, inicio, fin) {
  // Usa el método `.slice` para devolver una copia del array desde "inicio" hasta "fin" (sin incluir "fin").
  // No modificar el array original.
  // Tu código:
  return array.slice(inicio, fin);
}
console.log(cortarArray(["manzana", "banana", "naranja", "kiwi"], 1, 3));



function eliminarElementos(array, inicio, cantidad) {
  // Usa el método `.splice` para eliminar "cantidad" elementos desde la posición "inicio".
  // Devuelve el array modificado.
  // Tu código:
  return array.splice(inicio, cantidad);
}
console.log(eliminarElementos(["manzana", "banana", "naranja", "kiwi"], 1, 2));


function invertirArray(array) {
  // Usa el método `.reverse` para invertir el orden de los elementos del array.
  // Devuelve el array invertido.
  // Tu código:
  return array.reverse();
}
console.log(invertirArray(["manzana", "banana", "naranja", "kiwi"]));





function unirArrays(array1, array2) {
  // Usa el método `.concat` para unir "array1" y "array2" en uno nuevo.
  // Devuelve el nuevo array sin modificar los originales.
  // Tu código:
  return array1.concat(array2);
}


console.log(unirArrays(["manzana", "banana"], ["naranja", "kiwi"]));

function duplicarElementos(array) {
  // "array" debe ser una matriz de enteros.
  // Usa el método `.map` para devolver un nuevo array con cada elemento multiplicado por 2.
  // Tu código:
  return array.map((element) => element * 2);
}


console.log(duplicarElementos([1, 2, 3, 4]));




function imprimirElementos(array) {
  // Usa el método `.forEach` para imprimir (console.log) cada elemento del array.
  // No devuelve nada (undefined).
  // Tu código:
  array.forEach((element) => console.log(element)); 
}

console.log(imprimirElementos(["manzana", "banana", "naranja", "kiwi"]));



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
  continueStatement,
  buscarIndice,
  cortarArray,
  eliminarElementos,
  invertirArray,
  unirArrays,
  duplicarElementos,
  imprimirElementos,
};
