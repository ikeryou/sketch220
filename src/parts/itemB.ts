
import { Param } from "../core/param";
import { Val } from "../libs/val";
import { ItemBase } from "./itemBase";

// -----------------------------------------
//
// -----------------------------------------
export class ItemB extends ItemBase {



  constructor(opt:any) {
    super(opt)

    for(let i = 0; i < this._btnNum; i++) {
      const el = document.createElement('input');
      el.setAttribute('type', 'radio');
      this.getEl().append(el);
      this._item.push({
        el:el,
        rate:new Val()
      })
    }

  }


  protected _update(): void {
    super._update();

    this._item.forEach((val,i) => {
      const rate = i / (this._item.length - 1);
      if(rate < Param.instance.selectedNo[1]) {
        val.el.checked = true;
      } else {
        val.el.checked = false;
      }
    })
  }
}