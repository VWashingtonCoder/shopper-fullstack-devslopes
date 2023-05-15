import "./ShopperApp.css";
import { useEffect, useState } from "react";
import {
  generateStockQtys,
  getCartSubtotal,
  getNewCart,
  getCartTotalQty,
} from "../data/helpers";
import { initAccounts } from "../data/constants";
import ProductService from "../services/services";
import Navbar from "../components/Navbar/Navbar";
import Homepage from "../pages/Homepage/Homepage";
import AccountPage from "../pages/AccountPage/AccountPage";
import Summary from "../pages/Summary/Summary";
import Cart from "../pages/Cart/Cart";

const stockItems = new ProductService();

const ShopperApp = () => {
  const [accounts, setAccounts] = useState(initAccounts);
  const [activeAccount, setActiveAccount] = useState({});
  const [cart, setCart] = useState([]);
  const [cartQty, setCartQty] = useState(0);
  const [page, setPage] = useState("home");
  const [payCard, setPayCard] = useState({});
  const [products, setProducts] = useState([]);
  const [shipAddress, setShipAddress] = useState({});
  const [stock, setStock] = useState([]);
  const [stockQtys, setStockQtys] = useState({});
  const [totals, setTotals] = useState({
    sub: 0,
    ship: 0,
    total: 0,
  });
  const [summaryDisabled, setSummaryDisabled] = useState(false);

  useEffect(() => {
    stockItems
      .fetchProducts()
      .then((res) => {
        if (res && res.resp.ok) {
          setProducts(res.data);
          setStock(res.data);
          setStockQtys(generateStockQtys(res.data));
        }
      })
      .catch((err) => {
        console.alert(err);
      });
  }, []);

  const addToCart = (e) => {
    const key = e.target.value;
    const product = products.find((item) => item.key === key);
    const qty = stockQtys[key];
    const newCart = getNewCart(cart, product, qty);
    const newSubtotal = getCartSubtotal(newCart);

    setCart(newCart);
    setCartQty(getCartTotalQty(newCart));
    setTotals({ ...totals, sub: newSubtotal, total: newSubtotal });
  };

  const updateItemQty = (e) => {
    const { name, value } = e.target;
    const product = products.find((item) => item.key === name);
    const newQty = Number(value);
    const newCart = getNewCart(cart, product, newQty);
    const newSubtotal = getCartSubtotal(newCart);

    setCart(newCart);
    setCartQty(getCartTotalQty(newCart));
    setStockQtys({ ...stockQtys, [name]: newQty });
    setTotals({ ...totals, sub: newSubtotal, total: newSubtotal });
  };

  const navigatePage = (e) => {
    const page = e.target ? e.target.value : e;
    setPage(page);
  };

  const filterProducts = (e) => {
    const category = e.target.value;
    let newProducts = [];

    if (category !== "all") {
      newProducts = stock.filter((product) =>
        product.category.toLowerCase().includes(category)
      );
    } else newProducts = stock;

    setProducts(newProducts);
  };

  const updateStockQtys = (e) => {
    const { name, value } = e.target;
    setStockQtys({ ...stockQtys, [name]: Number(value) });
  };

  const addToAccounts = (newAcc) => {
    setAccounts([...accounts, newAcc]);
  };

  const updateActiveAccount = (account) => {
    setActiveAccount(account);
  };

  const checkoutPay = () => {
    let nextPage = "";

    if (page === "cart") {
      nextPage = "payShip";
      setSummaryDisabled(true);
    } else if (page === "payShip") {
      nextPage = "confirm"
    }

    setPage(nextPage);
  }

  return (
    <div id="ShopperApp">
      <div className="navigation">
        <Navbar
          active={activeAccount}
          cartQty={cartQty}
          navigate={navigatePage}
          filter={filterProducts}
        />
      </div>

      {(page === "home" || page === "login") && (
        <div className="page-container">
          {page === "home" && (
            <Homepage
              products={products}
              stockQty={stockQtys}
              addToCart={addToCart}
              updateQty={updateStockQtys}
            />
          )}

          {page === "login" && (
            <AccountPage
              accounts={accounts}
              addAccount={addToAccounts}
              active={activeAccount}
              updateActive={updateActiveAccount}
              navigate={navigatePage}
            />
          )}
        </div>
      )}

      {(page === "cart" || page === "payShip") && (
        <div className="page-container dual-pages">
          {page === "cart" && (
            <Cart
              cart={cart}
              remove={updateItemQty}
              updateQty={updateItemQty}
            />
          )}

          <Summary
            cartQty={cartQty}
            page={page}
            totals={totals}
            checkPay={checkoutPay}
            disabled={summaryDisabled}
          />
        </div>
      )}
    </div>
  );
};

export default ShopperApp;
