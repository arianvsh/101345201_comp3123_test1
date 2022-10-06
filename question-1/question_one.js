const lowerCaseWords = (arr) =>
  new Promise((res, rej) => {
    
    if (arr && arr.length > 0 ){
      res(arr.filter((item) => isNaN(item)).map((word) => word.toLowerCase()));

    }else{
      rej("Input not valid!");
    } 


  });

lowerCaseWords(["Pizza", 10, true, 25, false, "Wings"])
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));







