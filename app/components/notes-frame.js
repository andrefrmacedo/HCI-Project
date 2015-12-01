import Ember from 'ember';

export default Ember.Component.extend({
	

	actions:{

		removeNote: function(note){
			note.destroyRecord();
		},

		collapseDrop: function(note){
			note.toggleProperty('collapsed');
		},


		seekTo: function(timestamp){
			this.get('myPlayer').send('seekTo', timestamp);
		},

		addNote: function(){
			let self = this;
			
			this.get('myPlayer').send('refreshCurrentTime');
			let timestamp = this.get('myPlayer').get('currentTime');
			let hours = Math.floor(timestamp/3600);
			let minutes = Math.floor(timestamp%3600/60);
			let seconds = Math.floor(timestamp%3600%60);
			let time = '';
			
			if(seconds<10){ seconds = '0' + seconds; }
			if(minutes<10){ minutes = '0' + minutes; }
			if(hours<1){
				time = minutes + ':' + seconds;
			}
			else{
				time = hours + ':' + minutes + ':' + seconds;
			}

			let note = this.model.get('notes').createRecord({
				keyword: this.get('keyword'),
				timestamp: timestamp,
				time: time,
				description: '',
				collapsed: false
			});
			
			note.save().then(function(){
				self.model.get('notes').pushObject(note);
				self.model.save();
			});

			this.set('keyword','');
		},
	},
});
