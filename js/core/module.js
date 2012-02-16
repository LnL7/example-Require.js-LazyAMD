define(['core/sandbox'], function(SB){
  var CoreModule;
  SB.Event.on('app', function(topic){
    return require(['module/app'], function(){
      return SB.Event.trigger('app:' + topic);
    });
  });
  return CoreModule = {};
});