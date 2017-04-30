import { Component, OnInit, Inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class User {
	id: number;
	name: string;
	username: string;
	avatar: string;
}

const users: User[] = [
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
]

@Component({
	styles: [`
		img {
			max-width: 300px;
			margin: 20px auto;
		}
	`],
	template: `
		<div class="jumbotron text-center" *ngIf="user">
			<h1>{{ user.name }} ({{ user.username }})</h1>

			<img [src]="user.avatar" class="img-responsive img-circle">
		</div>
	`
})

export class AboutUserComponent implements OnInit {
	user;
	constructor(@Inject(ActivatedRoute) private route) {}

	ngOnInit() {
		//grab the current username
		let username = this.route.snapshot.params['username'];

		this.user = users.find(function(user) {
			return user.username === username;
		});
	}
}
