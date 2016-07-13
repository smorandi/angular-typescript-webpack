import {MessageService} from "../../services/MessageService";
import {StatusModel} from "../../models/StatusModel";

run.$inject = ["MessageService", "StatusModel"];
export function run(messageService: MessageService, statusModel: StatusModel): void {
    console.log("run");
    messageService.setMessage(statusModel.getStatus());
    messageService.setMessageFunc(statusModel.getStatusFunc);
}