require.config({
  paths: {
    'jquery': 'lib/jquery',
    'underscore': 'lib/underscore',
    'backbone': 'lib/backbone'
  }
});
require(['core/module'], function(){
  return require(['core/app'], function(){});
});