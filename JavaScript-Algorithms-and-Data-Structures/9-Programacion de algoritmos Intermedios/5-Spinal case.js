//! Spinal case

//* Convierte una cadena a spinal case. Spinal case significa todas-las-palabras-en-minúscula-unidas-por-guiones.


function spinalCase(str) {
  return str.split(/(?=[A-Z])|\s|_/).join('-').toLowerCase();
    // split(/(?=[A-Z])|\s|_/) = ['This', 'Is', 'Spinal', 'Tap']
  		// () = 
  		// .?= Coincide con 
  		// .?=[A-Z] = Coincide con una mayuscula (uppercase letter)
  		// |\s = o whitespace character
  		// |_ = o el caracter _
    // join('-') = 'This-Is-Spinal-Tap'
    // toLowerCase() = this-is-spinal-tap
}

spinalCase('This Is Spinal Tap');
// this-is-spinal-tap

spinalCase("thisIsSpinalTap") 
// this-is-spinal-tap


spinalCase("The_Andy_Griffith_Show")
// the-andy-griffith-show