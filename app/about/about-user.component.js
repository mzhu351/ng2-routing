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
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var users = [
    {
        id: 1,
        name: 'Min',
        username: 'mzhu',
        avatar: 'https://pbs.twimg.com/profile_images/789087337754062848/pRPiUEhA_400x400.jpg'
    },
    {
        id: 2,
        name: 'Nick',
        username: 'whatnicktweets',
        avatar: 'https://pbs.twimg.com/profile_images/502500686588690432/wXBzuCBj.jpeg'
    },
    {
        id: 3,
        name: 'Holly',
        username: 'hollylawly',
        avatar: 'https://pbs.twimg.com/profile_images/721918869821005824/2qT_RY5M.jpg'
    }
];
var AboutUserComponent = (function () {
    function AboutUserComponent(route) {
        this.route = route;
    }
    AboutUserComponent.prototype.ngOnInit = function () {
        //grab the current username
        var username = this.route.snapshot.params['username'];
        this.user = users.find(function (user) {
            return user.username === username;
        });
    };
    return AboutUserComponent;
}());
AboutUserComponent = __decorate([
    core_1.Component({
        styles: ["\n\t\timg {\n\t\t\tmax-width: 300px;\n\t\t\tmargin: 20px auto;\n\t\t}\n\t"],
        template: "\n\t\t<div class=\"jumbotron text-center\" *ngIf=\"user\">\n\t\t\t<h1>{{ user.name }} ({{ user.username }})</h1>\n\n\t\t\t<img [src]=\"user.avatar\" class=\"img-responsive img-circle\">\n\t\t</div>\n\t"
    }),
    __param(0, core_1.Inject(router_1.ActivatedRoute))
], AboutUserComponent);
exports.AboutUserComponent = AboutUserComponent;
