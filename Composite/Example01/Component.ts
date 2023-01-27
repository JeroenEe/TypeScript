import IComposite from "./IComposite";
import { Attributes } from "./Terminology";

export default abstract class Component implements IComposite {
  attributes: Attributes[];
  children: IComposite[] = [];
  private _parent : IComposite;

  constructor() {
    this.attributes = [];
  }

  addComponent(component: IComposite): void {
    component.parent = this;
    this.children.push(component);
  }

  removeComponent(component: IComposite): void {
    const index = this.children.indexOf(component);
    this.children.splice(index, 1);
  }

  addAttribute(attribute: Attributes) {
    this.attributes.push(attribute);
  }

  removeAttribute(attribute: Attributes) {
    const index = this.attributes.indexOf(attribute);
    this.attributes.splice(index, 1);
  }

  public get parent() : IComposite {
    return this._parent;
  }
  public set parent(v : IComposite) {
    this._parent = v;
  }
  
}
