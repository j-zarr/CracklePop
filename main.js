function printResults(){
    for(let i = 1; i <=10; i++){
        if( i % 3 == 0){
            console.log("Crackle")
        }
        else if( i % 5 == 0){
            console.log("Pop")
        }
        else{
            console.log(i);
        }        
    }

}

printResults(); 