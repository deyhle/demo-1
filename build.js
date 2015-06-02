'use strict';

var websiteBuilder = require('ec.appcms-websitebuilder');

websiteBuilder.compileFromDataManager(process.env.npm_package_config_datamanager, function(error) {
  if (error) {
    console.error(error);
    process.exit(1);
  }
  process.exit(0);
});

// TODO: put _links in _embeds of same name (for filter support)
// TODO: minify JS
// TODO: less compiler
// TODO: helpers, e.g. date