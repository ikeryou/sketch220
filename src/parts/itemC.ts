
import { Param } from "../core/param";
import { Val } from "../libs/val";
import { ItemBase } from "./itemBase";

// -----------------------------------------
//
// -----------------------------------------
export class ItemC extends ItemBase {



  constructor(opt:any) {
    super(opt)

    for(let i = 0; i < 1; i++) {
      const el = document.createElement('input');
      el.setAttribute('type', 'range');
      el.setAttribute('min', '0');
      el.setAttribute('max', '100');
      el.setAttribute('step', '1');
      this.getEl().append(el);
      this._item.push({
        el:el,
        rate:new Val()
      })
    }

  }


  protected _update(): void {
    super._update();

    this._item.forEach((val) => {
      val.el.value = ~~(Param.instance.selectedNo[1] * 100)
    })
  }
}