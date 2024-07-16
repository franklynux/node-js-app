describe('sum function', () => {
    const sum = (a, b) => a + b;
  
    it('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
  
    it('adds 2 + 3 to equal 5', () => {
      expect(sum(2, 3)).toBe(5);
    });
  });
