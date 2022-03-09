function printResults(n) {

    let results = '';
    if (n < 1) return;
    
    if (n % 3 == 0 && n % 5 == 0) {
        results = "CracklePop";
    }
    else if (n % 3 == 0) {
        results = "Crackle";
    }
    else if (n % 5 == 0) {
        results = "Pop";
    }
    else {
        results = n;
    }

    printResults(n - 1);
    console.log(results);
}


printResults(100); 