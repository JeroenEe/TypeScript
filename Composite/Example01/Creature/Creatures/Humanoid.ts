import { Attributes } from '../../Terminology';
import Creature from '../Creature';

export default abstract class Humanoid extends Creature {
  constructor() {
    super();
    this.addAttribute(Attributes.Humanoid);
  }
}