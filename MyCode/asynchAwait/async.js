
const promise=new Promise((resolve,reject)=>{
        resolve("I am resolving");
})

async function getData(){
    const res=await promise;
    console.log(res);
    
}

getData()