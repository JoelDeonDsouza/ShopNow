import { useState } from "react";
import { useQuery } from "react-query";

import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { Wrapper, StyledButton } from "./App.styles";
import Item from "./Components/Item/item";
import Cart from "./Components/Cart/cart";

export type CartItem = {
  id: number;
  title: string;
  category: string;
  discription: string;
  image: string;
  price: number;
  amount: number;
};

const getProducts = async (): Promise<CartItem[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItem[]);
  const { data, isLoading, error } = useQuery<CartItem[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = (items: CartItem[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItem) => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Error</div>;

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
