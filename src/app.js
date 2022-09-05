
import { LightningElement,wire,api,track } from 'lwc';



export default class LwcCustomLookup extends LightningElement {
    @api objectName = 'Account';
    @api fieldName = 'Name';
    @api selectRecordId = '';
    @api selectRecordName;
    // @api Label;
    @api searchRecords = [];
    // @api required = false;
    @api iconName = 'action:new_account'
    @api LoadingText = false;
    @track txtclassname = 'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click';
    @track messageFlag = false;
    @track iconFlag =  true;
    @track clearIconFlag = false;
    @track inputReadOnly = false;
    searchNumber = 0;

    searchField(event) {
        var currentText = event.target.value;
        this.LoadingText = true;

        console.log('searchField: seach initiated');
        setTimeout(()=> {
            
            console.log('searchField: setting searchRecords');
            this.searchRecords = [
                {recName: 'number one', recId: '0', otherAttribute: 'hey'},
                {recName: 'number two', recId: '1', otherAttribute: 'hey'},
                {recName: 'number 3', recId: '2', otherAttribute: 'hey'},
                {recName: 'number 4', recId: '3', otherAttribute: 'hey'}
            ]

            this.txtclassname =  this.searchRecords.length > 0 ? 'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open' : 'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click';

            this.LoadingText = false;
            this.iconFlag = true;
            this.clearIconFlag = false;
            this.searchNumber++;
        },1000);
    }
    
   setSelectedRecord(event) {
        console.log('app->setSelectedRecord: the name: ', event.currentTarget.dataset.name, ' the Id: ', event.currentTarget.dataset.Id, ' the random: ', event.currentTarget.dataset.random, '  current target:', event.currentTarget);

        var currentRecId = event.currentTarget.dataset.id;
        var selectName = event.currentTarget.dataset.name;
        this.txtclassname =  'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click';
        this.iconFlag = false;
        this.clearIconFlag = true;
        this.selectRecordName = event.currentTarget.dataset.name;
        this.selectRecordId = currentRecId;
        this.inputReadOnly = true;


        const selectedEvent = new CustomEvent('selected', { detail: {selectName, currentRecId}, });
        // Dispatches the event.
        this.dispatchEvent(selectedEvent);

        this.resetData(event);
    }
    
    resetData(event) {
        // this.selectRecordName = "";
        this.selectRecordId = "";
        this.inputReadOnly = false;
        this.iconFlag = true;
        this.clearIconFlag = false;
       
    }

}