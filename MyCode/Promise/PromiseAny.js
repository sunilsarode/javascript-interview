function promiseAny(arrOfPromise){

    return new Promise((resolve,reject)=>{

       const error= new Array(arrOfPromise.length);
       let pendingError = arrOfPromise.length;

       if(pendingError ===0){
            reject(new AggregateError([]));
       } 
       
       arrOfPromise.forEach((item,index)=>{

            Promise.resolve(item).then((value)=>{
                resolve(value);
            },
            (reason)=>{
                  pendingError--;
                  error[index]=reason;
                  if(pendingError ===0){
                    reject(new AggregateError(error));
                  }  
            })
       });
    })
}

const p0= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(42)
    })
})

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('foo');
    })
})

const p2=Promise.resolve(42);

promiseAny([]).then((val)=>console.log(val));