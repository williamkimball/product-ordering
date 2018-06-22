
let mainNav = document.createElement("div");
mainNav.className = "main-nav";

let navList = document.createElement("ul");
navList.className = "nav";

let createLi = function () {
    let newLi = document.createElement("li");
    return newLi;
};
;

let navName = createLi();
navName.className = "name";
navName.textContent = "Betsy";

let catagories = createLi();
catagories.textContent = "Catagories";

let orders = createLi();
orders.textContent = "Orders";

let logOut = createLi();
logOut.textContent = "Log Out";

let nav = {
    createNav: function () {
        navList.appendChild(navName);
        navList.appendChild(catagories);
        navList.appendChild(orders);
        navList.appendChild(logOut);

        mainNav.appendChild(navList);
        let navLocation = document.querySelector(".name");
        navLocation.appendChild(mainNav);
    }
}


module.exports = nav;