
var eejs = require('ep_etherpad-lite/node/eejs/');
var jsdom = require('ep_etherpad-lite/node_modules/jsdom');

exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
	
	jsdom.env({
		  html: args.content,
		  scripts: [
		    'http://code.jquery.com/jquery-1.7.min.js'
		  ]
		}, function (err, window) {
		  var $ = window.$;
	
		  $('li[data-key="embed"]').remove();
		  $('#settingslink').removeClass('grouped-left');
		  
		  args.content = $('body').html();
		  
		  window.close();
	});
	
	// TODO This gets called, before jsdom is finshed
	return cb();
	
};

exports.eejsBlock_embedPopup = function (hook_name, args, cb) {
	args.content = "Embeding is disabled ";
	return cb();
};