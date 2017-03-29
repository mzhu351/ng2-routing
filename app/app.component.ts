import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
	selector: 'my-app',
	templateUrl: './app/app.component.html',
	styles: ['./app/app.component.css']
})
export class AppComponent {
	message: string = 'Hello!';
	users: User[] = [
		{ id: 25, name: 'Christ', username: 'whatchristtweets'},
		{ id: 26, name: 'Nick', username: 'whatnicktweets'},
		{ id: 27, name: 'Holly', username: 'whathollytweets'}
	];
	activeUser: User;

	selectUser(user){
		this.activeUser = user;
		console.log(this.activeUser);
	}

	onUserCreated(event) {
		this.users.push(event.user);
		console.log('onUserCreated', event.user);
	}
}
