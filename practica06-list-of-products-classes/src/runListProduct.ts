import { Product } from "./product.js";
import {ProductGUI} from "./productGUI.js";
import { Modal } from "./modal.js";
import {SearchProduct} from "./searchProduct.js";
export class RunListProduct {

    private listProducts: Product[];
    private ContainerProductsRef: HTMLDivElement;
    private modalRef: HTMLDivElement;
    private searchInputRef: HTMLInputElement;

    constructor(listProducts: Product[], ContainerProductsRef: HTMLDivElement, modalRef: HTMLDivElement, searchInputRef: HTMLInputElement) {
        this.listProducts = listProducts;
        this.ContainerProductsRef = ContainerProductsRef;
        this.modalRef = modalRef;
        this.searchInputRef = searchInputRef;
    }

    public createProducts(): void{
        let modal = new Modal(this.modalRef);
        this.listProducts.map((product: Product) => {
            let divProduct = new ProductGUI(product, modal);
            return divProduct.getProductGUI();
        }).forEach((divProduct: HTMLDivElement)=>this.ContainerProductsRef.appendChild(divProduct));
        let productsHTML: NodeListOf<HTMLDivElement> = this.ContainerProductsRef.querySelectorAll('.product') as NodeListOf<HTMLDivElement>;
        let search = new SearchProduct(this.searchInputRef, productsHTML);
        search.handlerEventSearch();
    }

    public printMyObject(): void{
        console.log(this.listProducts);
    }
}