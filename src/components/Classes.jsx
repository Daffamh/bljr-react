export default function Car() {
    class Car {
  constructor(name) {
    this.brand = name;
  }

  present() { // Method
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() { // Method
    return this.present() + ', it is a ' + this.model;
  }
}

const myCar = new Model("Ford", "Mustang")
    return <h2>{myCar.show()}</h2>
}