// function shahanaraHeight(ince){
//     const feet = ince / 12;
//     return feet;
// };
// const total = shahanaraHeight(65);
// console.log(total); // Output: 5    

// function shahanaraHeight(ince){
//     const feet = parseInt(ince / 12);
//     const remaining = ince % 12;
//     return feet + ' feet ' + remaining + ' inches';
// };
// const total = shahanaraHeight(75);
// console.log(total); // Output: 5    


// Higest phone price..............................
const phones = [
    { name: 'iPhone 14 Pro Max', price: 50000, brand: 'Apple', color: 'Space Black', quantity: 3 },
    { name: 'Samsung Galaxy S23 Ultra', price: 40000, brand: 'Samsung', color: 'Phantom Black', quantity: 1 },
    { name: 'Google Pixel 7 Pro', price: 22000, brand: 'Google', color: 'Obsidian', quantity: 1 },
    { name: 'OnePlus 11 Pro', price: 20000, brand: 'OnePlus', color: 'Eternal Green', quantity: 1 },
    { name: 'Xiaomi 13 Pro', price: 10000, brand: 'Xiaomi', color: 'Ceramic White', quantity: 1 },
];


// ...................Min phone price..............................
// function minPrice(phones) {
//     let minPrice =phones[0];
   
//     for (const phone of phones) {
//         if (phone.price < minPrice.price) {
//             minPrice = phone;
//         }
//     }
//    return minPrice;
// } 
// const minPhonePrice = minPrice(phones);
// console.log(`Name: ${minPhonePrice.name}, Price: ${minPhonePrice.price}`); // Output: { name: 'Xiaomi 13 Pro', price: 10000, brand: 'Xiaomi', color: 'Ceramic White' }



// ...............................Higest phone price.............................
// function highestPrice(phones) {
//     let maxPrice = 0;
//     let maxPhone = null;

//     for (const phone of phones) {
//         if (phone.price > maxPrice) {
//             maxPrice = phone.price;
//             maxPhone = phone;
//         }
//     }
//     return maxPhone;
// }
// const maxPhone = highestPrice(phones);
// console.log(maxPhone); // Output: { name: 'Samsung Galaxy S23 Ultra', price: 140000, brand: 'Samsung', color: 'Phantom Black' }         


// ......................Total Phone Price................................

// function totalPrice(phones){
//     let total = 0;
//     for(const phone of phones){
//          total = total + phone.price;
//     }
//     return total;
// }
// const result = totalPrice(phones);
// console.log(result); // Output: 450000



// ....................quantity of phone................................

// function totalQuantityPrice(phones){
//     let total = 0;
//     for(const phone of phones){
//         const totalQuantity = phone.quantity * phone.price;
//          total = total + totalQuantity;
//     }
//     return total;
// }
// const result = totalQuantityPrice(phones);
// console.log(result)

// ...............Discounted Price................................
function discountedPrice(quantity) {
    if(quantity <= 100) {
        total = quantity * 100;
        return total;
    }
    else if(quantity <= 200) {
        total = quantity * 90;
        return total;
    }
    else if(quantity <= 300) {
        total = quantity * 80;
        return total;
    }
    else {
        total = quantity * 70;
        return total;
    }
}
const totalDiscountedPrice = discountedPrice(400);
console.log(totalDiscountedPrice); // Output: 20000