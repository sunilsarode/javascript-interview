// const obj={
//     a:1,
//     b:2,
//     c:3,
//     d:4
// }

// Object.entries(obj).forEach(([key,value])=>{
//     console.log(key,value)

// })
 function objectMap(obj, fn) {
    const res={}
  
      Object.entries(obj).forEach(([key, value]) =>{
        res[key]=fn.call(obj,value);
      })
    return res;
  }

 const returnVal= objectMap({ foo: 1, bar: 2 }, (x)=>x*2); 
 console.log(returnVal);