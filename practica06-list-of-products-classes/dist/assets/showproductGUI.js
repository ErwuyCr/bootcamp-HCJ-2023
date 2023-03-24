import { ProductDIV } from "./productdiv";
export class ProductGUI {
    constructor(image, title, price, category, stock) {
        this.image = image;
        this.title = title;
        this.price = price;
        this.category = category;
        this.stock = stock;
    }
    showProductGUI() {
        let divProduct = document.createElement("div");
        divProduct.setAttribute("class", "product");
        const productOfList = new ProductDIV(this.image, this.title, this.price, this.category, this.stock);
        let imgDIV = productOfList.getCreateProductImg();
        let nameDIV = productOfList.getCreateProductName();
        let priceDIV = productOfList.getCreateProductPrice();
        divProduct.appendChild(imgDIV);
        divProduct.appendChild(nameDIV);
        divProduct.appendChild(priceDIV);
        return divProduct;
    }
}
