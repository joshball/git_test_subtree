'use strict';

console.log('This is a plugin');

module.exports = {
	log: function(msg){
		console.log('Ciao from the plugin:', msg);
	},
	info: function(){
		console.log('This plugin is awesome!');
	}
};