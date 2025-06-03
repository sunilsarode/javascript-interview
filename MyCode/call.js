

Function.prototype.myBind = function (context, ...argArray) {
    const originalMethod=this;
    return function(...args){
       return originalMethod.apply(context,[...argArray,...args])
    }
 };
 
 
 
 let obj={
     id:1,
     name:"Sunil",
     school: "Xyz"
 }
 
 function printData(city,state,country){
     console.log(this.name + ", "+this.school + ", "+city + " "+state+" "+country );
 }
 
  printData.call(obj,"Mumbai","Maharashtra");
  printData.apply(obj,["Mumbai","Maharashtra"]);
 
 
 const callItLater=printData.bind(obj,"Mumbai","Maharashtra");
 
 callItLater();
 
 const callLater1=printData.myBind(obj,"Mumbai","Maharashtra");
 
 callLater1("Indian");
 