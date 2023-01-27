import Component from "../../Component";
import { Attributes } from "../../Terminology";
import { Sides } from "../SidesEnum";

export default abstract class BodyPart extends Component {
  hp: number;
  side: Sides;

  constructor(hp: number = 1, side = Sides.None) {
    super();
    this.hp = hp;
    this.side = side;
    this.addAttribute(Attributes.BodyPart)
  }
}