import assert = require("assert");
import ObjectsManager from "./CompositeObjectsManager/ObjectsManager";
import Human from "./Example01/Creature/Creatures/Humanoids/Human";
import World from "./Example01/World/World";

// Example01
let perf1: number;
let perf2: number;
let world: World = new World();

// world.addComponent(new Human("Bertha"));
const patrick = new Human("Patrick");

const amount = 1000;
const humans: Human[] = [];
for (let i = 0; i < amount; i++) {
  humans.push(new Human());
}
perf1 = performance.now();
humans.forEach((human) => world.add(human));
perf2 = performance.now();
console.log(`Added ${amount} humans in:`, perf2 - perf1);

perf1 = performance.now();
humans.forEach((human) => world.remove(human));
perf2 = performance.now();
console.log(`Destroyed ${amount} humans in:`, perf2 - perf1);

//

describe("Composite Pattern", () => {
  it("Should add and remove Patrick from this world, leaving nothing of him behind", () => {
    world = new World();

    world.add(patrick);
    console.log("A world with Patrick", world.children);
    assert(world.children.get(patrick.id) === patrick.id);

    world.remove(patrick);
    console.log("A world without Patrick", world.children);
    assert(world.children.get(patrick.id) === undefined);

    assert.equal(ObjectsManager.getInstance().getAllComponents().length, 0);
  });
});
