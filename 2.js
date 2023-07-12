
// Function that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: "John", age: 25 };
        resolve(data);
      }, 2000);
    });
  }
  
  // Function that uses the Promise
  function processData() {
    console.log("Start processing data...");
  
    fetchData()
      .then((data) => {
        console.log("Data received:", data);
        return data.age;
      })
      .then((age) => {
        console.log("Age:", age);
        return age * 2;
      })
      .then((doubleAge) => {
        console.log("Double Age:", doubleAge);
        throw new Error("Something went wrong");
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {
        console.log("Finished processing data.");
      });
  }
  
  processData();