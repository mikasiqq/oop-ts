import { FlyBehavior } from "./behavior/fly";
import { QuackBehavior } from "./behavior/quack";

export class Duck {
  constructor(
    private name: string,
    private flyBehavior: FlyBehavior,
    private quackBehavior: QuackBehavior
  ) {}

  displayName() {
    console.log(this.name);
  }

  performQuack() {
    this.quackBehavior.quack();
  }

  performFly() {
    this.flyBehavior.fly();
  }

  setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  setQuackBehavior(quackBehavoir: QuackBehavior) {
    this.quackBehavior = quackBehavoir;
  }
}
