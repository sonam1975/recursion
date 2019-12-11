// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className
  ) {
    var result = []; // since result should be an array

    var findElements = function(element) { // create a function that takes an element
      if (element.classList && element.classList.contains(className)) { // if the element has the classList and also the classlist contains the className class
        result.push(element); //push it in the result
      }
      if (element.childNodes) { // if there is presence of childnodes
        element.childNodes.forEach(function(childnode) {
          findElements(childnode);
        })
      }
    }
    findElements(document.body);
    return result;
  };
