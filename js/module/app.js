define(['core/sandbox'], function(SB){
  var ModuleApp;
  SB.Event.on('app:start', function(){
    return console.log('app:start');
  });
  return ModuleApp = {};
});