import { productsDummy } from "./dataDummy.js";
import { RunListProduct } from "./runListProduct.js";
let listProducts = productsDummy.products.map((product) => {
    return {
        title: product.title,
        description: product.description,
        price: product.price,
        stock: product.stock,
        category: product.category,
        image: product.images[0]
    };
});
const ContainerProductsRef = document.getElementById("list-products");
const searchInputRef = document.getElementById("input-products");
const modalRef = document.getElementById("main-modal-container");
const runListOfProduct = new RunListProduct(listProducts, ContainerProductsRef, modalRef, searchInputRef);
runListOfProduct.createProducts();
