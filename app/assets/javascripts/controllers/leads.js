App.LeadsController = Ember.ArrayController.extend({
  sortProperties: ['firstName', 'lastName']
})

App.LeadsController = Ember.ObjectController.extend({
  action: {
    saveChanges: function() {
      if (this.get('model.isDirty')) this.get('model').save();
    }
  }
});
