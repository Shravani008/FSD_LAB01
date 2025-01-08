const colors = ['red', 'green', 'blue', 'yellow'];

//  first and second elements
const [firstColor, secondColor] = colors;
console.log(firstColor);  
console.log(secondColor); 

const [, secondElement, , fourthElement] = colors;
console.log(secondElement); 
console.log(fourthElement);
