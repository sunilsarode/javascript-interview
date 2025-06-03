function promiseAll(arrOfPromise){
    return new Promise((resolve,reject)=>{

        const result = new Array(arrOfPromise.length);
        let unresolved=arrOfPromise.length;

        if(unresolved ===0){
            resolve(result);
            return
        }

        arrOfPromise.forEach((item,index)=>{

            Promise.resolve(item).then((value)=>{
                result[index]=value;
                unresolved--;
                if(unresolved === 0){
                    resolve(result)
                }
            },(reason)=>{
                reject(reason);
            })
        });

    })
}

const p0=Promise.resolve(11);
const p1=43;
const p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('foo')
        },3000)
})

//will wait for all them to resolve and if any one of the promise fails,promiseAll will fail immediately 
promiseAll([p0,p1,p2]).then(val=>console.log(val));

async function myAsyncFunction() {
    try {
        const result = await promiseAll([p0, p1, p2]);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

myAsyncFunction();

const p3=Promise.resolve(11);
const p4=43;
const p5=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        reject('Erro occurred !');
    },4000)
})


async function myFunction(){
    try{
      const res= await promiseAll([p3,p4,p5]);
      
    }catch(err){
        console.log(err);
    }
}
myFunction();