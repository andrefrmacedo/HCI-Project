import Ember from 'ember';

export default Ember.Component.extend({
	
	enabled: false,

	words: function(){
		console.log(this.get('model'));
		let count = { };
		let wordCount = [];

		this.get('model').map(note => {
			
			if(count[note.get('keyword')]){
				count[note.get('keyword')]++;
			}
			else{
				count[note.get('keyword')]=1;
			}
		});

		for(var key in count){
			wordCount.push({
				text: key,
				size: 100*count[key]/this.get('model.length')+15,
			});
		}
		
		return wordCount;
	},

	actions: {
		showCloud: function(){
			Ember.$('html, body').animate({
		        scrollTop: Ember.$("#tag-cloud").offset().top
		    }, 1000);
			d3.select("svg").remove();
			
			let fill = d3.scale.category20();

		  	d3.layout.cloud().size([900, 600])
		      	.words(this.words())
		      	.rotate(function() { return ~~(Math.random() * 2) * 90; })
		      	.font("Helvetica")
		      	.fontSize(function(d) { return d.size; })
		      	.on("end", draw)
		      	.start();

		  	function draw(words) {
		    	d3.select("#tag-cloud").append("svg")
		        	.attr("width", '100%')
		        	.attr("height", 600)
		      	.append("g")
		        	.attr("transform", "translate(450,300)")
		      	.selectAll("text")
		        	.data(words)
		      	.enter().append("text")
		        	.style("font-size", function(d) { return d.size + "px"; })
		        	.style("font-family", "Impact")
		        	.style("fill", function(d, i) { return fill(i); })
		        	.attr("text-anchor", "middle")
		        	.attr("transform", function(d) {
		        		return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
		        	})
		        .text(function(d) { return d.text; });
		  	}
		}
	}
});
