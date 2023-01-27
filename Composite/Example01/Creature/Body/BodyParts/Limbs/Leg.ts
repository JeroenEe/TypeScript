import { Attributes } from "../../../../Terminology";
import { Sides } from "../../../SidesEnum";
import Limb from "../Limb";

export default class Leg extends Limb {
  constructor(hp: number = 1, side: Sides) {
    super(hp, side);

    this.addAttribute(Attributes.Leg);
  }
}