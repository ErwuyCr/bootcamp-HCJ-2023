import { ProductGUI } from "./productGUI.js";
import { Modal } from "./modal.js";
import { SearchProduct } from "./searchProduct.js";
export class RunListProduct {
    constructor(listProducts, ContainerProductsRef, modalRef, searchInputRef) {
        this.listProducts = listProducts;
        this.ContainerProductsRef = ContainerProductsRef;
        this.modalRef = modalRef;
        this.searchInputRef = searchInputRef;
    }
    createProducts() {
        let modal = new Modal(this.modalRef);
        this.listProducts.map((product) => {
            let divProduct = new ProductGUI(product, modal);
            return divProduct.getProductGUI();
        }).forEach((divProduct) => this.ContainerProductsRef.appendChild(divProduct));
        let productsHTML = this.ContainerProductsRef.querySelectorAll('.product');
        let search = new SearchProduct(this.searchInputRef, productsHTML);
        search.handlerEventSearch();
    }
    printMyObject() {
        console.log(this.listProducts);
    }
}
