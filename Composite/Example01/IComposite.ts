import { Attributes } from "./Terminology";
import { v4 as UUID } from "uuid";

export type Children = Map<UUID, IComposite>;

export default interface IComposite {
  id: UUID;
  attributes: Attributes[];
  children?: Children;
  parent?: IComposite;
  destroy();
  add(component: IComposite);
  remove(component: IComposite);
}