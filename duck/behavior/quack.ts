export interface QuackBehavior {
  quack: () => void;
}

export class DisableQuackBehavior implements QuackBehavior {
  quack() {
    console.log("Я не умею крякать");
  }
}

export class LoudQuackBehavior implements QuackBehavior {
  quack() {
    console.log("Я крякаю громко");
  }
}

export class RareQuackBehavior implements QuackBehavior {
  quack() {
    console.log("Я крякаю редко");
  }
}

export class SlowQuackBehavior implements QuackBehavior {
  quack() {
    console.log("Я крякаю протяжно");
  }
}
