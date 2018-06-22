
let reviewSec = function () {
    let rSec = document.createElement("ul");
    return rSec;
};

let reviewCont = function () {
    let rev = document.createElement("li");
    return rev;
};
const review = (reviewData) => {
    let reviews= {

    }

    for (prop in reviewData) {

        let currentReview = reviewSec();
        reviewData[prop].forEach(element => {
            let reviewText = reviewCont();
            reviewText.textContent = element;
            currentReview.appendChild(reviewText)
        });
        reviews[prop] = currentReview
    }

    return reviews
}

module.exports = review;