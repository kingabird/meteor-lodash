Package.describe({
  summary: "A utility library delivering consistency, customization, performance, & extras. Can be a drop-in place replacement for Underscore.js."
});

// Use lodash NPM module for server-side
Npm.depends({"lodash" : "4.17.2"})

Package.on_use(function (api) {
  api.add_files(['server/lodash.js'], 'server'); // loads lodash NPM module
  api.add_files(['lodash.js', 'post.js']);
  if(typeof api.export !== 'undefined') {
  	api.export(['lodash'], 'server'); // export lodash to server
  	api.export('lodash');
  }
});