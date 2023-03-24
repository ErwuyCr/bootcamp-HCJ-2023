export class ProductDIV {
    constructor(product, modal) {
        this.product = product;
        this.modal = modal;
    }
    getCreateProductImg() {
        let radioProduct = document.createElement("input");
        radioProduct.setAttribute("type", "radio");
        radioProduct.setAttribute("name", "move");
        let divProductImg1 = document.createElement("div");
        divProductImg1.setAttribute("class", "product-img-radio");
        let imgProduct = document.createElement("img");
        imgProduct.setAttribute("src", this.product.image);
        let divProductImg2 = document.createElement("div");
        let divProductImg = document.createElement("div");
        divProductImg.setAttribute("class", "product-img");
        divProductImg1.appendChild(radioProduct);
        divProductImg2.appendChild(imgProduct);
        divProductImg.appendChild(divProductImg1);
        divProductImg.appendChild(divProductImg2);
        return divProductImg;
    }
    getCreateProductName() {
        let spanProduct = document.createElement("span");
        spanProduct.innerText = this.product.category;
        let iconTag = document.createElement("i");
        iconTag.setAttribute("class", "bi bi-tag");
        let nameProduct = document.createElement("h5");
        nameProduct.innerText = this.product.title;
        let divProductName = document.createElement("div");
        divProductName.setAttribute("class", "product-name");
        divProductName.appendChild(nameProduct);
        divProductName.appendChild(iconTag);
        divProductName.appendChild(spanProduct);
        return divProductName;
    }
    getCreateProductPrice() {
        let spanStock = document.createElement("span");
        let [label1, classes1] = this.checkStock();
        spanStock.innerText = label1;
        spanStock.setAttribute("class", classes1);
        let priceProduct = document.createElement("h6");
        priceProduct.innerText = `$${this.product.price}`;
        let iconCamera = document.createElement("i");
        iconCamera.setAttribute("class", "bi bi-camera-fill");
        iconCamera.addEventListener("click", this.handleArticleClickEvent.bind(this));
        let divProductPrice1 = document.createElement("div");
        let divProductPrice2 = document.createElement("div");
        let divProductPrice = document.createElement("div");
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
    checkStock() {
        if (this.product.stock == 0)
            return ['OUTOFSTOCK', 'badge text-bg-danger'];
        else if (this.product.stock < 10)
            return ['LOWSTOCK', 'badge text-bg-warning'];
        else
            return ['INSTOCK', 'badge text-bg-success'];
    }
    handleArticleClickEvent() {
        this.modal.show();
        let [stocklabel1, stockclasses1] = this.checkStock();
        this.modal.setModal(this.product.title, this.product.price, stocklabel1, stockclasses1, this.product.category, this.product.description, this.product.image);
        // this.modal.setBody(...this.getImagesProducts());
    }
}
