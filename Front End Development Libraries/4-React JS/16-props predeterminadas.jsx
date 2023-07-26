// Se puede asignar un prop default para cada componenete 

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Cambia el código debajo de esta línea

ShoppingCart.defaultProps = {
  items: 0
}