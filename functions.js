function addNums(a, b){
    var c = a+b;
    console.log(c);
}

addNums(3, 5);

// console.log(c);

const getAvg = function(m1, m2, m3){
    const avg = (m1+m2+m3)/3;

    return avg;
}

let result = getAvg(77,88,98);

console.log(result);

const factorial = (n) => {
    let f = 1;
    for(let i=1;i<=n;i++){
        f = f * i;
    }
    return f;
}

let ans = factorial(6);
console.log(ans);

// WAP to find sum of all numbers in a given range

const Sum = (a, b) => {
    let sum = 0;
    for (let i=a;i<=b;i++)
    {
        sum = sum + i;
    }
    return sum;
}

let ans1 = Sum(3,10);
console.log(ans1);

function addNumsv1(a, b){
    // return a+b;
    return [a+b, a*b];
}

const res = addNumsv1(345,4356);

console.log(res);

const [sum, prod] = res;

console.log(prod);