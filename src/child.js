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
  @api
  set_selected_record;

  iconName = 'action:new_account'

}
