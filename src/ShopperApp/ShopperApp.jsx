import "./ShopperApp.css";
import { useEffect, useState } from "react";
import { generateStockQtys } from "../data/helpers";
import ProductService from "../services/services";
import Navbar from "../components/Navbar/Navbar";
import Homepage from "../pages/Homepage/Homepage";
import AccountPage from "../pages/AccountPage/AccountPage";
import Summary from "../pages/Summary/Summary";
import Cart from "../pages/Cart/Cart";

const stockItems = new ProductService();
const initAccounts = [
  {
    id: 0,
    email: "admin@chgames.com",
    password: "Password$1",
    name: "Admin-sama",
  },
];

const ShopperApp = () => {
  const [accounts, setAccounts] = useState(initAccounts);
  const [activeAccount, setActiveAccount] = useState({});
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("cart");
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

  function getCartSubtotal(cart) {
    let subtotal = 0;

    cart.forEach(item => 
      subtotal = Number((subtotal + item.subtotal).toFixed(2))
    );

    return subtotal;
  }

  function getNewCart(data) {
    const { cart, item, qty } = data;
    const { key, prodName, category, imgSrc, price } = item;
    const cartProductIdx = cart.findIndex((product) => product.key === key);
    let newCart = [];
    let newItem = {};
    let cartSubtotal = 0;

    if (cartProductIdx === -1) {
      newItem = {
        key: key,
        name: prodName,
        category: category,
        imgSrc: imgSrc,
        price: price,
        qty: qty,
        subtotal: Number((price * qty).toFixed(2)),
      }
      newCart = [...cart, newItem];
    } else {
      newCart = cart.map((item) => {
        if (item.key === key){
         item = { 
          ...item, qty: qty, subtotal: Number((price * qty).toFixed(2)) 
          };
        } 
        return item;
      }); 
    }

  
    // let cartSubtotal = 0;
    // 
    // if (cartProductIdx !== -1) {
    //   newCart = cart.map((item) => {
    //     if (item.key === key){
    //       item.qty = stockQtys[key];
    //       item.subtotal = itemSubtotal;
    //     } 
    //     return item;
    //   }); 
    // } else {
    //   newCartItem = {
    //     key: product.key,
    //     name: product.prodName,
    //     category: product.category,
    //     imgSrc: product.imgSrc,
    //     price: product.price,
    //     qty: stockQtys[key],
    //     subtotal: itemSubtotal,
    //   };
    //   newCart = [ ...cart, newCartItem ];
    // }







    // console.log(newCart);
  }

  const addToCart = (e) => {
    const key = e.target.value;
    const product = products.find((item) => item.key === key);
    const newCartData = {
      cart: cart,
      item: product,
      qty: stockQtys[key]
    }
    getNewCart(newCartData);


    
    

    // cartSubtotal = getCartSubtotal(newCart);




    // setCart(newCart);
    // setTotals({ 
    //   ...totals,
    //   sub: getCartSubtotal(newCart),
    //   total:  
    // })
    
  };

  const updateItemQty = (e) => {
    const { name, value } = e.target;
    const newQty = Number(value);
    let newSubtotal = 0;
    let newCart = [];


    if (newQty > 0) {
      newCart = cart.map((item) => {
        if (item.key === name) {
          item.qty = newQty;
          item.subtotal = Number((item.price * newQty).toFixed(2));
        }
        return item;
      });
    } else {
      newCart = cart.filter(item => item.key !== name);
    }
    
    newCart.forEach(
      (item) => (newSubtotal = Number((newSubtotal + item.subtotal).toFixed(2)))
    );

    console.log(newSubtotal);

    setCart(newCart);
    setStockQtys({ ...stockQtys, [name]: Number(value) });
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

 

  const removeItemFromCart = ({target: {value}}) => {
    const newCart = cart.filter(item => item.key !== value);
    const subtotal = getCartSubtotal(newCart);
    setCart(newCart);
    setTotals({ 
      ...totals,
      sub: subtotal,
      total: subtotal
    })
  }

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
              remove={removeItemFromCart} 
              updateQty={updateItemQty}
            />
          )}

          <Summary cartQty={cart.length} page={page} totals={totals} />
        </div>
      )}
    </div>
  );
};

export default ShopperApp;
