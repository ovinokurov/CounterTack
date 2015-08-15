define([
  "underscore",
  "jquery",
  "backbone",
  "modules/Control/Control",
  "modules/Display/Display",
  "modules/Player/Player"
], 

//function( _, $, Backbone, Control, Display, Player){
function( _, $, Backbone, Control, Display, Player){

  var App = Backbone.View.extend({
    el: $('#app'),
    initialize: function() {
      this.control = new Control({
        $el: this.$el.find("#control")
      });
      this.display = new Display({
        $el: this.$el.find("#display")
      });
      this.player = new Player({
        $el: this.$el.find("#player")
      });
      this.render();
    },
    render: function() {
      this.control.render();
      this.display.render();
      this.player.render();
    },
  });

 var app = new App();

});
