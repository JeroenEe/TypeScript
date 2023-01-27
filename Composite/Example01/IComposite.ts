import { Attributes } from "./Terminology";
import { v4 as UUID } from "uuid";

export default interface IComposite {
  id: UUID;
  attributes: Attributes[];
  children: IComposite[];
  parent?: IComposite;
  addComponent(component: IComposite);
  removeComponent(component: IComposite);
}