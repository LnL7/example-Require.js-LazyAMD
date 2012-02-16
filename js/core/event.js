define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
  var CoreEvent, _Event;
  _Event = _.extend({}, Backbone.Events);
  return CoreEvent = {
    Event: _Event
  };
});