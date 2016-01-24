Players = new Mongo.Collection("players");
Players.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200,
    autoform: {
      editable: false,
      omit: true
    }
  },
  thrownUp: {
    type: Boolean,
    label: "Thrown up",
    defaultValue: false
  },
  userId: {
    type: String,
    optional: true,
    autoform: {
      editable: false,
      omit: true
    }
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
  grams: {
    type: Number,
    autoform: {
      editable: true,
      omit: true
    },
    autoValue: function() {
      var snacks = this.field("snacks");
      if (snacks.isSet && snacks.value.length !== 0) {
        var total = 0;
        snacks.value.forEach(function (snackId) {
          var snack = Snacks.findOne(snackId);
          total = total + snack.grams;
        });
        return total;
      } else {
        return 0;
      }
    }
  },
  calories: {
    type: Number,
    autoform: {
      editable: true,
      omit: true
    },
    autoValue: function() {
      var snacks = this.field("snacks");
      if (snacks.isSet && snacks.value.length !== 0) {
        var total = 0;
        snacks.value.forEach(function (snackId) {
          var snack = Snacks.findOne(snackId);
          total = total + snack.calories;
        });
        return total;
      } else {
        return 0;
      }
    }
  },
  totalFat: {
    type: Number,
    autoform: {
      editable: true,
      omit: true
    },
    autoValue: function() {
      var snacks = this.field("snacks");
      if (snacks.isSet && snacks.value.length !== 0) {
        var total = 0;
        snacks.value.forEach(function (snackId) {
          var snack = Snacks.findOne(snackId);
          total = total + snack.totalFat;
        });
        return total;
      } else {
        return 0;
      }
    }
  },
  satFat: {
    type: Number,
    autoform: {
      editable: true,
      omit: true
    },
    autoValue: function() {
      var snacks = this.field("snacks");
      if (snacks.isSet && snacks.value.length !== 0) {
        var total = 0;
        snacks.value.forEach(function (snackId) {
          var snack = Snacks.findOne(snackId);
          total = total + snack.satFat;
        });
        return total;
      } else {
        return 0;
      }
    }
  },
  transFat: {
    type: Number,
    autoform: {
      editable: true,
      omit: true
    },
    autoValue: function() {
      var snacks = this.field("snacks");
      if (snacks.isSet && snacks.value.length !== 0) {
        var total = 0;
        snacks.value.forEach(function (snackId) {
          var snack = Snacks.findOne(snackId);
          total = total + snack.transFat;
        });
        return total;
      } else {
        return 0;
      }
    }
  },
  cholesterol: {
    type: Number,
    autoform: {
      editable: true,
      omit: true
    },
    autoValue: function() {
      var snacks = this.field("snacks");
      if (snacks.isSet && snacks.value.length !== 0) {
        var total = 0;
        snacks.value.forEach(function (snackId) {
          var snack = Snacks.findOne(snackId);
          total = total + snack.cholesterol;
        });
        return total;
      } else {
        return 0;
      }
    }
  },
  sodium: {
    type: Number,
    autoform: {
      editable: true,
      omit: true
    },
    autoValue: function() {
      var snacks = this.field("snacks");
      if (snacks.isSet && snacks.value.length !== 0) {
        var total = 0;
        snacks.value.forEach(function (snackId) {
          var snack = Snacks.findOne(snackId);
          total = total + snack.sodium;
        });
        return total;
      } else {
        return 0;
      }
    }
  },
  carbs: {
    type: Number,
    autoform: {
      editable: true,
      omit: true
    },
    autoValue: function() {
      var snacks = this.field("snacks");
      if (snacks.isSet && snacks.value.length !== 0) {
        var total = 0;
        snacks.value.forEach(function (snackId) {
          var snack = Snacks.findOne(snackId);
          total = total + snack.carbs;
        });
        return total;
      } else {
        return 0;
      }
    }
  },
  fiber: {
    type: Number,
    autoform: {
      editable: true,
      omit: true
    },
    autoValue: function() {
      var snacks = this.field("snacks");
      if (snacks.isSet && snacks.value.length !== 0) {
        var total = 0;
        snacks.value.forEach(function (snackId) {
          var snack = Snacks.findOne(snackId);
          total = total + snack.fiber;
        });
        return total;
      } else {
        return 0;
      }
    }
  },
  sugars: {
    type: Number,
    autoform: {
      editable: true,
      omit: true
    },
    autoValue: function() {
      var snacks = this.field("snacks");
      if (snacks.isSet && snacks.value.length !== 0) {
        var total = 0;
        snacks.value.forEach(function (snackId) {
          var snack = Snacks.findOne(snackId);
          total = total + snack.sugars;
        });
        return total;
      } else {
        return 0;
      }
    }
  },
  protein: {
    type: Number,
    autoform: {
      editable: true,
      omit: true
    },
    autoValue: function() {
      var snacks = this.field("snacks");
      if (snacks.isSet && snacks.value.length !== 0) {
        var total = 0;
        snacks.value.forEach(function (snackId) {
          var snack = Snacks.findOne(snackId);
          total = total + snack.protein;
        });
        return total;
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
  grams: {
    type: Number,
    label: "Grams",
    defaultValue: 0
  },
  calories: {
    type: Number,
    label: "Calories",
    defaultValue: 0
  },
  totalFat: {
    type: Number,
    label: "Total fat",
    defaultValue: 0
  },
  satFat: {
    type: Number,
    label: "Saturated fat",
    defaultValue: 0
  },
  transFat: {
    type: Number,
    label: "Trans fat",
    defaultValue: 0
  },
  cholesterol: {
    type: Number,
    label: "Cholesterol",
    defaultValue: 0
  },
  sodium: {
    type: Number,
    label: "Sodium",
    defaultValue: 0
  },
  carbs: {
    type: Number,
    label: "Carbohydrates",
    defaultValue: 0
  },
  fiber: {
    type: Number,
    label: "Fiber",
    defaultValue: 0
  },
  sugars: {
    type: Number,
    label: "Sugars",
    defaultValue: 0
  },
  protein: {
    type: Number,
    label: "Protein",
    defaultValue: 0
  },
  price: {
    type: Number,
    label: "Price ($)",
    optional: true
  }
}));


var fetchConsumedSnackData = new function(snackIds, nutritionField) {
  if (snackIds === undefined) {
    return 0;
  }

  var total = 0;
  snackIds.forEach(function (snackId) {
    var snack = Snacks.findOne(snackId);
    total = total + snack.nutritionField;
  });

  return total;

};

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
    BlazeLayout.render('layout1', { top: "header", main: "snack_controller"});
  }
});

