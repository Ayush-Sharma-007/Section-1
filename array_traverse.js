const nums = [3, 4, 1,2, 9, 7]

for(let i=0;i<nums.length;i++)
{
    console.log(nums[i]);
}

console.log('---------------for of loop-----------------');
for(let i of nums){
    console.log(i);
}

console.log('------------------for each function-------------');
nums.forEach( ()=>{ console.log('function called');});

nums.forEach( (n, n2, n3) => { console.log(n);
    console.log(n2);   
    console.log(n3); 
} );