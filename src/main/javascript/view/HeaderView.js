'use strict';

SwaggerUi.Views.HeaderView = Backbone.View.extend({
  events: {
    'change #select_baseUrl'        : 'updateSelect',
    'click #show-pet-store-icon'    : 'showPetStore',
    'click #explore'                : 'showCustom',
    'submit #api_selector'          : 'showCustom',
    'keyup #input_baseUrl'          : 'showCustomOnKeyup',
    'keyup #input_apiKey'           : 'showCustomOnKeyup'
  },

  initialize: function(){},

  showPetStore: function(){
    this.trigger('update-swagger-ui', {
      url:''
    });
  },

  showCustomOnKeyup: function(e){
    if (e.keyCode === 13) {
      this.showCustom();
    }
  },

  showCustom: function(e){
    if (e) {
      e.preventDefault();
    }

    this.trigger('update-swagger-ui', {
      url: $('#input_baseUrl').val()
    });
  },

  updateSelect: function(e) {
    if (e) {
      e.preventDefault();
    }

    var newValue = $(e.currentTarget).val();
    $('#input_baseUrl').val(newValue);
    this.showCustom();
  },

  update: function(url, apiKey, trigger){
    if (trigger === undefined) {
      trigger = false;
    }

    $('#input_baseUrl').val(url);

    if (trigger) {
      this.trigger('update-swagger-ui', {url:url});
    }
  }
});
