//! Emparejamienot de ADN

/*
 * A la cadenea ADN le falta el elemento de emparejamiento:
   * toma cada caracter, 
   * obten su par,
   * devulve los resultados como un arreglo bidimiensional
 *
 * Par de bases son un par de AT y CG. Haz coincidir el elemento que falta como el caracter proporcionado.
 * Devuelve el caracter proprcionado como el primer elemento de cada arreglo.
 * 
 * El caracter y su par dse emparejan en un arreglo, y todos los arreglos se agrupan en un arreglo encapsulado. 
 */





function pairElement(str) {
  // Creamos un nuevo array con los emarejamientos correctos
  let parDeBases = [['A', 'T'], ['T', 'A'], ['G', 'C'], ['C', 'G']]
  
  // realizamos un split al string convirtiendolo en un array de caracteres
  str = str.split('');

  // map a los elementos del array para buscar los respectivos pares de cada caracter
  return str.map(el => {
    // si el caracter es igual al primer elemento de uno de los pares de bases realizamos el emparejamiento de los pares 
    if( parDeBases.findIndex((par) => el === par[0]) !== -1 ) {
      // retornamos el nuevo valor del str con el par de bases correspondiente
      return parDeBases[parDeBases.findIndex((par) => el === par[0])]
    }
    
  });
}

pairElement("GCG");
// La entrada GCG, devolvera [['G', 'C'], ['C', 'G'], ['G', 'C']]



pairElement("ATCGA");
// debe devolver [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].




//todo: OTRA FORMA DE RESOLVERLO


function pairElement(str) {
  let pares = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  }
  // split al string para convertirlo en un array de caracteres
  let arr = str.split('')
  // map cada caracter a un array de caracteres con sus respefctivos pares
  return arr.map( el => [el, pares[el]] );
}


pairElement("GCG");
// La entrada GCG, devolvera [['G', 'C'], ['C', 'G'], ['G', 'C']]

pairElement("TTGAG")
// debe devolver [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].