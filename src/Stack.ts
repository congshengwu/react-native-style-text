export default class Stack<T> {
  private count: number;
  private items: Array<T>;

  constructor() {
    this.count = 0;
    this.items = [];
  }

  push(element: T): void {
    this.items[this.count] = element;
    this.count++;
  }

  pop(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    this.items = this.items.filter((item) => item !== null);
    return result;
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.count - 1];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  size(): number {
    return this.count;
  }

  clear(): void {
    this.items = [];
    this.count = 0;
  }
}
