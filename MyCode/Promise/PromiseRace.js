function promiseRace(arrOfPromise) {
  return new Promise((resolve, reject) => {
    if (arrOfPromise.length === 0) {
      return;
    }

    arrOfPromise.forEach((item) => {
      Promise.resolve(item).then(
        (value) => {
          resolve(value);
        },
        (response) => {
            reject(response)
        }
      );
    });
  });
}

const p0=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(42);
    },400);
})
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Error');
    },100)
});

promiseRace([p0,p1]).then((val)=>{
    console.log(val);
})