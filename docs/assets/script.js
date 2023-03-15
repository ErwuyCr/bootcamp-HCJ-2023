"use strict";
let productosDummy = {
    "products": [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "images": [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 4,
            "brand": "Apple",
            "category": "smartphones",
            "images": [
                "https://i.dummyjson.com/data/products/2/1.jpg",
                "https://i.dummyjson.com/data/products/2/2.jpg",
                "https://i.dummyjson.com/data/products/2/3.jpg",
                "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
            ]
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "images": [
                "https://i.dummyjson.com/data/products/3/1.jpg"
            ]
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 0,
            "brand": "OPPO",
            "category": "smartphones",
            "images": [
                "https://i.dummyjson.com/data/products/4/1.jpg",
                "https://i.dummyjson.com/data/products/4/2.jpg",
                "https://i.dummyjson.com/data/products/4/3.jpg",
                "https://i.dummyjson.com/data/products/4/4.jpg",
                "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
            ]
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "images": [
                "https://i.dummyjson.com/data/products/5/1.jpg",
                "https://i.dummyjson.com/data/products/5/2.jpg",
                "https://i.dummyjson.com/data/products/5/3.jpg"
            ]
        },
        {
            "id": 6,
            "title": "MacBook Pro",
            "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
            "price": 1749,
            "discountPercentage": 11.02,
            "rating": 4.57,
            "stock": 2,
            "brand": "Apple",
            "category": "laptops",
            "images": [
                "https://i.dummyjson.com/data/products/6/1.png",
                "https://i.dummyjson.com/data/products/6/2.jpg",
                "https://i.dummyjson.com/data/products/6/3.png",
                "https://i.dummyjson.com/data/products/6/4.jpg"
            ]
        },
        {
            "id": 7,
            "title": "Samsung Galaxy Book",
            "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
            "price": 1499,
            "discountPercentage": 4.15,
            "rating": 4.25,
            "stock": 50,
            "brand": "Samsung",
            "category": "laptops",
            "images": [
                "https://i.dummyjson.com/data/products/7/1.jpg",
                "https://i.dummyjson.com/data/products/7/2.jpg",
                "https://i.dummyjson.com/data/products/7/3.jpg",
                "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
            ]
        },
        {
            "id": 8,
            "title": "Microsoft Surface Laptop 4",
            "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
            "price": 1499,
            "discountPercentage": 10.23,
            "rating": 4.43,
            "stock": 68,
            "brand": "Microsoft Surface",
            "category": "laptops",
            "images": [
                "https://i.dummyjson.com/data/products/8/1.jpg",
                "https://i.dummyjson.com/data/products/8/2.jpg",
                "https://i.dummyjson.com/data/products/8/3.jpg",
                "https://i.dummyjson.com/data/products/8/4.jpg",
                "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
            ]
        },
        {
            "id": 9,
            "title": "Infinix INBOOK",
            "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
            "price": 1099,
            "discountPercentage": 11.83,
            "rating": 4.54,
            "stock": 96,
            "brand": "Infinix",
            "category": "laptops",
            "images": [
                "https://i.dummyjson.com/data/products/9/1.jpg",
                "https://i.dummyjson.com/data/products/9/2.png",
                "https://i.dummyjson.com/data/products/9/3.png",
                "https://i.dummyjson.com/data/products/9/4.jpg",
                "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
            ]
        },
        {
            "id": 10,
            "title": "HP Pavilion 15-DK1056WM",
            "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
            "price": 1099,
            "discountPercentage": 6.18,
            "rating": 4.43,
            "stock": 0,
            "brand": "HP Pavilion",
            "category": "laptops",
            "images": [
                "https://i.dummyjson.com/data/products/10/1.jpg",
                "https://i.dummyjson.com/data/products/10/2.jpg",
                "https://i.dummyjson.com/data/products/10/3.jpg",
                "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
            ]
        }
    ]
};
let listProducts = productosDummy.products.map((product) => {
    return {
        title: product.title,
        price: product.price,
        stock: product.stock,
        category: product.category,
        image: product.images[0]
    };
});
const divListProduct = document.getElementById("list-products");
createProduct();
function createProduct() {
    listProducts.forEach((product) => {
        let divProduct = document.createElement("div");
        divProduct.setAttribute("class", "product");
        let imgDIV = createProductImg(product.image);
        let nameDIV = createProductName(product.title, product.category);
        let priceDIV = createProductPrice(product.price, product.stock);
        divProduct.appendChild(imgDIV);
        divProduct.appendChild(nameDIV);
        divProduct.appendChild(priceDIV);
        divListProduct.appendChild(divProduct);
    });
}
function createProductImg(image) {
    let imgProduct = document.createElement("img");
    imgProduct.setAttribute("src", image);
    let divProductImg = document.createElement("div");
    divProductImg.classList.add("product-img");
    divProductImg.appendChild(imgProduct);
    return divProductImg;
}
function createProductName(title, category) {
    let spanProduct = document.createElement("span");
    spanProduct.innerText = category;
    let iconTag = document.createElement("i");
    iconTag.setAttribute("class", "bi bi-tag");
    let nameProduct = document.createElement("h5");
    nameProduct.innerText = title;
    let divProductName = document.createElement("div");
    divProductName.setAttribute("class", "product-name");
    divProductName.appendChild(nameProduct);
    divProductName.appendChild(iconTag);
    divProductName.appendChild(spanProduct);
    return divProductName;
}
function createProductPrice(price, stock) {
    let spanStock = document.createElement("span");
    let typeStock = validaSock(stock);
    console.log(typeStock);
    spanStock.innerText = typeStock[0].toString();
    spanStock.setAttribute("class", typeStock[1].toString());
    let priceProduct = document.createElement("h6");
    priceProduct.innerText = "$" + price;
    let divProductPrice = document.createElement("div");
    divProductPrice.setAttribute("class", "product-price");
    divProductPrice.appendChild(priceProduct);
    divProductPrice.appendChild(spanStock);
    return divProductPrice;
}
function validaSock(stock) {
    let messageStock = [];
    if (stock == 0) {
        messageStock.push("outofstock");
        messageStock.push("badge text-bg-danger");
    }
    else if (stock < 10) {
        messageStock.push("lowstock");
        messageStock.push("badge text-bg-warning");
    }
    else {
        messageStock.push("instock");
        messageStock.push("badge text-bg-success");
    }
    return messageStock;
}
