import IComposite from "../Example01/IComposite";
import { Attributes } from "../Example01/Terminology";

export type AttributeList = Map<Attributes, IComposite[]>;

export class EventManager {}

export default class ObjectsManager {
  private attributes = {} as AttributeList;
  private static instance: ObjectsManager;

  addComponentByAttribute(attribute: Attributes, component: IComposite) {
    if (this.attributes[attribute] === undefined)
      this.attributes[attribute] = [component];
    else this.attributes[attribute].push(component);
  }

  removeComponent(component: IComposite) {
    for (const attribute in Attributes) {
      const index = this.attributes[attribute]?.findIndex(
        (_component: IComposite) => _component.id === component.id
      );
      this.attributes[attribute]?.splice(index, 1);
    }
  }

  getAllComponents() {
    const list: IComposite[] = [];
    for (const attribute in Attributes) {
      const composites = this.attributes[attribute];
      if (composites != null) list.push(composites);
    }
  }

  getComponentsByAttribute(attribute: Attributes): IComposite[] {
    return this.attributes[attribute];
  }

  static getInstance(): ObjectsManager {
    if (!this.instance) this.instance = new ObjectsManager();
    return this.instance;
  }
}
