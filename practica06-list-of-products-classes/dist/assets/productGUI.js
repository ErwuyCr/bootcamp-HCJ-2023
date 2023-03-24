import { ProductDIV } from "./productdiv.js";
export class ProductGUI {
    constructor(product, modal) {
        this.product = product;
        this.modal = modal;
    }
    getProductGUI() {
        const productDIV = new ProductDIV(this.product, this.modal);
        let divProductGUI = document.createElement("div");
        divProductGUI.setAttribute("class", "product");
        let imgDIV = productDIV.getCreateProductImg();
        let nameDIV = productDIV.getCreateProductName();
        let priceDIV = productDIV.getCreateProductPrice();
        divProductGUI.appendChild(imgDIV);
        divProductGUI.appendChild(nameDIV);
        divProductGUI.appendChild(priceDIV);
        return divProductGUI;
    }
}
