import { RadioControlFlyBehavior } from "./behavior/fly";
import { SlowQuackBehavior } from "./behavior/quack";
import {
  AlbinoDuck,
  DecoyDuck,
  RedHeadDuck,
  RubberDuck,
  SaxonDuck,
} from "./custom-ducks";
import { Duck } from "./duck";

const rubberDuck = new RubberDuck();
const decoyDuck = new DecoyDuck();
const redHeadDuck = new RedHeadDuck();
const saxonDuck = new SaxonDuck();
const albinosDuck = new AlbinoDuck();

const ducks: Duck[] = [
  rubberDuck,
  decoyDuck,
  redHeadDuck,
  saxonDuck,
  albinosDuck,
];

for (const duck of ducks) {
  duck.displayName();
  duck.performFly();
  duck.performQuack();
  console.log(`\n`);
}

decoyDuck.displayName();
decoyDuck.setFlyBehavior(new RadioControlFlyBehavior());
decoyDuck.performFly();

redHeadDuck.displayName();
redHeadDuck.setQuackBehavior(new SlowQuackBehavior());
redHeadDuck.performQuack();
