function throttle(fun,wait){
    let flag=true;
    return function(){
         let context=this;
         let arg=arguments;
        if(flag){
           
            fun.apply(context,arg);
            flag=false;
             setTimeout(()=>{
                flag=true;
            },wait)
        }        
       
    }
}

const test= throttle((val)=>{
    console.log(val);
},1000)

test('Hi');
test('Hellow');

setTimeout(()=>{
    test('Bye');
},100);