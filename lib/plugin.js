'use strict';

console.log('This is a plugin');

module.exports = {
	log: function(msg){
		console.log('Ciao from the plugin:', msg);
	},
	a: function(){
		console.log('adding an A func');
	},
	b: function(){
		console.log('adding an B func');
	},
	c: function(){
		console.log('adding an C func');
	},
	d: function(){
		console.log('adding an D func');
	},
	e: function(){
		console.log('adding an E func');
	},
	info: function(){
		console.log('This plugin is awesome!');
	},
	warn: function(){
		console.log('This plugin is warning!');
	}
};