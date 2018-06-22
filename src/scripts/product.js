const reviewList = require("./reviewList");
const productData = require("./productData")

const createDiv = function () {
    const newDiv = document.createElement("div")
    return newDiv;
}

const createH3 = function () {
    const newH3 = document.createElement("H3")
    return newH3;
}

const createH4 = function () {
    const newh4 = document.createElement("h4")
    return newh4;
}

const createP = function () {
    const newp = document.createElement("p")
    return newp;
}

const createImg = function (imgSrc) {
    const newimg = document.createElement("img");
    newimg.src = imgSrc
    return newimg;
}

let contLocation = document.querySelector("#content")
const product =
    function () {

        for (key in productData) {
            let prodDiv = createDiv();
            let H3 = createH3();
            let H4 = createH4();
            let P = createP();
            let quantity = createP();
            let img = createImg(productData[key].image);
            let reviews = createDiv();
            let reviewTitle = createH4();



            H3.textContent = productData[key].title;
            quantity.textContent = `Quantity: ${productData[key].quantity}`;
            P.textContent = productData[key].description;
            H4.textContent = `Price: $${productData[key].price}`;

            prodDiv.className = "productDiv";

            reviewTitle.textContent = "Reviews:";
            reviews.appendChild(reviewTitle);

            reviews.appendChild(reviewList[key])
            prodDiv.appendChild(H3);
            prodDiv.appendChild(img);
            prodDiv.appendChild(H4);
            prodDiv.appendChild(P);
            prodDiv.appendChild(quantity);
            prodDiv.appendChild(reviews);
            contLocation.appendChild(prodDiv);
        }
    }


module.exports = product;