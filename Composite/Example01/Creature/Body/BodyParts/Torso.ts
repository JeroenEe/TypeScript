import { Attributes } from "../../../Terminology";
import BodyPart from "../BodyPart";

export default class Torso extends BodyPart {
  constructor(hp?: number) {
    super(hp);
    this.addAttribute(Attributes.Torso)
  }
}