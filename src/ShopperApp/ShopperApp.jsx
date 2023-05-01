import "./ShopperApp.css";
import { useEffect, useState } from "react";
import { generateStockQtys } from "../components/helpers";
import ProductService from "../services/services";
import Navbar from "../components/Navbar/Navbar";
import Homepage from "../pages/Homepage/Homepage";
import AccountPage from "../pages/AccountPage/AccountPage";

const stockItems = new ProductService();
const initAccounts = [{ 
  id: 0, 
  email: "admin@chgames.com", 
  pw: "Password$1",
  name: "Admin-sama"
}];

const ShopperApp = () => {
  const [accounts, setAccounts] = useState(initAccounts);
  const [activeAccount, setActiveAccount] = useState({});
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("login");
  const [payCard, setPayCard] = useState({});
  const [products, setProducts] = useState([]);
  const [shipAddress, setShipAddress] = useState({});
  const [stock, setStock] = useState([]);
  const [stockQtys, setStockQtys] = useState({});

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
    const cartProductIdx = cart.findIndex((item) => item.key === key);
    let newCartItem = {};

    if (cartProductIdx === -1) {
      newCartItem = {
        key: product.key,
        name: product.prodName,
        category: product.category,
        imgSrc: product.imgSrc,
        price: product.price,
        qty: stockQtys[key],
      };
      setCart([...cart, newCartItem]);
    } else {
      const newCart = cart.map((item) => {
        if (item.key === key) item.qty = stockQtys[key];
        return item;
      });
      setCart(newCart);
    }
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

  const updateActiveAccount = (account) => {
    setActiveAccount(account);
  }

  return (
    <div id="ShopperApp">
      <div className="navigation">
        <Navbar
          active={activeAccount}
          cartQty={cart.length}
          navigate={navigatePage}
          filter={filterProducts}
        />
      </div>
      
      <div className="page-container">
        {page === "home" && (
          <Homepage
            products={products}
            stockQty={stockQtys}
            addToCart={addToCart}
            updateQty={updateStockQtys}
          />
        )}
      </div>
      
      <div className="page-container">
          {page === "login" && (
            <AccountPage 
              accounts={accounts} 
              active={activeAccount}
              updateActive={updateActiveAccount}
              navigate={navigatePage}
            />
          )}
      </div>
    </div>
  );
};

export default ShopperApp;
