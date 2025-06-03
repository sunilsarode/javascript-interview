let p1=new Promise((res,rej)=>{

    res("Hi");
})

let p2=Promise.resolve("Hi all");

//let p3=45;
let p3=Promise.reject("Error");


// let ans=Promise.all([p1,p2,p3]);
// ans.then((res)=>{
//     console.log(res);
    
// })
// let ans1=Promise.allSettled([p1,p2,p3]);
// ans1.then((res)=>{
//     console.log(res);
    
// })
let ans3=Promise.any([p1,p2,p3]);
ans3.then((res)=>{
    console.log(res);
    
})

