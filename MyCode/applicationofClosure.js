//this is funtion currying

function multiply(x){
    return function (y){
        console.log(x*y);
    } 
}

const multiplyByTwo=multiply(2);

multiplyByTwo(5);

const multiplyByTen=multiply(10);

multiplyByTen(10);


//modular code

function counter(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    }
}

let counter1=counter();
counter1();
counter1();
counter1();

// //Can you make it better ?
// function counter(){
//     let count=0;
//     this.increase= function(){
//         count++;
//         console.log(count);
//     }
    
//     this.decrease= function(){
//         count--;
//         console.log(count);
//     }
// }

// let counter2=new counter();
// counter2.increase();
// counter2.decrease();
// counter2.increase();



function applyDiscount(price){
    return function applyPercentageDiscount(precentageDiscount){
        return function applyTax(rate){

            let dicountPrice=price-( price* (precentageDiscount/100));
            dicountPrice=dicountPrice+(dicountPrice*(rate/100));
            return dicountPrice;
        }
    }
}

let ans=applyDiscount(100)(10)(18);

console.log(ans);



function sum(valueA){
    return function (valueB){
        return valueB ==undefined ?valueA :sum(valueB+valueA);
    }
}

let res=sum(2)(3)();
console.log(res);



function mul(valueA){
    return function (valueB){
        return valueB ==undefined ? valueA :  mul(valueA*valueB);
    }
}

let mulans=mul(3)(4)();

console.log(mulans);


function createPrinter() {
    const printedValues = new Set(); // Set is now inside the function

    return function printValue(value) {
        if (printedValues.has(value)) {
            console.log("already printed");
        } else {
            console.log("hello", value);
            printedValues.add(value);
        }
    };
}

// Create an instance of the function
const printValue = createPrinter();

printValue("sunil"); // Output: hello sunil
printValue("john");  // Output: hello john
printValue("sunil"); // Output: already printed
printValue("doe");   // Output: hello doe
printValue("john");  // Output: already printed
