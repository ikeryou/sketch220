
import { MyDisplay } from "../core/myDisplay";
import { Param } from "../core/param";
import { Val } from "../libs/val";

// -----------------------------------------
//
// -----------------------------------------
export class ItemBase extends MyDisplay {

  protected _item:Array<{el:any, rate:Val}> = [];
  protected _rate:number = 0;

  protected _btnNum:number = 18;

  constructor(opt:any) {
    super(opt)


  }


  protected _update(): void {
    super._update();

    this._rate = Param.instance.selectedNo[1]
  }
}