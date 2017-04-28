"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var users = [
    {
        id: 1,
        name: 'Chris',
        username: 'sevilayha',
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
var AboutComponent = (function () {
    function AboutComponent() {
        this.users = users;
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about-page',
        styles: ["\n\t\t.profile-card {\n\t\t\tbackground: #f3f3f3;\n\t\t\tpadding: 30px;\n\t\t\ttext-align: center;\n\t\t}\n\t\t.profile-card img {\n\t\t\tmax-width: 50%;\n\t\t\tmargin: 15px auto;\n\t\t}\n\t"],
        template: "\n\t\t<div class=\"row\" *ngIf=\"users\">\n\n\t\t\t<div class=\"col-sm-4\" *ngFor=\"let user of users\">\n\t\t\t\t<div class=\"profile-card\">\n\t\t\t\t\t<img [src]=\"user.avatar\" class=\"img-responsive img-circle\">\n\t\t\t\t\t<h2>{{ user.name }}</h2>\n\t\t\t\t\t<p><a href=\"#\">{{ user.username }}</a></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t"
    })
], AboutComponent);
exports.AboutComponent = AboutComponent;
