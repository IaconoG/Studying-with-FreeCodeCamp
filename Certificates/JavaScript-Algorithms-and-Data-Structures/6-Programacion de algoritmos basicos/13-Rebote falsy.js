//! Rebote falsy

// Quita todos los valores falsos de un arreglo.

// Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.

// Sugerencia: Intenta convertir cada valor a booleano.


function bouncer(arr) {
  return arr.filter((el) => Boolean(el))
}

bouncer([7, "ate", "", false, 9, null, undefined, NaN, true, 0]);

