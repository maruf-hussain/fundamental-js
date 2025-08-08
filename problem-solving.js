// function shahanaraHeight(ince){
//     const feet = ince / 12;
//     return feet;
// };
// const total = shahanaraHeight(65);
// console.log(total); // Output: 5    

function shahanaraHeight(ince){
    const feet = parseInt(ince / 12);
    const remaining = ince % 12;
    return feet + ' feet ' + remaining + ' inches';
};
const total = shahanaraHeight(75);
console.log(total); // Output: 5    