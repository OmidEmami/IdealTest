
 // Imperative
 function impFunc(array, func) {
    
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      var primeItem = func(array[i]);
      newArray.push(primeItem);
    }
    return newArray;
  }
   // Declarative
function decFunc(array, func) {
    return array.map(func);
  }
  
 
  
//for example
  var names = ["omid", "reze", "mamad", "karim"];

  function capitalize(name) {
    return name.toUpperCase();
  }


  var imperative = impFunc(names, capitalize);
  var declarative = decFunc(names, capitalize);
  console.log(imperative);
  console.log(declarative);
  
  