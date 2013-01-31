
var eejs = require('ep_etherpad-lite/node/eejs/');

exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
	var str = args.content;
	
	/* *
	 * This should remove following code snippet from pad.html
     *    <li data-key="embed">
     *      <a class="grouped-right" id="embedlink" data-l10n-id="pad.toolbar.embed.title">
     *          <span class="grouped-right buttonicon buttonicon-embed"></span>
     *      </a>
     *  </li>
	 * 
	 * */
	
	str = str.replace(/\n/g, "<newline>");
	str = str.replace(/<li data-key="embed">.*<li class="separator">/, "<li class=\"separator\">");
	str = str.replace(/<newline>/g, '\n');
	
	// This removes the class grouped-left from the settingslink 
	str = str.replace(/class="grouped-left" id="settingslink"/, "id=\"settingslink\"");
	args.content = str;
  return cb();
};

exports.eejsBlock_embedPopup = function (hook_name, args, cb) {
	args.content = "Embeding is disabled ";
	return cb();
};