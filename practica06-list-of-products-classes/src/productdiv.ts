import { Product } from "./product.js";
import { Modal } from "./modal.js";
export class ProductDIV{
    private product: Product;
    private modal: Modal;

    constructor(product: Product, modal: Modal) {
        this.product = product;
        this.modal = modal;
    }

    public getCreateProductImg(): HTMLDivElement {
        let radioProduct: HTMLInputElement = document.createElement("input");
        radioProduct.setAttribute("type","radio");
        radioProduct.setAttribute("name","move");
        let divProductImg1: HTMLDivElement = document.createElement("div");
        divProductImg1.setAttribute("class","product-img-radio");

        let imgProduct: HTMLImageElement = document.createElement("img");
        imgProduct.setAttribute("src", this.product.image);
        let divProductImg2: HTMLDivElement = document.createElement("div");

        let divProductImg: HTMLDivElement = document.createElement("div");
        divProductImg.setAttribute("class","product-img");

        divProductImg1.appendChild(radioProduct);
        divProductImg2.appendChild(imgProduct);
        divProductImg.appendChild(divProductImg1);
        divProductImg.appendChild(divProductImg2)

        return divProductImg;
    }

    public getCreateProductName(): HTMLDivElement {
        let spanProduct: HTMLSpanElement = document.createElement("span");
        spanProduct.innerText = this.product.category;
        let iconTag: HTMLElement = document.createElement("i");
        iconTag.setAttribute("class","bi bi-tag");
        let nameProduct: HTMLHeadElement = document.createElement("h5");
        nameProduct.innerText = this.product.title;
        let divProductName: HTMLDivElement = document.createElement("div");
        divProductName.setAttribute("class","product-name");
        divProductName.appendChild(nameProduct);
        divProductName.appendChild(iconTag);
        divProductName.appendChild(spanProduct);

        return divProductName;
    }

    public getCreateProductPrice(): HTMLDivElement {
        let spanStock: HTMLSpanElement = document.createElement("span");
        let [label1, classes1]: [label: string, classes: string] = this.checkStock();
        spanStock.innerText = label1;
        spanStock.setAttribute("class",classes1);

        let priceProduct: HTMLElement = document.createElement("h6");
        priceProduct.innerText = `$${this.product.price}`;
        let iconCamera: HTMLElement = document.createElement("i");
        iconCamera.setAttribute("class", "bi bi-camera-fill");
        iconCamera.addEventListener("click", this.handleArticleClickEvent.bind(this));

        let divProductPrice1: HTMLDivElement = document.createElement("div");
        let divProductPrice2: HTMLDivElement = document.createElement("div");
        let divProductPrice: HTMLDivElement = document.createElement("div");

        divProductPrice1.setAttribute("class", "product-price-1");
        divProductPrice2.setAttribute("class", "product-price-2");
        divProductPrice.setAttribute("class", "product-price");

        divProductPrice1.appendChild(priceProduct);
        divProductPrice1.appendChild(spanStock);
        divProductPrice2.appendChild(iconCamera);
        divProductPrice.appendChild(divProductPrice1);
        divProductPrice.appendChild(divProductPrice2);

        return divProductPrice;
    }

    private checkStock():[label: string, classes: string] {
        if(this.product.stock == 0) return ['OUTOFSTOCK','badge text-bg-danger']
        else if( this.product.stock < 10) return ['LOWSTOCK','badge text-bg-warning']
        else return ['INSTOCK','badge text-bg-success']
    }

    private handleArticleClickEvent(){
        this.modal.show();
        let [stocklabel1, stockclasses1]: [label: string, classes: string] = this.checkStock();
        this.modal.setModal(this.product.title, this.product.price, stocklabel1, stockclasses1, this.product.category, this.product.description, this.product.image);
        // this.modal.setBody(...this.getImagesProducts());
    }
}