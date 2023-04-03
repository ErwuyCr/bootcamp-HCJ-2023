import { Modal } from "./modal.js";
export class ListProduct {
    constructor(containerButtonsControlRef, searchInputRef, containerProductsRef, templateRef, modalRef) {
        this.containerButtonsControlRef = containerButtonsControlRef;
        this.searchInputRef = searchInputRef;
        this.containerProductsRef = containerProductsRef;
        this.templateRef = templateRef;
        this.modalRef = modalRef;
        this.getProductData("", (listProducts) => {
            this.createProducts(listProducts);
        });
    }
    getProductData(urlSearch, callback) {
        const xHttp = new XMLHttpRequest();
        const url = 'https://dummyjson.com/product/';
        xHttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const listProducts = JSON.parse(this.responseText).products.map((product) => {
                    return {
                        title: product.title,
                        description: product.description,
                        price: product.price,
                        stock: product.stock,
                        category: product.category,
                        image: product.images[0]
                    };
                });
                callback(listProducts);
            }
        };
        xHttp.open('GET', `${url}${urlSearch}`);
        xHttp.send();
    }
    createProducts(listProducts) {
        let fragment = document.createDocumentFragment();
        listProducts.forEach(product => {
            let cloneProduct = document.importNode(this.templateRef.content, true);
            cloneProduct.querySelector('#product-img').children[1].firstElementChild.setAttribute("src", product.image);
            cloneProduct.querySelector('#product-name').firstElementChild.textContent = product.title;
            cloneProduct.querySelector('#product-name').lastElementChild.textContent = product.category;
            cloneProduct.querySelector('#product-price-1').children[0].textContent = `$${product.price}`;
            let [label, classes] = this.checkStock(product.stock);
            cloneProduct.querySelector('#product-price-1').children[1].textContent = label;
            cloneProduct.querySelector('#product-price-1').children[1].setAttribute("class", classes);
            cloneProduct.querySelector('#product-price-2').firstElementChild.addEventListener('click', () => {
                const modal = new Modal(this.modalRef);
                this.handleArticleClickEvent(product, modal);
            });
            const divProduct = cloneProduct.firstElementChild;
            const radio = divProduct.querySelector('#product-img-radio').firstElementChild;
            divProduct.addEventListener('click', (event) => {
                if (!radio.checked) {
                    if (event.currentTarget === this.containerProductsRef.firstElementChild) {
                        this.containerButtonsControlRef.children[0].setAttribute("style", "opacity:0.4");
                        this.containerButtonsControlRef.children[1].setAttribute("style", "opacity:0.4");
                        this.containerButtonsControlRef.children[2].setAttribute("style", "opacity:1");
                        this.containerButtonsControlRef.children[3].setAttribute("style", "opacity:1");
                    }
                    else if (event.currentTarget === this.containerProductsRef.lastElementChild) {
                        this.containerButtonsControlRef.children[0].setAttribute("style", "opacity:1");
                        this.containerButtonsControlRef.children[1].setAttribute("style", "opacity:1");
                        this.containerButtonsControlRef.children[2].setAttribute("style", "opacity:0.4");
                        this.containerButtonsControlRef.children[3].setAttribute("style", "opacity:0.4");
                    }
                    else {
                        this.containerButtonsControlRef.children[0].setAttribute("style", "opacity:1");
                        this.containerButtonsControlRef.children[1].setAttribute("style", "opacity:1");
                        this.containerButtonsControlRef.children[2].setAttribute("style", "opacity:1");
                        this.containerButtonsControlRef.children[3].setAttribute("style", "opacity:1");
                    }
                    radio.checked = true;
                }
            });
            fragment.appendChild(cloneProduct);
        });
        this.containerProductsRef.appendChild(fragment);
        this.moveProduct(this.containerButtonsControlRef, this.containerProductsRef);
        this.searchProduct(this.searchInputRef);
    }
    handleArticleClickEvent(product, modal) {
        modal.show();
        let [stockLabel, stockClasses] = this.checkStock(product.stock);
        modal.setModal(product.title, product.price, stockLabel, stockClasses, product.category, product.description, product.image);
    }
    searchProduct(refSearch) {
        refSearch.addEventListener("keydown", (event) => {
            const searchValue = refSearch.value.toLowerCase();
            if (refSearch.value === '') {
                this.getProductData("", (listProducts) => {
                    this.containerProductsRef.innerHTML = '';
                    this.createProducts(listProducts);
                });
            }
            else if (event.key === 'Enter') {
                this.getProductData(`search?q=${searchValue}`, (listProducts) => {
                    this.containerProductsRef.innerHTML = '';
                    this.createProducts(listProducts);
                });
            }
        });
    }
    checkStock(stock) {
        if (stock === 0)
            return ['OUT-OF-STOCK', 'badge text-bg-danger'];
        else if (stock < 10)
            return ['LOW-STOCK', 'badge text-bg-warning'];
        else
            return ['IN-STOCK', 'badge text-bg-success'];
    }
    moveProduct(containerButtonsControlRef, containerProductsRef) {
        let productsHTML = this.containerProductsRef.querySelectorAll('.product');
        const buttonUP = containerButtonsControlRef.firstElementChild;
        const buttonUUP = containerButtonsControlRef.children[1];
        const buttonDDOWN = containerButtonsControlRef.children[2];
        const buttonDOWN = containerButtonsControlRef.lastElementChild;
        buttonUP.addEventListener('click', () => {
            productsHTML.forEach((productHTML) => {
                if (productHTML.querySelector('#product-img-radio').firstElementChild.checked) {
                    if (productHTML !== productHTML.parentElement.firstElementChild) {
                        containerProductsRef.insertBefore(productHTML, productHTML.previousElementSibling);
                        if (productHTML === productHTML.parentElement.firstElementChild) {
                            buttonUP.setAttribute("style", "opacity:0.4");
                            buttonUUP.setAttribute("style", "opacity:0.4");
                        }
                    }
                }
            });
        });
        buttonUUP.addEventListener('click', () => {
            productsHTML.forEach((productHTML) => {
                if (productHTML.querySelector('#product-img-radio').firstElementChild.checked) {
                    if (productHTML !== productHTML.parentElement.firstElementChild) {
                        containerProductsRef.insertBefore(productHTML, productHTML.parentElement.firstElementChild);
                        buttonUP.setAttribute("style", "opacity:0.4");
                        buttonUUP.setAttribute("style", "opacity:0.4");
                        buttonDOWN.setAttribute("style", "opacity:1");
                        buttonDDOWN.setAttribute("style", "opacity:1");
                    }
                }
            });
        });
        buttonDDOWN.addEventListener('click', () => {
            productsHTML.forEach((productHTML) => {
                if (productHTML.querySelector('#product-img-radio').firstElementChild.checked) {
                    if (productHTML !== productHTML.parentElement.lastElementChild) {
                        containerProductsRef.appendChild(productHTML);
                        buttonUP.setAttribute("style", "opacity:1");
                        buttonUUP.setAttribute("style", "opacity:1");
                        buttonDOWN.setAttribute("style", "opacity:0.4");
                        buttonDDOWN.setAttribute("style", "opacity:0.4");
                    }
                }
            });
        });
        buttonDOWN.addEventListener('click', () => {
            productsHTML.forEach((productHTML) => {
                if (productHTML.querySelector('#product-img-radio').firstElementChild.checked) {
                    if (productHTML !== productHTML.parentElement.lastElementChild) {
                        containerProductsRef.insertBefore(productHTML, productHTML.nextElementSibling.nextElementSibling);
                        buttonUP.setAttribute("style", "opacity:1");
                        buttonUUP.setAttribute("style", "opacity:1");
                        if (productHTML === productHTML.parentElement.lastElementChild) {
                            buttonUP.setAttribute("style", "opacity:0.4");
                            buttonUUP.setAttribute("style", "opacity:0.4");
                        }
                    }
                }
            });
        });
    }
}
