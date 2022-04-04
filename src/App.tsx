import { useState } from "react";
import { useQuery } from "react-query";

import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { Wrapper } from "./App.styles";

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
  const { data, isLoading, error } = useQuery<CartItem[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = () => null;

  const handleAddToCart = () => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Error</div>;

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
