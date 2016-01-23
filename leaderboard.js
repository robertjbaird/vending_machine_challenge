Players = new Mongo.Collection("players");
Players.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  },
  score: {
    type: Number,
    autoform: {
      editable: true,
      omit: true
    },
    autoValue: function() {
      var snacks = this.field("snacks");
      if (snacks.isSet) {
        return snacks.value.length;
      } else {
        return 0;
      }
    }
  },
  snacks: {
    type: [String],
    optional: true,
    autoform: {
      noselect: true,
      options: function() {
        var snacks = Snacks.find().map(function (snack) {
          return {
            value: snack._id,
            label: snack.name
          };
        });
        return snacks;
      }
    }
  }
}));

Snacks = new Mongo.Collection("snacks");
Snacks.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  },
  calories: {
    type: Number,
    label: "Calories"
  },
  price: {
    type: Number,
    label: "Price ($)",
    optional: true
  }
}));

FlowRouter.route('/', {
  name: 'Home',
  action: function(params, queryParams) {
    BlazeLayout.render('layout1', { top: "header", main: "overview" });
  }
});

FlowRouter.notFound = {
  action: function() {
    BlazeLayout.render('layout1', { top: "header", main: "not_found" });
  }
};

FlowRouter.route('/snack/:_id', {
  name: 'Snack.show',
  action: function(params, queryParams) {
    console.log("Yeah! We are on the snack:", params._id);
    BlazeLayout.render('layout1', { top: "header", main: "snack_controller"});
  }
});

FlowRouter.route('/player/:_id', {
  name: 'Player.show',
  action: function(params, queryParams) {
    console.log("Yeah! We are on the player: ", params._id);
    BlazeLayout.render('layout1', { top: "header", main: "player_controller"});
  }
});



if (Meteor.isClient) {
  Template.leaderboard.helpers({
    players: function () {
      return Players.find({}, { sort: { score: -1, name: 1 } });
    }
  });

  Template.overall_stats.helpers({
    totalItems: function() {
      var items = 0;
      var cursor = Players.find();
      if (!cursor.count()) return 0;
      cursor.forEach(function(player) {
        if (player.snacks !== undefined)
        items = items + player.snacks.length;
      });
      return items;
    }
  });

  Template.player_controller.helpers({
    data: function () {
      var p = Players.findOne(FlowRouter.getParam("_id"));
      return {player: p};
    }
  });

  Template.snack_controller.helpers({
    data: function () {
      var s = Snacks.findOne(FlowRouter.getParam("_id"));
      return {snack: s};
    }
  });

  Template.layout1.helpers({
    parentDebug: function() {
      console.log("layout1 debug:");
      console.dir(this);
    }
  });

  Template.foodlist.helpers({
    snacks: function () {
      return Snacks.find({}, { sort: { calories: -1, name: 1 } });
    }
  });

  Template.updateSnackForm.helpers({
    selectedSnack: function() {
      var id = Session.get("selectedSnack");
      if (id === undefined) return undefined;
      return Snacks.findOne(id);
    }
  });

  Template.foodlist.events({
    'click': function () {
      Session.set("selectedSnack", this._id);
    }
  });

  Template.manageUsers.helpers({
    allUsers: function() {
      return Meteor.users.find();
    }
  });

  Template.manageUser.events({
    'click .toggle': function () {
      console.dir(this);
    }
  });

}

if (Meteor.isServer) {
  Meteor.publish('Players', function() {
    return Players.find();
  });
  Meteor.publish('Snacks', function() {
    return Snacks.find();
  });
}

if (Meteor.isClient) {
  Meteor.subscribe('Players');
  Meteor.subscribe('Snacks');
}

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Snacks.find().count() === 0) {
      var names2 = ["Chips", "Popcorn", "Poptarts"];
      _.each(names2, function (name) {
        console.log("Inserting a new snack with name: " + name);
        Snacks.insert({
          name: name,
          calories: Math.floor(Random.fraction() *100) *5
        })
      });
    }
    if (Players.find().count() === 0) {
      var names = ["Ada Lovelace", "Grace Hopper", "Marie Curie",
                   "Carl Friedrich Gauss", "Nikola Tesla", "Claude Shannon"];
      _.each(names, function (name) {
        Players.insert({
          name: name,
          score: Math.floor(Random.fraction() * 10) * 5
        });
      });
    }
  });


}

Accounts.onCreateUser(function(options, user){
  if (Meteor.users.find().count() === 0) {
    console.log("Making new user admin");

    var userId = user._id = Random.id();
    var handle = Meteor.users.find({_id: userId}, {fields: {_id: 1}}).observe({
      added: function () {
        Roles.addUsersToRoles(userId, ['admin']);
        console.log("Updated user.");
        handle.stop();
        handle = null;
      }
    });

    // In case the document is never inserted
    Meteor.setTimeout(function() {
      if (handle) {
        handle.stop();
      }
    }, 30000);
  }

  return user;
});

if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });


}


