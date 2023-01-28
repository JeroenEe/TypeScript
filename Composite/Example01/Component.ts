import ObjectsManager from "../CompositeObjectsManager/ObjectsManager";
import IComposite, { Children } from "./IComposite";
import { Attributes } from "./Terminology";
import { v4 as UUID } from "uuid";

export default abstract class Component implements IComposite {
  id: UUID;
  attributes: Attributes[] = [];
  children?: Children = new Map();
  protected _parent: IComposite;
  private objectsManager: ObjectsManager;

  constructor() {
    this.id = new UUID();
    this.attributes = [];
    this.objectsManager = ObjectsManager.getInstance();
  }

  /**
   * Add child
   * @param component
   */
  add(component: IComposite) {
    const parent: IComposite = this;
    component.parent = parent;
    this.children.set(component.id, component);
  }

  /**
   * Call destroy in child.
   * @param component
   */
  remove(component: IComposite) {
    this.children.get(component.id)?.destroy();
  }

  addAttribute(attribute: Attributes) {
    this.attributes.push(attribute);
    this.objectsManager.addComponentByAttribute(attribute, this);
  }

  removeAttribute(attribute: Attributes) {
    const index = this.attributes.indexOf(attribute);
    this.attributes.splice(index, 1);
  }

  // Cleanup before removal.
  destroy() {
    this.disposeChildren();
    this.objectsManager.removeComponent(this.id);
    this.parent.children?.delete(this.id);
  }

  private disposeChildren() {
    for (let child of this.children?.values()) {
      child.destroy();
    }
  }

  get parent(): IComposite {
    return this._parent;
  }
  set parent(v: IComposite) {
    this._parent = v;
  }
}
