import "./ShopperApp.css";
import { useEffect, useState } from "react";
import { generateStockQtys } from "../helpers";
import ProductService from "../../services/services";
import Navbar from "../Navbar/Navbar";
import Homepage from "../../pages/Homepage/Homepage";

const stockItems = new ProductService();
const initAccounts = [{ id: 0, username: "admin", pw: "Password$1" }];

const ShopperApp = () => {
  const [accounts, setAccounts] = useState(initAccounts);
  const [activeAccount, setActiveAccount] = useState({});
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");
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
    setPage(e.target.value);
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

  return (
    <div id="ShopperApp">
      <Navbar
        cartQty={cart.length}
        navigate={navigatePage}
        filter={filterProducts}
      />
      {states.page === "home" && (
        <Homepage
          products={products}
          stockQty={stockQtys}
          addToCart={addToCart}
          updateQty={updateStockQtys}
        />
      )}
    </div>
  );
};

export default ShopperApp;
