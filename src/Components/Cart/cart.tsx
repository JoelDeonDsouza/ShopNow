import CartItemsList from "../CartItem/cartItem";
import { Wrapper } from "./styles";

import { CartItem } from "../../App";

type Props = {
  cartItems: CartItem[];
  addToCart: (clickedItem: CartItem) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Add items to view in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItemsList />
      ))}
    </Wrapper>
  );
};

export default Cart;
