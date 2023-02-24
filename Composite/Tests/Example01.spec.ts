import assert = require("assert");
import Human from "../Example01/Creature/Creatures/Humanoids/Human";
import World from "../Example01/World/World";

describe("Composite Pattern Example01", () => {
  it("Should add and remove Patrick from this world, leaving nothing of him behind.", () => {
    const world = new World();
    const patrick = new Human("Patrick");

    world.add(patrick);
    // console.log("A world with Patrick", world.children);
    assert(
      world.children.get(patrick.id) === patrick.id,
      "Failed to add Patrick to the component."
    );

    world.remove(patrick);
    // console.log("A world without Patrick", world.children);
    assert(
      world.children.get(patrick.id) === undefined,
      "Failed to remove Patrick from the component."
    );
  });

  it("Should add all human parts of Patrick on creation.", () => {
    const world = new World();
    const patrick = new Human("Patrick");

    world.add(patrick);
    // console.log("A world with Patrick", world.children);
    assert(
      world.children.get(patrick.id) === patrick.id,
      "Failed to add Patrick."
    );
  });
});