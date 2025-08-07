// function squre(number){
//     return number * 10;
// };

// const total = squre(100);
// console.log(total); // Output: 1000

// function add(num1,num2){
//     const total = num1 + num2;
//     console.log(total);
// };
// add(10,20); // Output: 30

// function studentSallary(eat,noteat){
//     const eatTotal = 2500 * eat;
//     const noteatTotal = 1200 * noteat;
//     const total = eatTotal + noteatTotal;
//     console.log(total)
// };
// studentSallary(3,25);


function myschollBeton(abasik,onabasik){
    const betonAbasik = 2500 * abasik;
    const betonOnabasik = 1200 * onabasik;
    const totalBeton = betonAbasik + betonOnabasik;
    return totalBeton;

};
const totalTaka = myschollBeton(3,25);
console.log(totalTaka); // Output: 33000