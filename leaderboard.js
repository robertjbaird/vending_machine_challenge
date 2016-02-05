if (Meteor.isClient) {
  RouterAutoscroll.animationDuration = 0;

  Template.registerHelper("setTitle", function(title) {
    document.title = title;
  });

  Template.registerHelper("toDollars", function(cents) {
    return "$" + (cents/100).toFixed(2);
  });

  Template.leaderboard.helpers({
    freeText: function() {
      return Settings.findOne({name: "freeText"}).value;
    },
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
      var total = 0;
      var cursor = Players.find();
      if (!cursor.count()) return 0;
      cursor.forEach(function(player) {
        if (player.calories) {
          total = total + player.calories;
        }
      });
      return total;
    },
    totalPoundsOfFat: function() {
      var total = 0;
      var cursor = Players.find();
      if (!cursor.count()) return 0;
      cursor.forEach(function(player) {
        if (player.totalFat) {
          total = total + player.totalFat;
        }
      });
      return (total*0.00220462).toFixed(2);
    },
    averageItems: function() {
      var items = 0;
      var cursor = Players.find();
      if (!cursor.count()) return 0;
      cursor.forEach(function(player) {
        if (player.snacks !== undefined)
          items = items + player.snacks.length;
      });
      return (items / Players.find().count()).toPrecision(3);
    },
    averageCals: function() {
      var total = 0;
      var cursor = Players.find();
      if (!cursor.count()) return 0;
      cursor.forEach(function(player) {
        if (player.calories) {
          total = total + player.calories;
        }
      });
      return (total / Players.find().count()).toPrecision(3);
    },
    averageSugar: function() {
      var total = 0;
      var cursor = Players.find();
      if (!cursor.count()) return 0;
      cursor.forEach(function(player) {
        if (player.sugars) {
          total = total + player.sugars;
        }
      });
      return (total / Players.find().count()).toPrecision(3);
    },
    totalMass: function() {
      var total = 0;
      var cursor = Players.find();
      if (!cursor.count()) return 0;
      cursor.forEach(function(player) {
        if (player.grams) {
          total = total + player.grams;
        }
      });
      return total;
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
          if (snack !== undefined) {
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
          }
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

    },
    showUpdateForm: function(player) {
      var loggedInUser = Meteor.user();

      if (loggedInUser === undefined || loggedInUser === null) {
        return false;
      } else if (Roles.userIsInRole(loggedInUser, ['admin'])) {
        return true;
      } else if (player !== undefined && player.userId === loggedInUser._id) {
        return true;
      } else {
        return false;
      }
    },
    snacks: function() {
      var p = Players.findOne(FlowRouter.getParam("_id"));

      if (p !== undefined && p.snacks !== undefined && p.snacks.length !== 0) {
        return Snacks.find({_id: {$in: p.snacks}});
      } else {
        return [];
      }
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

  Template.editFreeText.helpers({
    freeTextSetting: function() {
      return Settings.findOne({name: "freeText"});
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
  });
  Meteor.publish('Settings', function () {
    return Settings.find();
  });

}

if (Meteor.isClient) {
  Meteor.subscribe('Players');
  Meteor.subscribe('Snacks');
  Meteor.subscribe('Users');
  Meteor.subscribe('Settings');
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
}




