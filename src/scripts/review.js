const review = {
    reviewMaker : function (reviewData) {
        for (key in reviewData) {
        const title = document.createElement("h3").textContent = key;
        console.log(title)
        }
    }


}

module.exports = review;