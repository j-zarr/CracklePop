const printResults = (n) => {
    let results = [];
    
    for(let i = 1; i <= n; i++){
        if( i % 3 == 0 && i % 5 == 0){
            results.push("CracklePop");
        }
        else if( i % 3 == 0){
            results.push("Crackle");
        }
        else if( i % 5 == 0){
            results.push("Pop");
        }
        else{
           results.push(i); 
        }        
    } return results;

}

console.log(printResults(100));

module.exports = printResults;