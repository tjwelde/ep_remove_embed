
var eejs = require('ep_etherpad-lite/node/eejs/');
var jsdom = require('ep_etherpad-lite/node_modules/jsdom');

exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
	
	removeEmbed(args.content, function(html_out) {
		args.content = html_out;
	});
	
	// This has to be done, AFTER removeEmbed is completed
	return cb();
};


function removeEmbed(html_in, callback) {
	jsdom.env({
		  html: html_in,
		  scripts: [
		    'http://code.jquery.com/jquery-1.7.min.js'
		  ]
		}, function (err, window) {
		  var $ = window.$;
	
		  $('li[data-key="embed"]').remove();
		  $('#settingslink').removeClass('grouped-left');
		  
		  callback($('body').html());
		  
		  window.close();
	});
}


exports.eejsBlock_embedPopup = function (hook_name, args, cb) {
	args.content = "Embeding is disabled ";
	return cb();
};