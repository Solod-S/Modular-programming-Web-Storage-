const sum = (a, b) => a + b;

sum(4, 10);

class NewClasss {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}

const h = new NewClasss("Mango");
