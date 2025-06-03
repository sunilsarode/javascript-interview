const obj={
    name:"sunil",
    id:1,
    dependent: [
        {
            name:"abc",
            id:12,
            dependent:[
                 {
                    name:"pqr",
                    id:34
                 }
            ]
        }
    ]
}


const deepCopyString=JSON.stringify(obj);
const deepCopy=JSON.parse(deepCopyString)
console.log("bfore modification\n",deepCopy);

deepCopy.name='Anil';

console.log("after modification\n",deepCopy);
console.log("original\n ",obj)

const shallowCopy = { ...obj };
shallowCopy.name="sdjsdjsjd"; // this will not moidfy the original object, cause this is immediate reference
console.log("shallow",shallowCopy)
console.log("original\n ",obj)


shallowCopy.dependent[0].name = "xyz";
console.log("shallowCopy", shallowCopy);
console.log("original", obj); // obj.dependent[0].name will also be "xyz"




/**
 * does not affect original so new copy is created ?


ChatGPT said:
Great question — let's clarify this 👇

When you write:
js
Copy
Edit
const shallowCopy = { ...obj };
shallowCopy.name = "sdjsdjsjd";
Yes, a new object (shallowCopy) is created in memory — but only the top-level properties are copied by value if they are primitives (like name: "sunil", id: 1), and by reference if they are objects or arrays (like dependent).


 */