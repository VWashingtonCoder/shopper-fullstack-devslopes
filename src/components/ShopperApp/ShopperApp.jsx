import React from "react";
import ProductService from "../../services/services";

const products = new ProductService();

class ShopperApp extends React.Component {
    state = {
        data: [],
        
    }

    componentDidMount() {
        products.fetchProducts().then((res) => {
            if (res && res.resp.ok){
                this.setState({
                    data: res.data
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