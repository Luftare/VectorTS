export default class Vector {
  private x: number;
  private y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  toString(): string {
    return `${this.x},${this.y}`;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  addX(x: number): Vector {
    this.x += x;
    return this;
  }

  addY(y: number): Vector {
    this.y += y;
    return this;
  }

  clone(): Vector {
    return new Vector(this.getX(), this.getY());
  }

  getAngle(): number {
    return Math.atan2(this.y, this.x);
  }

  getRadius(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  add(...vectors: Vector[]): Vector {
    return vectors.reduce((sum, vector) => {
      sum.addX(vector.getX());
      sum.addY(vector.getY());
      return sum;
    }, this);
  }

  subtract(...vectors: Vector[]): Vector {
    return vectors.reduce((sum, vector) => {
      sum.addX(-vector.getX());
      sum.addY(-vector.getY());
      return sum;
    }, this);
  }
}
