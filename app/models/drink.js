import DS from 'ember-data';

export default DS.Model.extend({
	name:DS.attr('string'),
	description:DS.attr('string'),	
	imageUrl : DS.attr('string'),
	imageId: DS.attr('string')
});
