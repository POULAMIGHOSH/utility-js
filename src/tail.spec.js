const tail = require('./tail');

describe('Tail', () => {

    it('array has more than zero elements', () => {
        expect(tail([1,2,3,4,5])).toEqual([2,3,4,5]);
    });

    it('array has no elements', () => {
        expect(tail([])).toEqual([]);
    });

})