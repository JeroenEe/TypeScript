import ObjectsManager from "../CompositeObjectsManager/ObjectsManager";
import IComposite from "./IComposite";
import { Attributes } from "./Terminology";
import { v4 as UUID } from "uuid";

export default abstract class Component implements IComposite {
  id: UUID;
  attributes: Attributes[];
  children: IComposite[] = [];
  // parent: IComposite;
  private _objectsManager: ObjectsManager;
  private _parent: IComposite;

  constructor() {
    this.id = new UUID();
    this.attributes = [];
    this._objectsManager = ObjectsManager.getInstance();
  }

  addComponent(component: IComposite) {
    const parent: Component = this;
    component.parent = parent;
    this.children.push(component);
  }

  removeComponent(component: IComposite) {
    const index = this.children.indexOf(component);
    this.children.splice(index, 1);
    this._objectsManager.removeComponent(component);
  }

  addAttribute(attribute: Attributes) {
    this.attributes.push(attribute);
    this._objectsManager.addComponentByAttribute(attribute, this);
  }

  removeAttribute(attribute: Attributes) {
    const index = this.attributes.indexOf(attribute);
    this.attributes.splice(index, 1);
  }

  get parent(): IComposite {
    return this._parent;
  }
  set parent(v: IComposite) {
    this._parent = v;
  }
}
