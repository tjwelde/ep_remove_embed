exports.rembedFn = function(hook, context){

  if(!exports){
    var exports = {};
  }

  exports.embedTools = {
    init: function() {
      var embedTools    = exports.embedTools;
      //var rembed     = embedTools.getUrlVars()['rembed'];

      rembed = true;
      
      if(rembed){
    	  embedTools.removeEmbed();
      }
    },

    removeEmbed: function(){
      $('li.[data-key="embed"]').remove();
      $('#embed.popup').remove();
      $('#settingslink').removeClass('grouped-left');
    },

  
    // Read a page's GET URL variables and return them as an associative array.
    getUrlVars: function() {
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++)
      {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
    },
  };
  exports.embedTools.init();
};
