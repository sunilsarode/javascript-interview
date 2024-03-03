async function sleep(duration) {
  return new Promise((resolve)=>{
    return setTimeout(()=>{

            resolve(`slept for ${duration}`);
    },duration)
  })
}



function test(){
    console.log('start');
    sleep(3000).then((res)=>console.log(res));
    console.log('end');
}

test()