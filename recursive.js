
let storedArr = [];

const printResults = (n) => {

    let results = [];


    if (n < 1) return;
    
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
 
   printResults(n - 1);
   
   storedArr.push(results.pop());
   return storedArr;
   
}


console.log(printResults(100));

module.exports = printResults; 