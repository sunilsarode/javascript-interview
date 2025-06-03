

Function.prototype.myBind = function (context, ...argArray) {
    const originalMethod=this;
    return function(...args){
       return originalMethod.apply(context,[...argArray,...args])
    }
 };
 