FlowRouter.route('/player/:_id', {
  name: 'Player.show',
  action: function(params, queryParams) {
    BlazeLayout.render('layout1', { top: "header", main: "player_controller"});
  }
});



if (Meteor.isClient) {
  Template.leaderboard.helpers({
    players: function () {
      return Players.find({}, { sort: { score: -1, name: 1 } });
    },
    disqualified: function(thrownUp) {
      if (thrownUp) return "disqualified";
      else return "";
    }
  });

  Template.overall_stats.helpers({
    totalEatenItems: function() {
      var items = 0;
      var cursor = Players.find();
      if (!cursor.count()) return 0;
      cursor.forEach(function(player) {
        if (player.snacks !== undefined)
        items = items + player.snacks.length;
      });
      return items;
    },
    countAllItems: function () {
      return Snacks.find().count() * Players.find().count();
    },
    totalEatenCals: function() {
      return (5000).toLocaleString();
    },
    totalPoundsOfFat: function() {
      return 2.05;
    },
    averageItems: function() {
      return 0.5;
    },
    averageCals: function() {
      return 500;
    },
    averageSugar: function() {
      return 50;
    },
    totalMass: function() {
      return (4000).toLocaleString();
    },
    disqualCountText: function() {
      var count = Players.find({thrownUp: true}).count();
      if (count === 0) {
        return "No one has thrown up yet.";
      } else if (count === 1) {
        return "One person is disqualified for throwing up.";
      } else {
        return count + " people are now disqualified for throwing up.";
      }
    }
  });

  Template.player_controller.helpers({
    data: function () {
      var p = Players.findOne(FlowRouter.getParam("_id"));
      return {player: p};
    },
    collectPlayerNutrition: function() {
      var p = Players.findOne(FlowRouter.getParam("_id"));

      var calories = 0;
      var totalFat = 0;
      var satFat = 0;
      var transFat = 0;
      var cholesterol = 0;
      var sodium = 0;
      var carbs = 0;
      var fiber = 0;
      var sugars = 0;
      var protein = 0;

      if (p !== undefined && p.snacks !== undefined) {
        p.snacks.forEach(function(snackId) {
          var snack = Snacks.findOne(snackId);
          if (snack.calories    !== undefined)  calories =     calories +    snack.calories;
          if (snack.totalFat    !== undefined)  totalFat =     totalFat +    snack.totalFat;
          if (snack.satFat      !== undefined)  satFat =       satFat +      snack.satFat;
          if (snack.transFat    !== undefined)  transFat =     transFat +    snack.transFat;
          if (snack.cholesterol !== undefined)  cholesterol =  cholesterol + snack.cholesterol;
          if (snack.sodium      !== undefined)  sodium =       sodium +      snack.sodium;
          if (snack.carbs       !== undefined)  carbs =        carbs +       snack.carbs;
          if (snack.fiber       !== undefined)  fiber =        fiber +       snack.fiber;
          if (snack.sugars      !== undefined)  sugars =       sugars +      snack.sugars;
          if (snack.protein     !== undefined)  protein =      protein +     snack.protein;
        });
      }

      return {
        calories: calories,
        totalFat: totalFat,
        satFat: satFat,
        transFat: transFat,
        cholesterol: cholesterol,
        sodium: sodium,
        carbs: carbs,
        fiber: fiber,
        sugars: sugars,
        protein: protein
      };

    }
  });

  Template.nutrition.helpers({
    calsFromFat: function(fat) {
      return fat*9;
    },
    toLocalString: function(number) {
      if (number === undefined || number === null) return (0).toLocaleString();
      return number.toLocaleString();
    },
    percent: function(value, rdv) {
      return Math.round((value/rdv)*100);
    }
  });

  Template.snack_controller.helpers({
    data: function () {
      var s = Snacks.findOne(FlowRouter.getParam("_id"));
      return {snack: s};
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
    },
    email: function() {
      return this.emails[0].address;
    },
    buttonText: function() {
      var u = Players.findOne({userId: this._id});
      if (u === undefined) {
        return "Create";
      } else {
        return "Remove";
      }
    }
  });

  Template.manageUsers.events({
    'click .toggle': function () {

      var u = Players.findOne({userId: this._id});
      if (u === undefined) {
        Players.insert({
          name: this.username,
          userId: this._id
        });
      } else {
        Players.find({userId: this._id}).fetch().forEach(function(player) {
          Players.remove(player._id);
        });
      }
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
  Meteor.publish('Users', function () {
    return Meteor.users.find();
  })
}

if (Meteor.isClient) {
  Meteor.subscribe('Players');
  Meteor.subscribe('Snacks');
  Meteor.subscribe('Users');
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
}

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
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
      var names = ["Jon Snow", "Arya Stark", "Tyrion Lannister",
                   "Margaery Tyrell", "Khal Drogo", "Daenerys Targaryen"];
      _.each(names, function (name) {
        Players.insert({
          name: name
        });
      });
    }
  });
}


