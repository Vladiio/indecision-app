// const square = function(number) {
//     return number * number;
// };

// const squareArrow = (x) => (x*x);


// console.log(squareArrow(9));


// const getFirstName = (fullname) => (fullname.split(' ')[0]);

// console.log(getFirstName('Mike Smith'));

// PART 2

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}


const user = {
    name: 'Vlad',
    cities: ['Kharkiv', 'Kiev'],

    printPlacesLived() {
        return this.cities.map((citi) => {
            console.log(this.cities);
            return this.name + ' has lived in ' + citi;
        });
    }
};


const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((n) => n*this.multiplyBy);
    }

}

console.log(multiplier.multiply());