const searchEmployee = require('./searchEmployee');

describe('exercise 1 bonus tests the searchEmployee function', () => {
  it('Tests if the searchEmployee function is defined', () => {
    expect(searchEmployee).toBeDefined();
  })

  it('Tests if searchEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  })

  it('checks if passing an id by parameter returns the correct person', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana')
  })

  it('test if searchEmployee function throws an error when parameter id or datail not found', () => {
    expect(() => {searchEmployee('', 'firstName')}).toThrow();
    expect(() => {searchEmployee('', 'firstName')}).toThrowError(new Error('ID não identificada'));
    expect(() => {searchEmployee('8579-6', '')}).toThrow();
    expect(() => {searchEmployee('8579-6', '')}).toThrowError(new Error('Informação indisponível'));
  })
})