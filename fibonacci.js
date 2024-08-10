a = 0;
b = 1;
console.log(a);
console.log(b);
for(i = 1;i<=5;i++)
{
    next = a+b;
    console.log(next);
    a=b;
    b=next;
}