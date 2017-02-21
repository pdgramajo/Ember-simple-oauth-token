import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin,{
	host: 'http://localhost:58797',//'http://emberwebapi.gear.host',
	namespace: 'api',
	authorizer: 'authorizer:oauth2'
});