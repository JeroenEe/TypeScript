import { Attributes } from "../../../Terminology";
import { Sides } from "../../SidesEnum";
import BodyPart from "../BodyPart";

export default class Head extends BodyPart {
  constructor(hp?: number, side = Sides.None) {
    super(hp, side);
    this.addAttribute(Attributes.Head)
  }
}