const square = function(x) {
    return x * x;
};

const squareArrow = (x) => x * x;


console.log(square(9));
console.log(squareArrow(8));

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

const getFirstNameShort = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Vittorio Marino'));
console.log(getFirstNameShort('Vittorio Marino'));