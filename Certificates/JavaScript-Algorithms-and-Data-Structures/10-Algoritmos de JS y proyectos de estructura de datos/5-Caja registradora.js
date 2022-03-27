//! Caja registradora

// https://www.freecodecamp.org/espanol/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register


//* Diseña una función checkCashRegister() que acepte el precio de compra como primer argumento (price), la cantidad pagada como segundo argumento (cash), y el dinero en efectivo que tiene la caja (cid) como tercer argumento.

//* cid es un arreglo 2D que enumera las monedas disponibles.

//* La función checkCashRegister() siempre debe devolver un objeto con una clave status y una clave change.

//* Devuelve {status: "INSUFFICIENT_FUNDS", change: []} si el efectivo en caja es menor que el cambio necesario, o si no puedes devolver el cambio exacto.

//* Devuelve {status: "CLOSED", change: [...]} si el efectivo en caja como valor de la clave change es igual al cambio que se debe entregar

//* En cualquier otro caso, devuelve {status: "OPEN", change: [...]}, con el cambio a entregar en monedas y billetes, ordenados de mayor a menor, como valor de la clave change.


function checkCashRegister(price, cash, cid) {
  const total = Number(cid.map(moneyBill => moneyBill[1]).reduce((a, b) => a + b).toFixed(2))
  // console.log(total, cash - price)
  
  let cambio = {
    status: ( total < (cash - price) ) ? 'INSUFFICIENT_FUNDS' : (total === (cash - price)) ? 'CLOSED' : 'OPEN',
    change: ( total < (cash - price) ) ? [] : ( total === (cash - price) ) ? cid.reverse().find(dinero => 1) : 0
  };
  if (cambio.status === 'INSUFFICIENT_FUNDS') {/*return cambio*/} // Retorno con saldo insuficiente

  // return cambio;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);