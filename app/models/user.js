import DS from 'ember-data';

export default DS.Model.extend({
	username:DS.attr('string'),
	name:DS.attr('string'),
	email : DS.attr('string')	
});
