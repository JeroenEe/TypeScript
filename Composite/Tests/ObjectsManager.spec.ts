import assert = require("assert");
import ObjectsManager from "../CompositeObjectsManager/ObjectsManager";
import Human from "../Example01/Creature/Creatures/Humanoids/Human";
import { Attributes } from "../Example01/Terminology";
import World from "../Example01/World/World";

describe("ObjectsManager", () => {
  it("Should add Patrick's limbs to the Objects Manager.", () => {
    const world = new World();
    const patrick = new Human("Patrick");

    world.add(patrick);
    // console.log("A world with Patrick", world.children);
    const heads = ObjectsManager.getInstance().getComponentsByAttribute(
      Attributes.Head
    );
    const arms = ObjectsManager.getInstance().getComponentsByAttribute(
      Attributes.Arm
    );
    const legs = ObjectsManager.getInstance().getComponentsByAttribute(
      Attributes.Leg
    );
    const torsos = ObjectsManager.getInstance().getComponentsByAttribute(
      Attributes.Torso
    );

    assert(heads.length === 1, "Patrick doesnt seem to have exactly one head.");
    assert(
      torsos.length === 1,
      "Patrick doesnt seem to have exactly one torso."
    );
    assert(arms.length === 2, "Patrick doesnt seem to have exactly two arms");
    assert(legs.length === 2, "Patrick doesnt seem to have exactly two legs");
  });

  it("Should remove Patrick's limbs from the Objects Manager.", () => {
    const world = new World();
    const patrick = new Human("Patrick");

    world.add(patrick);
    // console.log("A world with Patrick", world.children);

    assert(
      ObjectsManager.getInstance().getAllComponents().length === 0,
      "Failed to remove parts of Patrick."
    );
  });
});
