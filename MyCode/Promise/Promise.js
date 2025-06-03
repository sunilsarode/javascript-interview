
function getData(){
    return new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            const obj=[
                {
                    id:1,
                    name: "Sunil"
                },
                {
                    id:2,
                    name: "nil"
                }
            ]
            
            //resolve(obj);
            reject("Error");
        },3000)
        
    })
}

getData().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
