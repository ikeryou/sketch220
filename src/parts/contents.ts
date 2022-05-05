
import { MyDisplay } from "../core/myDisplay";
import { Param } from "../core/param";
import { Tween } from "../core/tween";
// import { Util } from "../libs/util";
import { ItemA } from "./itemA";
// import { ItemB } from "./itemB";
import { ItemBase } from "./itemBase";
// import { ItemC } from "./itemC";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  private _txt:HTMLElement;
  private _item:Array<ItemBase> = [];
  // private _textNum:number = 20;

  constructor(opt:any) {
    super(opt)

    this._txt = document.createElement('div');
    this._txt.classList.add('l-selectText')
    document.body.append(this._txt);
    let t = 'CHECKBOXCHECKBOXCHECKBOX'
    // for(let i = 0; i < this._textNum; i++) {
    //   t += Util.instance.randomArr('ABCDEFGHIKLMNOPRSTUVWXYZ0123456789'.split(''));
    // }
    this._txt.innerHTML = t;


    for(let i = 0; i < 10; i++) {
      const itemEl = document.createElement('div')
      itemEl.classList.add('item')
      this.getEl().append(itemEl);

      this._item.push(new ItemA({
        el:itemEl,
        id:i,
      }))

      // if(i == 0) {
      //   this._item.push(new ItemA({
      //     el:itemEl
      //   }))
      // }

      // if(i == 2) {
      //   this._item.push(new ItemB({
      //     el:itemEl
      //   }))
      // }

      // if(i == 1) {
      //   this._item.push(new ItemC({
      //     el:itemEl
      //   }))
      // }

    }

  }


  protected _update(): void {
    super._update();

    Tween.instance.set(document.body, {
      height:window.innerHeight
    })

    const start = window.getSelection()?.anchorOffset || 0;
    const end = window.getSelection()?.focusOffset || 0;

    const max = this._txt.innerHTML.length;
    Param.instance.selectedNo[0] = Math.min(1, start / max);
    Param.instance.selectedNo[1] = Math.min(1, end / max);

    Param.instance.debug.innerHTML = start + '_' + end + '_' + Param.instance.selectedNo[0] + '_' + Param.instance.selectedNo[1];
  }
}