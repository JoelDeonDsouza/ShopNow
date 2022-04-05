import CartItemsList from "../CartItem/cartItem";
import { Wrapper } from "./styles";

import { CartItem } from "../../App";

type Props = {
  cartItems: CartItem[];
  addToCart: (clickedItem: CartItem) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calTotal = (items: CartItem[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <Wrapper>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Add items to view in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItemsList
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total:${calTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
