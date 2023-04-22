import "./Navbar.css";
import { MdGames } from "react-icons/md";
import { navBtns, prodCategories } from "../comp-constants";

const Navbar = (props) => {
  const { cartQty, navigate, filter } = props;
  return (
    <div id="Navbar" className="container-fluid">
      <div className="nav-top flex-align-center">
        <div className="nav-head">
          <h2>
            Chill Games <MdGames className="icon games" />
          </h2>
        </div>
        <div className="nav-menu flex-align-center">
          {navBtns.map((btn) => {
            const { key, icon, text } = btn;
            return (
              <button
                key={key}
                className="nav-btn flex-align-center"
                value={key}
                onClick={navigate}
              >
                {icon}
                {text}
                {key === "cart" && `${cartQty} Items`}
              </button>
            );
          })}
        </div>
      </div>
      <div className="nav-bottom">
        {prodCategories.map((category) => (
          <button
            key={category.key}
            className="nav-btn"
            value={category.key}
            onClick={filter}
          >
            {category.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
