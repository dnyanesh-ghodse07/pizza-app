import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((pizza) => {
        return <MenuItem key={pizza.id} pizza={pizza} />;
      })}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
