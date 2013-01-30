
var eejs = require('ep_etherpad-lite/node/eejs/');


exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
	
	var jsdom = require('ep_etherpad-lite/node_modules/jsdom-nocontextifiy');
	
	
	var str = args.content;
	/*
	jsdom.env({
		  html: str,
		  scripts: [
		    'http://code.jquery.com/jquery-1.5.min.js'
		  ]
		}, function (err, window) {
		  var $ = window.jQuery;

		  $('#embed').remove();
		});*/
	
	jsdom.env(
			  "http://nodejs.org/dist/",
			  ["http://code.jquery.com/jquery.js"],
			  function (errors, window) {
			    console.log("there have been", window.$("a").length, "nodejs releases!");
			  }
			);
	
	args.content = str;
  return cb();
};

exports.eejsBlock_embedPopup = function (hook_name, args, cb) {
	args.content = "Embeding is disabled ";
	return cb();
};