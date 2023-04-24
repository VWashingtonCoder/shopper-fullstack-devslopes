import {
  COMMERCE_API_URL,
  COMMERCE_API_PARAMS,
  COMMERCE_API_HEADERS,
} from "./constants";

class ProductService {
  async fetchProducts() {
    return new Promise(async (success, fail) => {
      try {
        const resp = await fetch(`${COMMERCE_API_URL}${COMMERCE_API_PARAMS}`, {
          headers: COMMERCE_API_HEADERS,
        });
        if (resp.ok) {
          const json = await resp.json();
          const data = json.data.map((product) => {
            const prodInfo = product.description;
            const infoText = prodInfo.slice(3, prodInfo.length - 4);

            return {
              key: product.id,
              category: product.categories[0].name,
              imgSrc: product.image.url,
              info: infoText,
              price: product.price.raw,
              prodName: product.name,
              stockQty: product.inventory.available,
            };
          });
          success({ resp, data });
        } else {
          fail({ error: "Invalid http request" });
        }
      } catch (err) {
        fail(err);
      }
    });
  }
}

export default ProductService;
