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

    this.add(new Torso());
    this.add(new Head());
    this.add(new Arm(undefined, Sides.Left));
    this.add(new Arm(undefined, Sides.Right));
    this.add(new Leg(undefined, Sides.Left));
    this.add(new Leg(undefined, Sides.Right));

    this.addAttribute(Attributes.Human);
  }
}
