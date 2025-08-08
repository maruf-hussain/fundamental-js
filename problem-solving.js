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
    { name: 'iPhone 14 Pro Max', price: 20000, brand: 'Apple', color: 'Space Black' },
    { name: 'Samsung Galaxy S23 Ultra', price: 140000, brand: 'Samsung', color: 'Phantom Black' },
    { name: 'Google Pixel 7 Pro', price: 90000, brand: 'Google', color: 'Obsidian' },
    { name: 'OnePlus 11 Pro', price: 80000, brand: 'OnePlus', color: 'Eternal Green' },
    { name: 'Xiaomi 13 Pro', price: 10000, brand: 'Xiaomi', color: 'Ceramic White' },
];

function highestPrice(phones) {
    let maxPrice = [0];
 
    for (const phone of phones) {
        if (phone.price > maxPrice) {
            maxPrice = phone.price;
           
        }
    }
    return maxPrice;
} ;
console.log(highestPrice(phones)); 



