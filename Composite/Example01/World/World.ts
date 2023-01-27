import Component from "../Component";
import { Attributes } from "../Terminology";

export default class World extends Component {
  constructor() {
    super();
    this.addAttribute(Attributes.World);
  }
}
