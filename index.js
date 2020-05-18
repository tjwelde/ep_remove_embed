
var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_embedPopup = function (hook_name, args, cb) {
  args.content = args.content.replace(/(\r\n|\n|\r)/gm,"")
  args.content = args.content.replace(/<div id=\"embedcode\".*\/div>/, '')
  return cb();
};
