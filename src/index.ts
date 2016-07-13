import "angular";
import "./modules/application/angular/index";
import "./modules/tweets/angular/index";
import "./modules/about/angular/index";

// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/screen.scss";
import {MESSAGE_MODULE} from "./modules/message/index";

angular.module("app", ["app.application", "app.tweets", "app.about", MESSAGE_MODULE.name]);
angular.bootstrap(document, ["app"], {
    strictDi: true
});