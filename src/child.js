import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {
  @api
  label = "";
  @api
  record={};
  @api
  object_name="";

  iconName = 'action:new_account'

}
