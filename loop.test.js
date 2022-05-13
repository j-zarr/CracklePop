const printResults = require('./loop'); 

describe('printResults', () =>{
    it('should print "Crackle"', ()=>{
        expect(printResults(5)[2]).toEqual("Crackle");
    })
    it('should print "Pop"', ()=>{
        expect(printResults(5)[4]).toEqual("Pop");

    })
    it('should print "CracklePop"', ()=>{
        expect(printResults(15)[14]).toEqual("CracklePop");

    })
    it('should print the value of n', ()=>{
        expect(printResults(100)[97]).toEqual(98);

    })

}); 