import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service('session'),
	sessionAccount: Ember.inject.service('session-account'),
	actions: {
		invalidateSession() {
			this.get('session').invalidate();
		}
	}
});
