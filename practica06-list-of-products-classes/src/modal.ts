export class Modal {
    ref: HTMLDivElement;
    btnClose?: HTMLElement;

    constructor(ref: HTMLDivElement) {
        this.ref = ref;
    }

    show() {
        this.ref.style.display = 'block';
        this.btnClose = this.ref.querySelector('#btnClose') as HTMLElement;
        this.btnClose.addEventListener('click', this.hide.bind(this));
    }

    hide() {
        this.ref.style.display = 'none';
    }

    setModal(title:string, price: number, stocklabel1: string, stockclasses1: string, category: string, description: string, img: string):void{
        this.ref.querySelector('#titleModal')!.textContent = title;
        this.ref.querySelector('#price')!.textContent = `$${price}`;
        this.ref.querySelector('#stock')!.textContent = stocklabel1;
        this.ref.querySelector('#modal-descript')!.textContent = description;
        this.ref.querySelector('#stock')!.setAttribute("class", stockclasses1);
        this.ref.querySelector('#category')!.textContent = category;
        this.ref.querySelector('#imgModal')!.setAttribute("src", img);
    }

    // setBody(...elements:HTMLElement[]){
    //     this.ref.querySelector('#modalBody')!.innerHTML = '';
    //     elements.forEach(element => {
    //         this.ref.querySelector('#modalBody')!.appendChild(element);
    //     });
    // }
}