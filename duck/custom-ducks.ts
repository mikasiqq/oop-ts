import { DisableFlyBehavior, WingsFlyBehavior } from "./behavior/fly";
import {
  DisableQuackBehavior,
  LoudQuackBehavior,
  RareQuackBehavior,
} from "./behavior/quack";
import { Duck } from "./duck";

export class AlbinoDuck extends Duck {
  constructor() {
    super("Утка-альбинос", new WingsFlyBehavior(), new LoudQuackBehavior());
  }
}

export class DecoyDuck extends Duck {
  constructor() {
    super("Утка-приманка", new DisableFlyBehavior(), new LoudQuackBehavior());
  }
}

export class RedHeadDuck extends Duck {
  constructor() {
    super(
      "Красноголовая утка",
      new WingsFlyBehavior(),
      new DisableQuackBehavior()
    );
  }
}

export class RubberDuck extends Duck {
  constructor() {
    super(
      "Резиновая утка",
      new DisableFlyBehavior(),
      new DisableQuackBehavior()
    );
  }
}

export class SaxonDuck extends Duck {
  constructor() {
    super("Саксонская утка", new WingsFlyBehavior(), new RareQuackBehavior());
  }
}
