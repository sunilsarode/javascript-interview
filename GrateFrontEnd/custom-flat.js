Array.prototype.myflat=function(){
    originalArr=this
    const newArr=[];
    flatIt(originalArr,newArr);
    return newArr;   
}

function flatIt(originalArr,newArr){
    
    if(Array.isArray(originalArr)){
        for(let i=0;i<originalArr.length;i++){
            if(Array.isArray(originalArr[i])){
                flatIt(originalArr[i],newArr)   
            }else{
                newArr.push(originalArr[i]);
            }
        }
    }
}




const arr=[1, [2, 3]].flat();
console.log(arr);

const arr1=[1, [2, 3]].myflat();
console.log(arr1)