module.exports = function zeros(expression) {
  // your solution
  let expressionArray = [];
  let count;
  let r = /\d+/; //regexp for numbers
  
    if (expression.indexOf('*') !== -1) {
      expressionArray = expression.split('*');
      } else {
        expressionArray = expression;
      }
      console.log(expressionArray);

      expressionArray.forEach(element => {
        if (element[element.length - 2] === '!') { // checking for type of factorial
          element = element.match(r);
          console.log('element: ' + element);
          if (element%2 === 0) {
            // console.log('remainder: ' + element%2); //остаток 
            while (element > 0) {
              console.log('element: ' + element);
              element /= 10;
              count += element;
              // console.log('count: ' + count);
            } 
          }
        } else {
          while (element > 0) {
            element /= 5;
            count += element;
          }
        }
          
      });
      
      return count;
    }