const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve('P1 Over');
    },10000);
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve('P2 Over');
    },5000);
})


async function getData(){
   const res1= await p1;
   console.log("First promise");
   console.log(res1);
   
   const res2= await p2;
   console.log("Second promise");
   console.log(res2);
   
}

getData();

console.log("Javascript does not wait");
