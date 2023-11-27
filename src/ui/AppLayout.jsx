import React, { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

const AppLayout = ({ children }) => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        <h1>Main</h1>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
