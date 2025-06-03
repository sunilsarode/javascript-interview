// function debounceLeading(fun,wait){
//     let timer=null;
//     return function(){
//         let context=this;
//         let arg=arguments;

//         // If no timer is active, invoke the function immediately
//         if(!timer){
//                fun.apply(context,arg); 
//         }
//         clearTimeout(timer);
//         timer=setTimeout(()=>{
//             timer=null
//         },wait)

//     }
// }

function debounce(fun,wait){
    let timer=null
    return function(){
        let context=this;
        let arg=arguments;
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fun.apply(context,arg);
        },wait);
    }
}


const call1=debounce((val)=>{
    console.log(val);
},100)


call1("a")
call1("ab")
call1("abc")

