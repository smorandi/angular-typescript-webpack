import "angular";
import "angular-route";
import {config as routesConfig} from "./angular/configs/routes";
import {PageMessageComponent} from "./angular/component/PageMessageComponent";
import {MessageService} from "./services/MessageService";
import {StatusModel} from "./models/StatusModel";
import IModule = angular.IModule;
import {run} from "./angular/run/run";

export const MESSAGE_MODULE:IModule = angular.module("app.message", ["ngRoute"])
    .service("MessageService", MessageService)
    .service("StatusModel", StatusModel)
    .component("pageMessage", new PageMessageComponent())
    .config(routesConfig)
    .run(run);