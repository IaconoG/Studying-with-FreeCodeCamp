//! Caja registradora

// https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

//* Diseña una función checkCashRegister() que acepte el precio de compra como primer argumento (price), la cantidad pagada como segundo argumento (cash), y el dinero en efectivo que tiene la caja (cid) como tercer argumento.

//* cid es un arreglo 2D que enumera las monedas disponibles.

//* La función checkCashRegister() siempre debe devolver un objeto con una clave status y una clave change.

//* Devuelve {status: "INSUFFICIENT_FUNDS", change: []} si el efectivo en caja es menor que el cambio necesario, o si no puedes devolver el cambio exacto.

//* Devuelve {status: "CLOSED", change: [...]} si el efectivo en caja como valor de la clave change es igual al cambio que se debe entregar

//* En cualquier otro caso, devuelve {status: "OPEN", change: [...]}, con el cambio a entregar en monedas y billetes, ordenados de mayor a menor, como valor de la clave change.


function checkCashRegister(price, cash, cid) {  
  const cidCopiaPorValor = JSON.parse(JSON.stringify(cid)); // Al parecer asi es la unica forma de copiar por valor un array AAAAAAADIOSSSSS
  	// JSON.stringify convierte un objeto en una cadena.
		// JSON.parse convierte una cadena en un objeto.
  		// Combinándolos podemos convertir un objeto en una cadena y, después, invertir el proceso para crear una nueva estructura de datos :))))
	const cambio = {
    status: '',
    change: []
  };
  const ImporteMoneda = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100  
  }
  const cidConImportes = cidCopiaPorValor.map(monedas => {	
  	let importe = ImporteMoneda[monedas[0]]
  	monedas.push(importe)
  	return monedas
	})
  
  let valorDeCambioADar = Number((cash - price).toFixed(2)); // Vuelto a Dar
  const monedasConDinero = cidConImportes.filter(dinero => dinero[1] !== 0).reverse(); // Filtramos las monedas que tengan dinero (que su valor no sea 0)
  let monedasConDineroAUsar = monedasConDinero.filter(moneda => moneda[2] <= valorDeCambioADar  && moneda[1] !== 0) // Filtramos las monedas que su valor sea meno o igual a el vuelto a dar
  
  let total = Number(monedasConDineroAUsar.map(moneyBill => (moneyBill[1])).reduce((a, b) => a + b).toFixed(2)) // La sumatoria de los importes de todas las monedas que filtramos para usar
  
  // No hay plata para el cambio
  if (total < valorDeCambioADar) {
    cambio.status = 'INSUFFICIENT_FUNDS'
    cambio.change = []
  } 
  // La plata alcanza justo para el cambio
  else if (total === valorDeCambioADar) {
    cambio.status = 'CLOSED'
    cambio.change = cid
  }
  // La plata sobra para el cambio
  else { // total > valorDeCambioADar
    // Ahora debemos ver si tenemos las monedas correctas para el vuelto
    const montosVuelto = [] // Variable temporal para acumular las monedas con sus importes a dar de vuelto
    let vueltoMoneda = 0 // Variable temporal que corresponde al total del vuleto de cierta moneda
    let monedaActual = monedasConDineroAUsar[0][0] // Variable temporal usada para comprobar el cambio de moneda, cuando ya no se pueda usar la misma
    
    while (monedasConDineroAUsar.length !== 0) { // Mientras que exista monedas para usar realizamos el loop
      // [0][2] valor de la moneda
      // [0][1] importe de moneda
      // [0][0] nombre de la moneda
      
      vueltoMoneda = vueltoMoneda +  monedasConDineroAUsar[0][2] // Incrementamos el valor del vuelto de cierta moneda
      monedasConDineroAUsar[0][1] = Number((monedasConDineroAUsar[0][1] - monedasConDineroAUsar[0][2]).toFixed(2)) // Descontamos del total del importe de la moneda
      valorDeCambioADar = Number((valorDeCambioADar - monedasConDineroAUsar[0][2]).toFixed(2)) // pagamos una parte del vuelto
      
      // Debemos actualizar las monedas q podemos usar segun lo que falte del vuelto
      monedasConDineroAUsar = monedasConDineroAUsar.filter(moneda => moneda[2] <= valorDeCambioADar && moneda[1] !== 0) 
      
      //  Agregamos un nuevo billete al vuelto o modificamos el valor de un billete
      if (monedasConDineroAUsar.length === 0) { // La condicion sera verdadera cuando no exista mas billeter por utilizar 
      	montosVuelto.push([monedaActual, vueltoMoneda]) // Pusheamos la ultima moneda con su importe
      } else {
      	if (monedasConDineroAUsar[0][0] !== monedaActual) { // Cuando exista un cambio de moneda 
        	montosVuelto.push([monedaActual, vueltoMoneda])  // pusheamos la moneda usada con su importe
          vueltoMoneda = 0 // reiniciamos el contador de importe de moneda
          monedaActual = monedasConDineroAUsar[0][0]  // cambiamos a la siguiente moneda a usar
      	}
    	}
  	}
    
    // Comprovar si se pudo pagar todo el vuelto
    if (valorDeCambioADar !== 0) { // No tenemos las moendas correctar para poder dar el vuelto
      cambio.status = 'INSUFFICIENT_FUNDS'
    	cambio.change = []
      cid = cid // restablecemos las monedas usadas (no lo pide el programa)
    } else { // Tenemos las monedas correctas para el vuelto
   		cambio.status = 'OPEN'
      cambio.change = montosVuelto // copiamos todos las monedas con sus importes dados como vuelto
    }
  }
  return cambio;
}

checkCashRegister(19.50, 20, [["PENNY", 0.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
// {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
// {status: "INSUFFICIENT_FUNDS", change: []}

checkCashRegister(19.95, 20, [["PENNY", 0.05], ["NICKEL",0.0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) 
// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}


