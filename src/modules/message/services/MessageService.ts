export class MessageService {
    public message:string = "default message";
    public messageFunc:() => string;

    constructor() {
    }

    public getMessage():string {
        console.log("MessageService.getMessage()", this.message);
        return this.message;
    }

    public getMessageFunc():() => string {
        console.log("MessageService.getMessageFunc()", this.messageFunc);
        return this.messageFunc;
    }

    public setMessage(message: string) {
        console.log("MessageService.setMessage()", message);
        this.message = message;
    }

    public setMessageFunc(messageFunc: () => string) {
        console.log("MessageService.setMessageFunc()", messageFunc);
        this.messageFunc = messageFunc;
    }
}
