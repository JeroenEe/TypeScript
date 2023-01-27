import Component from "./Component";
import { Attributes } from "./Terminology";

export default interface IComposite {
  attributes: Attributes[];
  children: IComposite[];
  parent?: IComposite;
  addComponent(component: IComposite);
  removeComponent(component: IComposite);
}