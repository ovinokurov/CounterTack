define([
  "underscore",
  "jquery"
], 

function( _, $){
  var Player = function(options){
    this.name = "Player";
    this.options = _.defaults(options, {
      $el: null
    });
    this.initialize();
  }

 
  Player.prototype.initialize = function(){
    console.log(this.name + ": initialize");
  }

  Player.prototype.render = function(){
	 var Player = Backbone.Model.extend();  
	 var PlayerList = Backbone.Collection.extend({
                    model: Player,
                     url: 'data/test-data.json'
                }); 
	
	var PlayerView = Backbone.View.extend({
		el: "#players",
		template: _.template($('#playerTemplate').html()),
		render: function(eventName) {
			_.each(this.model.models, function(player){
				var playerTemplate = this.template(player.toJSON());
				$(this.el).append(playerTemplate);
			}, this);

			return this;
		}
	});
	
	var players = new PlayerList();    
		var playersView = new PlayerView({model: players});
		players.fetch({
			success: function() {
				playersView.render();
			}
		});
	
    //this.options.$el.html(this.name + ' rendered.');
	console.log('Woohoo, looks like everything is done.');
  }

  
  return Player;
  

});

//Helper 
function GetLabel(value){
	return value[0].label;
}
function GetValue(value){
	return value[0].value;
}




 

