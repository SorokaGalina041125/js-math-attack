import MathCharacter from './MathCharacter';

export default class Daemon extends MathCharacter {
  constructor(name, attack = 10, defence = 40) {
    super(name, 'Daemon', attack, defence);
  }
}