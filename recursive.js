
let storedArr = [];

const printResults = (n) => {

    let results = []; 

    if (n < 1) return results;

    if (n % 3 == 0 && n % 5 == 0) {
        results.push("CracklePop");
    }
    else if (n % 3 == 0) {
        results.push("Crackle");
    }
    else if (n % 5 == 0) {
        results.push("Pop");
    }
    else {
        results.push(n);
    }
   
//** was trying to avoid using a global array but cannot remove the fist instance of the empty array from the results **
//** leaving this line of code to revisit** 
//return [`${printResults(n - 1)}`, ...results];

 printResults(n-1);
 storedArr = [...storedArr, ...results];
  
return storedArr;

}

console.log(printResults(100));



module.exports = printResults; 