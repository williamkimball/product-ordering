const reviewData = require("./reviewData");
const review = require("./review");



let reviewList = review(reviewData);

// for (key in reviewList) {
//     console.log(reviewList[key])
// }

module.exports = reviewList;