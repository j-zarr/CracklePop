const printResults = require('./recursive'); 

describe('printResults', () =>{
    it('should print "Crackle"', ()=>{
        expect(printResults(5)[2]).toBe("Crackle");
    })
    it('should print "Pop"', ()=>{
        expect(printResults(5)[4]).toBe("Pop");

    })
    it('should print the value of "CracklePop', ()=>{
        expect(printResults(15)[14]).toBe("CracklePop");

    })
    it('should print the value of n', ()=>{
        expect(printResults(100)[97]).toBe(98);

    })

}); 