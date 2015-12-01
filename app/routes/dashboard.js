import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.query('video',  { orderBy: 'userID',equalTo: this.get('session.uid') } );
	},
});
