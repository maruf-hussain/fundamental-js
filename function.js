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


// function myschollBeton(abasik,onabasik){
//     const betonAbasik = 2500 * abasik;
//     const betonOnabasik = 1200 * onabasik;
//     const totalBeton = betonAbasik + betonOnabasik;
//     return totalBeton;

// };
// const totalTaka = myschollBeton(3,25);
// console.log(totalTaka); // Output: 33000


// function studentBeton(khawa,nakhawa){
//     const khawaBeton = 2500 * khawa;
//     const nakhawaBeton = 1200 * nakhawa;
//     const totalBeton = khawaBeton + nakhawaBeton;
//     return totalBeton;
// };
// const total = studentBeton(3,25);
// console.log(total); // Output: 33000


function arraySum(numbers){
    let sum = 0;
    for(const number of numbers){
        sum = sum + number;
    }
    return sum;
};

// const num = [10, 20, 30, 40, 50];
const total = arraySum([10, 20, 30, 40, 50]);
console.log(total); // Output: 150


