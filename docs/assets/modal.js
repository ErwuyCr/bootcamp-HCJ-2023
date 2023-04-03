export class Modal {
    constructor(ref) {
        this.ref = ref;
    }
    show() {
        this.ref.style.display = 'block';
        this.btnClose = this.ref.querySelector('#btnClose');
        this.btnClose.addEventListener('click', this.hide.bind(this));
    }
    hide() {
        this.ref.style.display = 'none';
    }
    setModal(title, price, stocklabel1, stockclasses1, category, description, img) {
        this.ref.querySelector('#titleModal').textContent = title;
        this.ref.querySelector('#price').textContent = `$${price}`;
        this.ref.querySelector('#stock').textContent = stocklabel1;
        this.ref.querySelector('#modal-descript').textContent = description;
        this.ref.querySelector('#stock').setAttribute("class", stockclasses1);
        this.ref.querySelector('#category').textContent = category;
        this.ref.querySelector('#imgModal').setAttribute("src", img);
    }
}
