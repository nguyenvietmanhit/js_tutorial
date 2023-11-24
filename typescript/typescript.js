function getProductA(id) {
    return {
        id: id,
        name: "Awesome Gadget ".concat(id),
        price: 99.5
    };
}
var productA = getProductA(1);
console.log("The product ".concat(productA.name, " costs $").concat(productA.price));
var showProductA = function (name, price) {
    console.log("The product ".concat(name, " costs $").concat(price));
};
showProductA(productA.name, productA.price);
