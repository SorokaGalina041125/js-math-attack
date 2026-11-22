import Magician from '../Magician';
import Daemon from '../Daemon';

describe('Magician and Daemon attack & stoned logic', () => {
  test('should calculate attack with linear distance falloff without stoned', () => {
    const magician = new Magician('Merlin');
    magician.attack = 100;
    magician.distance = 2;

    expect(magician.attack).toBe(90);

    magician.distance = 5;
    expect(magician.attack).toBe(60);
  });

  test('should apply stoned formula on top of distance falloff (example from task: 100, dist 2 -> 85)', () => {
    const daemon = new Daemon('Azazel');
    daemon.attack = 100;
    daemon.distance = 2;
    daemon.stoned = true;

    expect(daemon.stoned).toBe(true);
    expect(daemon.attack).toBe(85);
  });

  test('should clamp attack at 0 if stoned penalty exceeds attack', () => {
    const magician = new Magician('WeakMage');
    magician.attack = 10;
    magician.distance = 5;
    magician.stoned = true;

    expect(magician.attack).toBe(0);
  });

  test('should initialize default properties for Magician and Daemon', () => {
    const magician = new Magician('Gandalf');
    const daemon = new Daemon('Balrog');

    expect(magician.type).toBe('Magician');
    expect(magician.defence).toBe(40);
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.stoned).toBe(false);

    expect(daemon.type).toBe('Daemon');
    expect(daemon.defence).toBe(40);
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
  });
});