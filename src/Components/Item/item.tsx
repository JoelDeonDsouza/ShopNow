import Button from "@material-ui/core/Button";
import { CartItem } from "../../App";
import { Wrapper } from "./styles";

type Props = {
  item: CartItem;
  handleAddToCart: (clickedItem: CartItem) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.discription}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add</Button>
  </Wrapper>
);

export default Item;
