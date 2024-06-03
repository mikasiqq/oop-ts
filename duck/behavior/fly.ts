export interface FlyBehavior {
  fly: () => void;
}

export class DisableFlyBehavior implements FlyBehavior {
  fly() {
    console.log("Я не умею летать");
  }
}

export class RadioControlFlyBehavior implements FlyBehavior {
  fly() {
    console.log("Я летаю на радиоуправлении");
  }
}

export class RocketFlyBehavior implements FlyBehavior {
  fly() {
    console.log("Я летаю на ракете");
  }
}

export class WingsFlyBehavior implements FlyBehavior {
  fly() {
    console.log("Я летаю на крыльях");
  }
}
