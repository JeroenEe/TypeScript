import ObjectsManager from "./CompositeObjectsManager/ObjectsManager";
import Human from "./Example01/Creature/Creatures/Humanoids/Human";
import { Attributes } from "./Example01/Terminology";
import World from "./Example01/World/World";

// Example01
let perf1: number;
let perf2: number;
const world: World = new World();

// world.addComponent(new Human("Bertha"));
const patrick = new Human("Patrick");

world.add(patrick);
console.log('A world with Patrick', world.children);

world.remove(patrick); // FIXME: Patrick's right arm and leg are... left behind. 🥁
console.log('A world without Patrick', world.children);
// console.log('ARMS', ObjectsManager.getInstance().getComponentsByAttribute(Attributes.Arm));
// console.log('LEGS', ObjectsManager.getInstance().getComponentsByAttribute(Attributes.Leg));
// console.log('HEADS', ObjectsManager.getInstance().getComponentsByAttribute(Attributes.Head));
// console.log('TORSOS', ObjectsManager.getInstance().getComponentsByAttribute(Attributes.Torso));
console.log('COMPONENTS', ObjectsManager.getInstance().getAllComponents());






// perf1 = performance.now();
// const amount = 100;
// for (let i = 0; i < amount; i++) {
//   world.addComponent(new Human());
// }
// perf2 = performance.now();
// console.log(`Added ${amount} humans in:`, perf2 - perf1);

//
