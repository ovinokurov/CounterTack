define([
  "underscore",
  "jquery"
], 

function( _, $){

  var Display = function(options){
    this.name = "Display";
    this.options = _.defaults(options, {
      $el: null
    });
    this.initialize();
  }

  Display.prototype.initialize = function(){
    console.log(this.name + ": initialize");
  }

  Display.prototype.render = function(){
    this.options.$el.html(this.name + ' rendered.');
  }

  return Display;

});
