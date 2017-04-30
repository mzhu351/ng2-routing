import { Injectable } from '@angular/core';
import { User } from '../models/user';

const usersPromise: Promise<User[]> = Promise.resolve([
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
]);

@Injectable()
export class UserService {
	//get all users
	getUsers() {
		console.log('called get users svc', usersPromise);
		return usersPromise;
	}

	//find a specific user
	getUser(username) {
		return usersPromise.then(users => users.find(user => user.username === username));
	}

}
