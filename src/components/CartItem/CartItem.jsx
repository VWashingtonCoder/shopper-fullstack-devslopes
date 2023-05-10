const CartItem = (props) => {
    const { category, src, name, price } = props;
    return (
        <div id="CartItem">
            <div className="img-container">
                <img src={src} alt="product" />
            </div>
            <div className="item-text-box">
                <p className="item-text name">
                    {name}
                </p>
                <p className="item-text category">
                    <span className="item-label">System: </span>
                    {category}
                </p>
                <p className="item-text price">
                    <span className="item-label">Price: </span>
                    ${price}
                </p>
            </div>
        </div>
    );
}

export default CartItem;