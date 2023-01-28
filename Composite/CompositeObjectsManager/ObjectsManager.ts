import IComposite, { Children } from "../Example01/IComposite";
import { Attributes } from "../Example01/Terminology";
import { v4 as UUID } from "uuid";

export type AttributeList = Map<Attributes, Children>;

export class EventManager {}

export default class ObjectsManager {
  private attributes = new Map();
  private static instance: ObjectsManager;

  addComponentByAttribute(attribute: Attributes, component: IComposite) {
    let components = this.attributes.get(attribute);
    if (components === undefined) {
      components = new Map();
    }
    components.set(component.id, component);
  }

  removeComponent(id: UUID) {
    for (let [attribute, children] of this.attributes.entries()) {
      if (children !== undefined) {
        children.delete(id);
      }
    }
  }

  getAllComponents() {
    const list: IComposite[] = [];
    for (const attribute in Attributes) {
      const composites = this.attributes[attribute];
      if (composites !== undefined) list.push(composites);
    }
    return list;
  }

  getComponentsByAttribute(attribute: Attributes): IComposite[] {
    return this.attributes[attribute];
  }

  static getInstance(): ObjectsManager {
    if (!this.instance) this.instance = new ObjectsManager();
    return this.instance;
  }
}
