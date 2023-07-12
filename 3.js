function resultArr(array) {
    let result = [];
  
    array.forEach(element => {
      if (Array.isArray(element)) {

       result = result.concat(resultArr(element));

      } else {

        result.push(element);

      }
        });
  
    return result;
  }
  
  const primeArray = [4,[[5],[6,[7],8],9,10]];
  const arrayResult = resultArr(primeArray);
// for each
  console.log(arrayResult);
  //////////// mapping


function resultArrNd(array) {
  return array.reduce((arrayNd, arrayFd) => {
    if (Array.isArray(arrayFd)) {
    return arrayNd.concat(resultArrNd(arrayFd));
    }
    return arrayNd.concat(arrayFd);
  }, []);
}

const resultWithMapping = resultArrNd(primeArray).map(Number);
console.log(resultWithMapping); 