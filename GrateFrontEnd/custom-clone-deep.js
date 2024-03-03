function deepClone(value) {
  
  if(typeof value !== 'object' || value === null){
    return value;
  }

  if(Array.isArray(value)){
    return value.map((item)=>{
      return deepClone(item);
    })
  }

  const newObj={}
  Object.entries(value).forEach(([key,val])=>{
    
    newObj[key]=deepClone(val)
  });

  return newObj;
}

console.log(deepClone({foo:null}));
const obj2 = { foo: [{ bar: 'baz' }] };
const clonedObj2 = deepClone(obj2);
console.log(clonedObj2);