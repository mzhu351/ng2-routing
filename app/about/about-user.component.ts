import { Component, OnInit, Inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

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
	`,
	providers: [UserService]
})

export class AboutUserComponent implements OnInit {
	user: User;
	constructor(@Inject(ActivatedRoute) private route, @Inject(UserService) private service) {}

	ngOnInit() {
		//grab the current username
		let username = this.route.snapshot.params['username'];

		this.service.getUser(username).then(user => this.user = user);

	}
}
