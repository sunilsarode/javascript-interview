function generateTable(row, col) {
    console.log(row, col);
    let arr = new Array(row); // Creating an array with 3 elements
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(col); // Creating subarrays with 4 elements each
    }

    let c = 0;
    for (let i = 0; i < col; i++) {
      if (i % 2 === 0) {
        for (let j = 0; j < row; j++) {
          c++;
          arr[j][i] = c;
        }
      } else {
        for (let j = row - 1; j >= 0; j--) {
          c++;
          arr[j][i] = c;
        }
      }
    }

    console.log(arr);
  }

  generateTable('3','3')