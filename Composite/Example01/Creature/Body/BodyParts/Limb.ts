import { Attributes } from "../../../Terminology";
import { Sides } from "../../SidesEnum";
import BodyPart from "../BodyPart";

export default abstract class Limb extends BodyPart {
  constructor(hp: number, side: Sides) {
    super(hp, side);
    this.addAttribute(Attributes.Limb);
  }
}
