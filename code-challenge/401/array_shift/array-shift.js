function insertShiftArray(item) {
  let myArr = [3, 77, 8, 9, 93, 47,1000, 12, 67, 1111, 7]
  let item = -5;
  let temp;
  let n = myArr.length
  if( n % 2 === 0){
    for (let k = (n-1); k > (n/2); k--){
        //console.log(myArr[k - 1]);
       temp = myArr[k];
       myArr[k] = item;
       myArr[k + 1] = temp;
       }

  }else if( n % 2 !== 0){
    for (let k = (n-1); k > (n/2); k--){
     //console.log(myArr[k - 1]);
    temp = myArr[k];
    myArr[k] = item;
    myArr[k + 1] = temp;
    }
  }
}