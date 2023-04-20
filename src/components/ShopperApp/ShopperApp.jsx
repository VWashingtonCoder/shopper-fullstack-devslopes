import "./ShopperApp.css";
import { useEffect, useState } from "react";
import ProductService from "../../services/services";
import Navbar from "../Navbar/Navbar";

const stockItems = new ProductService();
const initStates = {
  accounts: [{ id: 0, username: "admin", pw: "Password$1" }],
  activeAccount: {},
  cart: [],
  page: "home",
  payCard: {},
  products: [],
  shipAddress: {},
  stock: []
};

const ShopperApp = () => {
  const [states, setStates] = useState(initStates);
  const { cart, page, products, stock } = states;

  useEffect(() => {
    stockItems
    .fetchProducts()
    .then((res) => {
      if (res && res.resp.ok) 
        setStates({ ...states, products: res.data, stock: res.data });
    })
    .catch((err) => {
      console.alert(err);
    });
  }, []);

  const navigatePage = (e) => {
    setStates({ ...states, page: e.target.value });
  }
  
  const filterProducts = (e) => {
    const category = e.target.value;
    let newProducts = [];
    
    if (category !== "all") {
        newProducts = stock.filter(product => 
            product.category.toLowerCase().includes(category)
        );
    } else newProducts = stock;

    setStates({ ...states, products: newProducts });
  }

  return (
    <div id="ShopperApp">
      <Navbar cartQty={cart.length} navigate={navigatePage} filter={filterProducts} />
        {/* { states.page === "home" &&

        } */}

    </div>
  );
};

export default ShopperApp;
