// WAP to check if a number is prime

const n1 = 11;
let prime =true;

for(let i=2;i<=n1/2;i++)
{
    if(n1%i === 0){
        console.log("Not Prime");
        prime = false;
        break;
    }
}

if(prime) console.log("Prime");

// WAP to reverse a number

n2=256;
rev=0;

while(n2>0){
    let d = n2%10;
    rev = (rev*10)+d;
    n2=parseInt(n2/10);
}
console.log(rev);

// declaring multiple variables : let [a, b] = [0, 1]