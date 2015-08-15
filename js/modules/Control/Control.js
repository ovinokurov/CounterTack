define([
  "underscore",
  "jquery"
], 

function( _, $){

  var Control = function(options){
    this.name = "Control";
    this.options = _.defaults(options, {
      $el: null
    });
    this.initialize();
  }

  Control.prototype.initialize = function(){
    console.log(this.name + ": initialize");
  }

  Control.prototype.render = function(){
    this.options.$el.html(this.name + ' rendered.');
  }

  return Control;

});
