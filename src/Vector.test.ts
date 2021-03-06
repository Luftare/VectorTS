import Vector from './Vector';

describe('Vector', () => {
  it('can output x and y as a string', () => {
    const vector = new Vector(15, 20);

    expect(vector.toString()).toBe('15,20');
  });

  it('provides default values', () => {
    const vector = new Vector();

    expect(vector.toString()).toBe('0,0');
  });

  it('can clone itself', () => {
    const vector = new Vector(5, 9);

    const clone = vector.clone();

    expect(clone.toString()).toBe('5,9');
  });

  it('has getters for cartesian coordinates', () => {
    const vector = new Vector(5, 21);

    expect(vector.getX()).toBe(5);
    expect(vector.getY()).toBe(21);
  });

  it('has getters for polar coordinates', () => {
    const vector = new Vector(12, 5);

    expect(vector.getAngle()).toBeCloseTo(0.3947911, 5);
    expect(vector.getRadius()).toBe(13);
  });

  it('can add a vector', () => {
    const a = new Vector(5, 5);
    const b = new Vector(5, 5);

    a.add(b);

    expect(a.toString()).toBe('10,10');
  });

  it('can add multiple vectors', () => {
    const a = new Vector(5, 5);
    const b = new Vector(5, 5);
    const c = new Vector(2, 1);

    a.add(b, c);

    expect(a.toString()).toBe('12,11');
  });

  it('can subtract a vector', () => {
    const a = new Vector(5, 5);
    const b = new Vector(3, 2);

    a.subtract(b);

    expect(a.toString()).toBe('2,3');
  });

  it('can subtract multiple vectors', () => {
    const a = new Vector(5, 5);
    const b = new Vector(5, 5);
    const c = new Vector(2, 1);

    a.subtract(b, c);

    expect(a.toString()).toBe('-2,-1');
  });
});
