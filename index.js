
var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
	var str = args.content;
	str = str.replace(/\n/gm, "<newline>");
	str = str.replace(/<li data-key="embed">.*<li class="separator">/, "<li class=\"separator\">");
	str = str.replace(/<newline>/gm, '\n');
	str = str.replace(/class="grouped-left" id="settingslink"/, "id=\"settingslink\"");
	console.log(str);
	args.content = str;
  return cb();
};

exports.eejsBlock_embedPopup = function (hook_name, args, cb) {
	args.content = "Embeding is disabled ";
	return cb();
};