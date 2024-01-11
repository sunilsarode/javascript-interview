Array.prototype.myFilter = function (callBack,context){
    
    if(!callBack.call || !callBack.apply || typeof callBack !=='function'){
        throw new TypeError(`the ${callBack} is not a function`);
    }

    const len=this.length;
    const arr =[]

    let k=0;

    while(k<len){
        
        if(this[k]!==undefined){
            if(callBack.call(context,this[k],k,this)){
                arr.push(this[k]);
            }
        }

        k++;
    }

    return arr;

}

const ans=[1,2,,4,5].myFilter((x)=>x%2===0)
console.log(ans);

const ans1=[1,2,,4,5].filter((x)=>x%2===0)

console.log(ans1);