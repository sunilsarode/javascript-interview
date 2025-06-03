function promiseAllSettled(arrOfPromise){

    return new Promise((resolve,reject)=>{
        const result =new Array(arrOfPromise.length);
        let pending= arrOfPromise.length;
    
        if(pending===0){
            resolve(result);
            return;
        }

        arrOfPromise.forEach((item,index)=>{

            Promise.resolve(item).then((value)=>{
                result[index]={
                    status:"fulfilled",
                    value};
            },(response)=>{
                result[index]={
                    status:"rejected",
                    response
                }
            }).finally(()=>{
                pending--;
                if(pending ===0){
                    resolve(result);
                }
            })
        })
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

//if any promise fail,still we will have result in array along with error
promiseAllSettled([p0,p1,p2]).then((val)=>console.log(val));