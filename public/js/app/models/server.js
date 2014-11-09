define(function (require) {

  "use strict";

  var $                   = require('jquery'),
      _                   = require('underscore'),
      Backbone            = require('backbone');

  return Backbone.Model.extend({
    defaults: {
      title: '',
      state: null,
    },
    urlRoot: '/api/servers/',
  });

});
