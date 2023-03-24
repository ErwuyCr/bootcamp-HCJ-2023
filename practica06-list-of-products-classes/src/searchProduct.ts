export class SearchProduct{
    private refSearch: HTMLInputElement;
    private refProducts: NodeListOf<HTMLDivElement>;

    constructor(refSearch: HTMLInputElement, refProducts: NodeListOf<HTMLDivElement>) {
        this.refSearch = refSearch;
        this.refProducts = refProducts;
    }

    public handlerEventSearch(){
        this.refSearch.addEventListener("keyup", (event)=>{
            const searchValue: string = this.refSearch.value.toLowerCase();
            const products: NodeListOf<HTMLDivElement> = document.querySelectorAll('.product') as NodeListOf<HTMLDivElement>;
            products.forEach((product: HTMLDivElement) => {
                const productName: string = product.querySelector('.product-name h5')!.textContent!.toLowerCase();
                if (productName.includes(searchValue)) {
                    product.style.display = 'flex';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }
}