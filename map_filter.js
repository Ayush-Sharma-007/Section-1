// WAP to create a new array containing onnly perfect squares from another array.

const nums = [1, 4, 16, 63, 36, 52, 18, 17, 81];
const perfect = [];

for (let i of nums) {
    if (Number.isInteger(i ** 0.5)) {
        // console.log(i);
        perfect.push(i);
    }
}

console.log(perfect);

// WAP to create a new array containing 10% discounted prices from an array of prices.
const prices = [100, 210, 280, 399,550];
const discounted = [];

for(let p of prices){
    discounted.push(p*0.9);
}

console.log(discounted);

// map

const discountedPrices = prices.map((p) => { return p*0.9 });
console.log(discountedPrices);


nums1 = [1,2,3,4,5,6]
const sqaures = nums1.map((a) => {return a**2});
console.log(sqaures);

// filter

const perfectNums = nums.filter( (n) => { return Number.isInteger(n**0.5)});
console.log(perfectNums);

const prices2 = [ '₹423.23', '₹123.452' , '₹678.9', '₹999.9982'];
// [423, 123, 678, 999]

const intNums = prices2.map((b) => { return parseInt(b.slice(1))});
console.log(intNums);

const names = ['ramu', 'shamu', 'pinki', 'kaliya'];
const newName = names.filter((c) => { return c.length >= 5})

console.log(newName);

const newN = names.map((a) => {return a.toUpperCase()});
console.log(newN);