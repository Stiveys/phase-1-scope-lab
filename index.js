var customerName = "bob";
const leastFavoriteCustomer = "someone";

function returnCustomerName() {
    return customerName;
}

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(newCustomer) {
    bestCustomer = newCustomer;
}
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob';
}
