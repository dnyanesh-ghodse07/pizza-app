import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="text-center p-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="font-semibold p-4">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
