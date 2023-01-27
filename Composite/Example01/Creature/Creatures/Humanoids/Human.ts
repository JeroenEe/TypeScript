import Arm from "../../Body/BodyParts/Limbs/Arm";
import Head from "../../Body/BodyParts/Head";
import Humanoid from "../Humanoid";
import Leg from "../../Body/BodyParts/Limbs/Leg";
import { Attributes } from "../../../Terminology";
import Torso from "../../Body/BodyParts/Torso";
import { Sides } from "../../SidesEnum";

export default class Human extends Humanoid {
  name: string;

  constructor(name = 'No Name') {
    super();

    this.name = name;

    this.addComponent(new Torso());
    this.addComponent(new Head());
    this.addComponent(new Arm(undefined, Sides.Left));
    this.addComponent(new Arm(undefined, Sides.Right));
    this.addComponent(new Leg(undefined, Sides.Left));
    this.addComponent(new Leg(undefined, Sides.Right));

    this.addAttribute(Attributes.Human);
  }
}
