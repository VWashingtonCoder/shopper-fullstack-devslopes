export function generateStockArr(qty) {
    let qtyArr = [];
    for(let i = 1; i < qty + 1; i++) {
        qtyArr = [ ...qtyArr, i];
    }
    return qtyArr.length > 0 ? qtyArr : [0];
}

export function generateStockQtys(stock) {
    let stockQuantities = {};
    stock.forEach(item => {
        stockQuantities = {...stockQuantities, [item.key]: 1}
    });
    return stockQuantities;
}