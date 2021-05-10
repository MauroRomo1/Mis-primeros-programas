const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(numbers);

const numbersText = numbers.join(" ");
console.log(numbersText);

const numbers2 = numbers.slice(10);
console.log(numbers2);

const numbersText2 = numbers2.join(" ");
console.log("Números mayores a 10 ==>", numbersText2);
