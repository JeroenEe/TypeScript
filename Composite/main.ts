import Human from "./Example01/Creature/Creatures/Humanoids/Human";
import { Attributes } from "./Example01/Terminology";
import World from "./Example01/World/World";

// Example01
const world: World = new World();

world.addComponent(new Human());
world.addComponent(new Human('Patrick'))

console.log("World", world);

console.log(
  "Humans",
  world.children.filter((child) =>
    child.attributes.find((attribute) => attribute === Attributes.Human)
  )
);

// 