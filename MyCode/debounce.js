function debounceLeading(fun,wait){
    let timer=null;
    return function(){
        let context=this;
        let arg=arguments;

        // If no timer is active, invoke the function immediately
        if(!timer){
               fun.apply(context,arg); 
        }
        clearTimeout(timer);
        timer=setTimeout(()=>{
            timer=null
        },wait)

    }
}