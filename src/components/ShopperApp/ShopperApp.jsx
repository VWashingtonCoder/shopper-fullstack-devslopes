import React from "react";
import ProductService from "../../services/services";

const products = new ProductService();

class ShopperApp extends React.Component {
    state = {
        accounts: [
            {id: 0, username: "admin", pw: "Password$1"}
        ],
        activeAccount: {},
        cart: [],
        page: "home",
        payCard: {},
        products: [],
        shipAddress: {},
    }

    componentDidMount() {
        products.fetchProducts().then((res) => {
            if (res && res.resp.ok){
                this.setState({
                    products: res.data
                });
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return(
            <div id="ShopperApp">

            </div>
        )
    }
} 

export default ShopperApp;