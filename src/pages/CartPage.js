import Cart from "../features/cart/Cart";
import Navbar from "../features/navbar/Navbar";

function CartPage() {
  return (
    <div>
      <Navbar>
        <h1 className="mx-auto text-center text-2xl">My Cart</h1>
        <Cart></Cart>
      </Navbar>
    </div>
  );
}

export default CartPage;
