export class SearchProduct {
    constructor(refSearch, refProducts) {
        this.refSearch = refSearch;
        this.refProducts = refProducts;
    }
    handlerEventSearch() {
        this.refSearch.addEventListener("keyup", (event) => {
            const searchValue = this.refSearch.value.toLowerCase();
            const products = document.querySelectorAll('.product');
            products.forEach((product) => {
                const productName = product.querySelector('.product-name h5').textContent.toLowerCase();
                if (productName.includes(searchValue)) {
                    product.style.display = 'flex';
                }
                else {
                    product.style.display = 'none';
                }
            });
        });
    }
}
