
var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
  args.content = args.content;
  return cb();
};

exports.eejsBlock_embedPopup = function (hook_name, args, cb) {
	args.content = "Embeding is disabled ";
	return cb();
};