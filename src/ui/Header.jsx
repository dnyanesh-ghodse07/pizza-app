import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header>
      <Link to="/">Fast Pizza</Link>
      <SearchOrder />
    </header>
  );
};

export default Header;
