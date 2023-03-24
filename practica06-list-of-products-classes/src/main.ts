import { productsDummy } from "./dataDummy.js";
import { Product } from "./product.js";
import { RunListProduct } from "./runListProduct.js";

let listProducts: Product[] = productsDummy.products.map((product) => {
    return {
        title: product.title,
        description: product.description,
        price: product.price,
        stock: product.stock,
        category: product.category,
        image: product.images[0]
    };
});
const ContainerProductsRef: HTMLDivElement = document.getElementById("list-products") as HTMLDivElement;
const searchInputRef: HTMLInputElement = document.getElementById("input-products") as HTMLInputElement;
const modalRef: HTMLDivElement = document.getElementById("main-modal-container") as HTMLDivElement;

const runListOfProduct = new RunListProduct(listProducts, ContainerProductsRef, modalRef, searchInputRef);
runListOfProduct.createProducts();
