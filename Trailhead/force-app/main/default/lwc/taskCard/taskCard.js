import { api, LightningElement } from 'lwc';

export default class TaskCard extends LightningElement {
    @api Description;
    @api Id;

    ediClick(){
        this.sendClickEvent('edit', this.Id);
    }
    deleteClick(){
        this.sendClickEvent('delete', this.Id);
    }
    sendClickEvent(eventName, identification){
        const taskeventclick =  new CustomEvent('taskeventclick', {
            detail : {
                Action : eventName,
                Id : identification,
            }
        });

        this.dispatchEvent(taskeventclick);
    }
}