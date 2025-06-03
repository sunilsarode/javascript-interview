async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
    await new Promise(resolve => setTimeout(resolve, 0));
    console.log("C");
  }
  
  console.log("D");
  foo();
  console.log("E");