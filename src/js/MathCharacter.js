export default class MathCharacter {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.defence = defence;
    this.health = 100;
    this.level = 1;
    this.baseAttack = attack;
    this.distance = 1;
    this.stonedValue = false;
  }

  get stoned() {
    return this.stonedValue;
  }

  set stoned(value) {
    this.stonedValue = Boolean(value);
  }

  get attack() {
    const distanceFactor = Math.max(0, 1 - (this.distance - 1) * 0.1);
    let result = this.baseAttack * distanceFactor;

    if (this.stonedValue) {
      result -= Math.log2(this.distance) * 5;
    }

    return Math.max(0, result);
  }

  set attack(value) {
    this.baseAttack = value;
  }
}