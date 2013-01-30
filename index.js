
var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
	var str = args.content;
	str = str.replace(/\n/gm, "<newline>");
	console.log(str);
	str = str.replace(/<li data-key="embed">.*<\/li>/, "");
	str = str.replace(/<newline>/gm, '\n');
	args.content = str;
  return cb();
};

exports.eejsBlock_embedPopup = function (hook_name, args, cb) {
	args.content = "Embeding is disabled ";
	return cb();
};