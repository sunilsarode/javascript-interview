// Creating a Map
const myMap = new Map();

// Adding key-value pairs
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

// Retrieving values
console.log(myMap.get('key1')); // Output: value1

// Checking if a key exists
console.log(myMap.has('key2')); // Output: true

// Deleting a key-value pair
myMap.delete('key1');


// Size of the map
console.log(myMap.size); // Output: 1

myMap.set("abc",3);

myMap.set("abc",4);

// Iterating over key-value pairs
myMap.forEach((value, key) => {
    console.log(key, value);
});

console.log(myMap.get("abc"));