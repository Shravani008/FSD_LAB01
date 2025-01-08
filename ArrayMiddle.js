const matrix = [[1, 2], [3, 4], [5, 6]];

//extract 3 and 5
const [, [secondRow], [thirdRow]] = matrix;
const three = secondRow[0];
const five = thirdRow[0];    

console.log(three);
console.log(five);  
