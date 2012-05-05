Strike = new Meteor.Collection("strike");

if (Meteor.is_client) {
  Template.main.strike = function() {
    return Strike.find({}, {sort: {time: -1}});
  }

  Template.form.events = {
    'click input' : function () {
       Strike.insert({name: $('#name').val(), content: $('#content').val(), time: new Date()});
    }
  };

  Template.remove.events = {
    'click input' : function () {
      Strike.remove({});
	}
  };
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
