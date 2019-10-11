module.exports = function zeros(expression) {
  let expressionArray = [];
  let countOf2 = 0;
  let countOf5 = 0;
  let r = /\d+/; //regexp for numbers
  
    if (expression.indexOf('*') !== -1) {
      expressionArray = expression.split('*');
      } else {
        expressionArray = expression;
      }
      console.log(expressionArray);

      expressionArray.forEach(element => {
        if (element[element.length - 2] === '!' && element.match(r)%2 === 0) { // checking for type of factorial and count 2
          for (i = 2; i <= element.match(r); i *= 2) {        
            countOf2 += Math.floor(element.match(r)/i);
            console.log('countOf2: ' + countOf2);
          }
        } else if (element[element.length - 2] !== '!') {  // single factorial
          for (i = 2; i <= element.match(r); i *= 2) {
            countOf2 += Math.floor(element.match(r)/i);
            console.log('countOf2: ' + countOf2);
          }
        } else {
          countOf2 += 0; 
        }

        
              
        if (element[element.length - 2] === '!' && element.match(r)%2 === 0) {
          for (i = 5; i <= element.match(r); i *= 5) {
            countOf5 += Math.floor(Math.floor(element.match(r)/i)/2);
            console.log('countOf5: ' + countOf5);
        }
      } else if (element[element.length - 2] === '!' && element.match(r)%2 !== 0) {
        countOf5 += Math.ceil(Math.floor(element.match(r)/i)/2);
        console.log('countOf5: ' + countOf5);
      } else {
        countOf5 +=Math.floor(element.match(r)/i);
        console.log('countOf5: ' + countOf5);
      }
      });
      return Math.min(countOf2, countOf5)
    }
