const user = {
    name : 'Ayush Sharma',
    email : 'abc@gmail.com',
    password : 'abc123',
};

console.log(user.email);
console.log(user['name']);

user.email = 'raju007@mail.com'

console.log(user);

user.address = 'Lucknow'

console.log(user);

console.log( Object.keys(user));  //Important 
console.log( Object.values(user));
console.log( Object.entries(user));

const brand = 'Samsung';
const model = 'S24 Ultra';
const price = 105000;
const colors = ['red', 'black', 'white'];

// creating an object from separate variables
const smartphone = { brand, model, price, colors};
console.log(smartphone);

// Extract a variable from an object
const {address} = user;
console.log(address);

console.log(smartphone.price);
console.log(smartphone.colors[1]);

smartphone.colors.push('grey');
console.log(smartphone.colors);

smartphone.colors[2] = 'moonwhite';
console.log(smartphone.colors);

const smartphoneList = [
    {
        brand : 'Samsung',
        model : 'S24 Ultra',
        price : 105000,
        colors : ['red', 'black', 'white'],
    },

    {
        brand : 'OnePlus',
        model : '12',
        price : 44999,
        colors : ['Green', 'Grey', 'Graphite'],
    },

    {
        brand : 'Apple',
        model : 'iPhone 15 pro max',
        price : 125000,
        colors : ['black', 'white'],
    },

    {
        brand : 'Google',
        model : 'Pixel',
        price : 56000,
        colors : ['red', 'black', 'white'],
    },

    {
        brand : 'Moto',
        model : 'G84',
        price : 21000,
        colors : ['Blue', 'Green'],
    },

];

// 1. Access the price of apple iPhone

console.log(smartphoneList[2].price);

// 2. Access the last color of google pixel

console.log(smartphoneList[3].colors.at(-1));

const myphones = smartphoneList.filter( (phone) => { return phone.price<=50000});
console.log(myphones);

// filter all samsung phone
const query = 'sam'
const phonebrand = smartphoneList.filter( (phone) => { return phone.brand.toLowerCase().includes(query.toLowerCase())});  //includes is used to check membership
console.log(phonebrand);

// 3.filter all phones with white color

const whitephone = smartphoneList.filter( (phone) => { return phone.colors.includes('white')});
console.log(whitephone);