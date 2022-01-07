const Client = require('./index');

describe('Client', () => {
  const clientObject = new Client('Emanuel', 'Patricio', 21);

  it('toString() must return class object values in a string', () => {
    expect(clientObject.toString()).toBe('Emanuel Patricio, 21');
  });


  it('name and lastName attributes must not be empties', () => {
    let clientEmptyNameOrLastName = new Client('', 'Patricio', 21);
    expect(() => clientEmptyNameOrLastName).toThrowError();
  });

});
