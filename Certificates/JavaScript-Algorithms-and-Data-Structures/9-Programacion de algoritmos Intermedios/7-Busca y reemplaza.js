//! Busca y reemplaza

//* Realiza una búsqueda y reemplaza en la oración usando los argumentos proporcionados y devuelve la nueva oración.

  //* El primer argumento es la frase sobre la que se va a realizar la búsqueda y el reemplazo.

  //* El segundo argumento es la palabra que se reemplazará (antes).

  //* El tercer argumento es lo que reemplazará el segundo argumento (después).

//* Note: Mantén la capitalización del primer carácter en la palabra original cuando lo estés reemplazando. Por ejemplo, si quieres reemplazar la palabra Book por la palabra dog, debe ser reemplazada como Dog



function myReplace(str, before, after) {
  return str.split(' ').map((word) => {
    if (word !== before) return word
    
    return (word[0] === word[0].toUpperCase())
    	? word.replace(before, after).replace(/.{1}/, after[0].toUpperCase())
    	: word.replace(before, after).replace(/.{1}/, after[0].toLowerCase())
    
  }).join(' ') ;
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


myReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// debe devolver la cadena He is Sitting on the couch


myReplace("Let us go to the store", "store", "mall")
// debe devolver la cadena Let us go to the mall

myReplace("I think we should look up there", "up", "Down") 
// debe devolver la cadena I think we should look down there.

myReplace("His name is Tom", "Tom", "john") 
// debe devolver la cadena His name is John