import Component from "../Component";
import { Attributes } from "../Terminology";

export default abstract class Creature extends Component {
  constructor() {
    super();
    this.addAttribute(Attributes.Creature);
  }
}
