import Human from "./Example01/Creature/Creatures/Humanoids/Human";
import World from "./Example01/World/World";
import { Attributes } from "./Example01/Terminology";
import ObjectsManager from "./CompositeObjectsManager/ObjectsManager";

// Example01
const world: World = new World();

world.addComponent(new Human("Bertha"));
const patrick = new Human("Patrick");

world.addComponent(patrick);
console.log('A world with Patrick', world.children);

world.removeComponent(patrick);
console.log('A world without Patrick', world.children);
console.log('ARMS', ObjectsManager.getInstance().getComponentsByAttribute(Attributes.Arm));
console.log('LEGS', ObjectsManager.getInstance().getComponentsByAttribute(Attributes.Leg));
console.log('HEADS', ObjectsManager.getInstance().getComponentsByAttribute(Attributes.Head));
console.log('TORSOS', ObjectsManager.getInstance().getComponentsByAttribute(Attributes.Torso));
console.log('COMPONENTS', ObjectsManager.getInstance().getAllComponents());

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
