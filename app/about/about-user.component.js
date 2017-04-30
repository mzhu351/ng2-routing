"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../shared/services/user.service");
var AboutUserComponent = (function () {
    function AboutUserComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    AboutUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        //grab the current username
        var username = this.route.snapshot.params['username'];
        this.service.getUser(username).then(function (user) { return _this.user = user; });
    };
    return AboutUserComponent;
}());
AboutUserComponent = __decorate([
    core_1.Component({
        styles: ["\n\t\timg {\n\t\t\tmax-width: 300px;\n\t\t\tmargin: 20px auto;\n\t\t}\n\t"],
        template: "\n\t\t<div class=\"jumbotron text-center\" *ngIf=\"user\">\n\t\t\t<h1>{{ user.name }} ({{ user.username }})</h1>\n\n\t\t\t<img [src]=\"user.avatar\" class=\"img-responsive img-circle\">\n\t\t</div>\n\t",
        providers: [user_service_1.UserService]
    }),
    __param(0, core_1.Inject(router_1.ActivatedRoute)), __param(1, core_1.Inject(user_service_1.UserService))
], AboutUserComponent);
exports.AboutUserComponent = AboutUserComponent;
