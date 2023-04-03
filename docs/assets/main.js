import { ListProduct } from "./list-product.js";
const containerButtonsControlRef = document.getElementById("products-buttons");
const searchInputRef = document.getElementById("input-products");
const containerProductsRef = document.getElementById("list-products");
const templateRef = document.getElementById("template-product");
const modalRef = document.getElementById("main-modal-container");
const listProduct = new ListProduct(containerButtonsControlRef, searchInputRef, containerProductsRef, templateRef, modalRef);
