import { api, LightningElement, wire } from 'lwc';
import getTask from '@salesforce/apex/TaskManagerController.getTasks';

export default class TaskManager extends LightningElement {
    @api Title;
    @wire(getTask) // @wire(getTask, {id : '$Title'}) como eu passaria parametros para a controller 
    Tasks;

    get HasTasks(){
        return this.Tasks && this.Tasks.length > 0;
    }

    handlerTaskEventeClick(event){
        let action = event.detail.Action;
        let id = event.detail.Id;

        if (action === 'edit') {
            this.editTask(id);
        } else if (action === 'delete') {
            this.deleteTask(id);
        }
    }

    deleteTask(id){
        window.console.log(id);
        //TODO
        //implementar
    }
    editTask(id){
        window.console.log(id);
        //TODO
        //implementar
    }

/*
    constructor(){
        super();
        //componente foi criado
    }
    connectedCallback(){
        //Quando o componente é carregado na tela
    }

    disconnectedCallback(){
        //componente foi removido da tela
    }
    renderedCallback(){
        // quando o componente foi rendereziado na tela
    }
    errorCallback(erro, stack){
        //tratar erros do seu componente 
    }*/

}