// arguments obj not bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}

console.log(add(8, 3, 2));


// this keyword not bound with arrow functions

const user = {
    name: 'Vittorio',
    cities: ['Milano', 'Cassina', 'Gessate'],
    printPlacesLived() {        
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        })
    }
};

user.printPlacesLived();

// challenge
const multiplier = {
    numbers: [4, 5, 6],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((item) => item * this.multiplyBy);
    }
};

console.log(multiplier.multiply());