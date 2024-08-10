const arr1 = ['hello', 34252, false , null]

console.log(arr1);

console.log(typeof arr1);

console.log(Array.isArray(arr1));


const movies = ['Dangal', 'Kill', 'Manhji', 'Jawan', 'PK']

console.log(movies.length);

console.log(movies[3]);

console.log(movies.at(-1));

console.log(movies.at(-4));

movies[3] = 'Krish'
console.log(movies);

console.log(movies.indexOf('Kill'));

// Slicing

console.log(movies);

console.log(movies.slice(2,5));

console.log(movies.slice(2,-3));
console.log(movies.slice(2));
console.log(movies.slice(2,60));

// adding and removing elements

movies.push("Kalki");
console.log(movies);

movies.unshift("KGF");
console.log(movies);

// movies.pop();
// console.log(movies);

// movies.shift()
// console.log(movies);

// splice

movies.splice(3, 2) //removing 2 elements from index 3
console.log(movies);

movies.splice(3, 2,"Deadpool", "Venom")
console.log(movies);

movies.splice(3, 0, 'X-Men', 'Loki')
console.log(movies);