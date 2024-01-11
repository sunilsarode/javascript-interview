Array.prototype.myMap = function(callBack,context){

    if(!callBack.call || !callBack.apply || typeof callBack !== 'function'){
        throw new TypeError(`${callBack} is not a function`);
    }

    const len=this.length;
    const arr=new Array(len);
    let k=0;
    while(k<len){

        if(this[k]!==undefined){
             arr[k]=callBack.call(context,this[k],k,this);
        }

        k++;
    }
    return arr;
}

const arr=[1,2,3,4,5].myMap((x)=>x*x);

console.log(arr);

const arr1=[1,2,3,4,5].myMap(1);
console.log(arr);
