const productsArray = [
    {

        id: "price_1OQLY6Ew92TmeXWitNqzjLNP",
        title:"Coffee",
        price: 4.99
    },
    {
        id: "price_1OQLZmEw92TmeXWi68giecuJ",
        title:"Sunglasses",
        price: 9.99
    },
    {
        id: "price_1OQLcKEw92TmeXWigVRGY5n8",
        title:"Camera",
        price: 34.99
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id ===id )

    if(productData === undefined) {
        console.log("Product Data does not exist for ID: " + id);
        return undefined;
    }
    return productData;
}

export {productsArray, getProductData}