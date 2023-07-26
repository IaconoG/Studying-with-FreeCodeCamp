//! Convierte entidades HTML


/*
 * Convierte los caracteres &, <, >, " (dobles comillas), y ' (apóstrofo), en un cadena con su correspondiente entidad HTML
 */


function convertHTML(str) {
  const entidadesHTML = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }

  return str
  	.split('')
  	.map(word => {
    	return (Object.keys(entidadesHTML).some(el => el === word))	
    		? entidadesHTML[word]
  			: word
  		})
  	.join('')
}

convertHTML("Dolce & Gabbana") 
// debe devolver la cadena Dolce &amp; Gabbana.

convertHTML("Sixty > twelve") 
// debe devolver la cadena Sixty &gt; twelve.

convertHTML("<>") 
// debe devolver la cadena &lt;&gt;.



// todo: OTRA FORMA 

function convertHTML(str) {
  const entidadesHTML = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }
  
  return str
  	.split('')
  	.map(word => entidadesHTML[word] || word) // Si la primera condicion da undefined, no devuelve undefined si no que se remplaza por word.
  	.join('')
  ;
}

convertHTML("Dolce & Gabbana") 
// debe devolver la cadena Dolce &amp; Gabbana.

convertHTML("Sixty > twelve") 
// debe devolver la cadena Sixty &gt; twelve.

convertHTML("<>") 
// debe devolver la cadena &lt;&gt;.