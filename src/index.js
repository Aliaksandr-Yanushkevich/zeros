module.exports = function zeros(expression) {
  let expressionArray = expression.split('*'); //transform input string into array
  let countOf2 = 0;
  let countOf5 = 0;
  let r = /\d+/; //regexp for numbers
  let factorial

      expressionArray.forEach(element => {
        factorial = element.match(r);
        if (element[element.length - 2] === '!' && factorial%2 === 0) { // checking for type of factorial and count 2
          for (i = 2; i <= factorial; i *= 2) {        
            countOf2 += Math.floor(factorial/i);
          }
        } else if (element[element.length - 2] !== '!' ) {  // single factorial
          for (i = 2; i <= factorial; i *= 2) {
            countOf2 += Math.floor(factorial/i);
          }
        } else {
          countOf2 += 0; 
        }
        for (i = 5; i <= factorial; i *= 5) {
          if (element[element.length - 2] === '!' && factorial%2 === 0) { // count 5
              countOf5 += Math.floor(Math.floor(factorial/i)/2);
          } else if (element[element.length - 2] === '!' && factorial%2 !== 0) {
              countOf5 += Math.ceil(Math.floor(factorial/i)/2);
          } else {
            countOf5 +=Math.floor(factorial/i);
          }
        } 
      });
      return Math.min(countOf2, countOf5)
    }
