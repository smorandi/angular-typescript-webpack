export class StatusModel {
    public static index:number = 0;
    public static statusString:string = "STATUS: "
    public status:string = StatusModel.statusString + StatusModel.index;

    constructor() {
        console.log("new StatusModel()");
    }

    public getStatus():string {
        console.log("StatusModel.getStatus() = ", this.status);
        return this.status;
    }

    // public getStatusFunc:() => string = () => {
    //     console.log("StatusModel.getStatus() = ", this.status);
    //     return this.status;
    // }

    public getStatusFunc():() => string {
        return () => {
            console.log("StatusModel.getStatus() = ", this.status);
            return this.status;
        }
    }

    public setStatus(status:string) {
        this.status = status;
        console.log("StatusModel.setStatus()", this.status);
    }

    public updateStatus() {
        StatusModel.index++;
        this.status = StatusModel.statusString + StatusModel.index;
        console.log("StatusModel.updateStatus()", this.status);
    }
}
