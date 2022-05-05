
import { Param } from "../core/param";
import { Val } from "../libs/val";
import { ItemBase } from "./itemBase";

// -----------------------------------------
//
// -----------------------------------------
export class ItemA extends ItemBase {

  // private _key:number;


  constructor(opt:any) {
    super(opt)

    // this._key = opt.id;

    for(let i = 0; i < this._btnNum; i++) {
      const el = document.createElement('input');
      el.setAttribute('type', 'checkbox');
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
      // if(rate <= Param.instance.selectedNo[1] && rate >= Param.instance.selectedNo[0]) {
      //   val.el.checked = (this._key % 2 == 0) ? true : false;
      // } else {
      //   val.el.checked = (this._key % 2 == 0) ? false : true;;
      // }
      if(rate <= Param.instance.selectedNo[1] && rate >= Param.instance.selectedNo[0]) {
        val.el.checked = true;
      } else {
        val.el.checked = false;
      }
    })
  }
}