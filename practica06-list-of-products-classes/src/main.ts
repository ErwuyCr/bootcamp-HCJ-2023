import {ListProduct} from "./list-product.js";

const containerButtonsControlRef: HTMLDivElement = document.getElementById("products-buttons") as HTMLDivElement;
const searchInputRef: HTMLInputElement = document.getElementById("input-products") as HTMLInputElement;
const containerProductsRef: HTMLDivElement = document.getElementById("list-products") as HTMLDivElement;
const templateRef: HTMLTemplateElement = document.getElementById("template-product") as HTMLTemplateElement;
const modalRef: HTMLDivElement = document.getElementById("main-modal-container") as HTMLDivElement;

const listProduct = new ListProduct(containerButtonsControlRef, searchInputRef, containerProductsRef, templateRef, modalRef);