import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

const UpdateItemQuantity = ({ pizzaId }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };

  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };
  return (
    <div>
      <Button type="round" onClick={handleIncrease}>
        +
      </Button>
      <Button type="round" onClick={handleDecrease}>
        -
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
