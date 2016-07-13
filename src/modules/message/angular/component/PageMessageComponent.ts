import {MessageService} from "../../services/MessageService";
import {StatusModel} from "../../models/StatusModel";
import IScope = angular.IScope;
import ITimeoutService = angular.ITimeoutService;
import IPromise = angular.IPromise;
export class PageMessageComponent implements ng.IComponentOptions {
    public controller:Function = MessageController;
    public controllerAs = "vm";
    public template:string = `
    <div class="container-fluid">
        <h1><i class="fa fa-info-circle"></i>&nbsp;Message</h1>
        <ul>
            <li>Status</li>
            <li>Message (value): {{vm.message}}</li>
            <li>Message (function): {{vm.getMessage()}}</li>
            <li>Message (via func): {{vm.messageViaFunc}}</li>
            <li>Message (via func/function): {{vm.getMessageFunc()}}</li>
        </ul>
        
        <button ng-click="vm.updateStatus()">Update Status (in StatusModel)</button>
        <button ng-click="vm.setMessage()">Set Message (in MessageService)</button>
        <button ng-click="vm.updateStatusAsync()">Update Status (async)</button>
    </div>`;
}

export class MessageController {
    public static $inject:Array<string> = ["$scope", "$timeout", "MessageService", "StatusModel"];

    public message:string = "XXX";
    public messageViaFunc:string = "viaFunc";

    constructor(private $scope:IScope,
                private $timeout:ITimeoutService,
                private messageService:MessageService,
                private statusModel:StatusModel) {
        console.log("new MessageController()");

        this.message = this.messageService.getMessage();
        this.$scope.$watch(() => this.messageService.getMessage(), nv => this.message = nv);

        this.messageViaFunc = (this.messageService.getMessageFunc())();
        this.$scope.$watch(() => (this.messageService.getMessageFunc())(), nv => this.messageViaFunc = nv);
    }

    public getMessage():string {
        console.log("MessageController.getMessage()");
        return this.messageService.getMessage();
    }

    public getMessageFunc():string {
        console.log("MessageController.getMessageFunc()");
        return (this.messageService.getMessageFunc())();
    }

    public setMessage():void {
        this.messageService.setMessage("some new message " + Math.random());
    }

    public updateStatus():void {
        this.statusModel.updateStatus();
    }

    public updateStatusAsync():void {
        let promise:IPromise<void> = this.$timeout(1000, true);
        promise.then(() => this.statusModel.updateStatus());
    }
}