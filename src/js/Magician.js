import MathCharacter from './MathCharacter';

export default class Magician extends MathCharacter {
  constructor(name, attack = 10, defence = 40) {
    super(name, 'Magician', attack, defence);
  }
}