import Ember from 'ember';
const { inject: { service }, RSVP } = Ember;

export default Ember.Service.extend({
	session: service('session'),
	store: service(),
	loadCurrentUser() {
		const token = this.get('session.session.content.authenticated.access_token');
		const mydata = this.get('session.session.content.authenticated');
		console.log('token => ',token);
		console.log('data => ',mydata);

		if (!Ember.isEmpty(token)) {

			var user = this.get('store').createRecord('user', {
				id:mydata.id,
				username: mydata.username,
				name: mydata.name,
				email:mydata.email
			});
		}


		return new RSVP.Promise((resolve, reject) => {
			this.set('account', user);
			return resolve();
		});
		/*	console.log(this.get('session.session.content.authenticated'));
			const mydata = this.get('session.session.content.authenticated');

			if (!Ember.isEmpty(token)) {

				var user = this.store.createRecord('user', {
					username: mydata.username,
					name: mydata.name,
					email:mydata.email
				});
		return new RSVP.Promise((resolve, reject) => {
			const token = this.get('session.content.authenticated.access_token');

			console.log('token => ',token);

		/*	console.log(this.get('session.session.content.authenticated'));
			const mydata = this.get('session.session.content.authenticated');

			if (!Ember.isEmpty(token)) {

				var user = this.store.createRecord('user', {
					username: mydata.username,
					name: mydata.name,
					email:mydata.email
				});
				console.log('usuario => ',user);
				this.set('account', user);
				return resolve();
				return this.get('store').findRecord('user','me').then((user) => {
					this.set('account', user);
					resolve();
				}, reject);
				return resolve; 
			} else {
				resolve();
			}
		});*/
	}
});
