import Human from "./Example01/Creature/Creatures/Humanoids/Human";
import World from "./Example01/World/World";
import { Attributes } from "./Example01/Terminology";
import ObjectsManager from "./CompositeObjectsManager/ObjectsManager";

// Singleton
// const objects: ObjectsManager = new ObjectsManager();

// Example01
const world: World = new World();

world.addComponent(new Human("Bertha"));
const patrick = new Human("Patrick");

world.addComponent(patrick);
console.log(world.children);

world.removeComponent(patrick);
console.log(world.children);

ObjectsManager.getInstance().getComponentsByAttribute(Attributes.Human);

for (let i = 0; i < 100; i++) {
  world.addComponent(new Human());
}

let perf1 = performance.now();
ObjectsManager.getInstance().getComponentsByAttribute(Attributes.Leg);
let perf2 = performance.now();
console.log(perf2 - perf1);

perf1 = performance.now();
world.children.filter((child) =>
  child.attributes.find((attribute) => attribute === Attributes.Human)
).filter(human => human.attributes.find((attribute) => attribute === Attributes.Leg));
perf2 = performance.now();
console.log(perf2 - perf1);

//
