import {ProductDIV} from "./productdiv.js";
import { Product } from "./product.js";
import { Modal } from "./modal.js";
export class ProductGUI{
    private product: Product;
    private modal: Modal;
    constructor(product: Product, modal: Modal) {
        this.product = product;
        this.modal = modal;
    }
    public getProductGUI(): HTMLDivElement {
        const productDIV = new ProductDIV(this.product, this.modal);

        let divProductGUI: HTMLDivElement = document.createElement("div");
        divProductGUI.setAttribute("class", "product")
        let imgDIV: HTMLDivElement = productDIV.getCreateProductImg();
        let nameDIV: HTMLDivElement = productDIV.getCreateProductName();
        let priceDIV: HTMLDivElement = productDIV.getCreateProductPrice();

        divProductGUI.appendChild(imgDIV);
        divProductGUI.appendChild(nameDIV);
        divProductGUI.appendChild(priceDIV);

        return divProductGUI;
    }
}