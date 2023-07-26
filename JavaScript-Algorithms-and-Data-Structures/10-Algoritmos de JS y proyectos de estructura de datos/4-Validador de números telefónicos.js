//! Validador de números telefónicos

/*
 * Devuelve true si la cadena pasada concuerda con un número de teléfono válido en Estados Unidos.
 */

//* El usuario puede completar el campo del formulario de la forma que elija, siempre que tenga el formato de un número estadounidense válido.
//* Los siguientes ejemplos son de formatos válidos para números estadounidenses (consulte las pruebas a continuación para otras variantes):

//? Ejemplo

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

//* Para este desafío se te presentará una cadena como 800-692-7753 o 8oo-six427676;laskdjf.
//* Tu trabajo es validar o rechazar el número de teléfono estadounidense basado en cualquier combinación de los formatos proporcionados arriba.
//* El código de área es obligatorio.
//* Si el código de país es proporcionado, debes confirmar que el código de país es 1

//* Devuelve true si la cadena es un número de teléfono estadounidense valido; de lo contrario devuelve false

function telephoneCheck(str) {
  // Comprobamos si todos los caracteres de str son correctos
const tieneCaracteresValidos = str.split("").every((num) => {
  return /[\d ()-]/.test(num);
});

  // Retornamos falso si tiene caracteres invalidos
if (!tieneCaracteresValidos) return false; // Condicion dependiendo de el tipo de caracteres

// - Tiene caracteres Validos -

  // Retoramos falso si la longitud del numero no es correspondiente a un numero de telefono 
if (
  str.replace(/\D/g, "").length !== 10 &&
  str.replace(/\D/g, "").length !== 11
)
  return false; // Condicion dependiendo de la longitud del nuemro de telefono

// - Tiene la longitud correcta -

  // Retornamos falso si la longitud del numero de telefono es 11 y su numero inicial no es 1
if (str.replace(/\D/g, "").length === 11 && str[0] !== "1") return false; // Condicion dependiendo del numero inicial del telefono

// - Su numero inicial es 1 o su longitud es 10 -

const expRegFormatoNumeroValido =/^(1{1})?(\(\d{3}\)[-]?(\d{3})[-]?(\d{4})|(\d{3})[-]?(\d{3})[-]?(\d{4}))/;
// ^(1{1})? = Tomamos el primer numero solo si es 1 y se repite una vez  

// Los tres primeros numeros estan encerrados con parentesis (555)
  // (\ (\d{3}\) [-]? (\d{3}) [-]? (\d{4}) = tomamos el resto de los numeros 
    // (\ = ( = un paretesis
    // (\d{3}\) = 555) grupo de 3 numeros y un parentesis de cierre
    // [-]? = (-) puede haber o no un guion medio
    // (\d{3}) = 555 = grupo de 3 numeros
    // [-]? = (-) puede haber o no un guion medio 
    // (\d{4}) = 5555 = grupo de 4 numeros

  // | = o

// Los tres primeros numeros NO estan encerrados con parentesis 555
  // (\d{3}) [-]? (\d{3}) [-]? (\d{4}) 
    // (\d{3}) = 555 = grupo de 3 numeros
    // [-]? = (-) puede haber o no un guion medio
    // (\d{3}) = 555 = grupo de 3 numeros
    // [-]? = (-) puede haber o no un guion medio
    // (\d{4}) = 5555 = grupo de 4 numeros

// Analizamos si el numero de telefono es correcto
const esValidoElTelefono = expRegFormatoNumeroValido.test(
  str.replace(/\s/g, "") // eliminamos todos los espacios en blanco
);

return esValidoElTelefono; // Devuele true o false dependiedo de las pruebas sobre str
}


telephoneCheck("555-555-5555");

telephoneCheck("555-555-5555");
