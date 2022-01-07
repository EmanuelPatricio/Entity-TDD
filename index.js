class Client {

  constructor (name, lastName, age) {
    if(name.length === 0 || lastName.length === 0) throw new Error('Empty values not accepted.');
    if(age < 18 || age > 120) throw new Error('Age is incorrect');

    this.name = name.replace(/\s/g, '');
    this.lastName = lastName.replace(/\s/g, '');
    this.age = age;
  }

  toString() {
    return `${this.name} ${this.lastName}, ${this.age}`;
  }

}

module.exports = Client;
