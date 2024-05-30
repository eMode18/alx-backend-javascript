import Car from './10-car.js';

const brandSymbol = Symbol('brand');
const motorSymbol = Symbol('motor');
const colorSymbol = Symbol('color');
const rangeSymbol = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super();
    this[brandSymbol] = brand;
    this[motorSymbol] = motor;
    this[colorSymbol] = color;
    this[rangeSymbol] = range;
  }

  cloneCar() {
    const carClone = new Car();
    carClone._brand = this[brandSymbol];
    carClone._motor = this[motorSymbol];
    carClone._color = this[colorSymbol];
    return carClone;
  }
}

