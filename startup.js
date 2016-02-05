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
    if (Settings.find().count() === 0) {
      Settings.insert({
        name: "freeText",
        value: ""
      });
    }
    if (Snacks.find().count() === 0) {
      Snacks.insert({
        name: 'Lays Classic Chips',
        grams: 28,
        calories: 160,
        totalFat: 10,
        satFat: 2,
        transFat: 0,
        cholesterol: 0,
        sodium: 170,
        carbs: 15,
        fiber: 1,
        sugars: 0,
        protein: 2,
        price: 75
      });
      Snacks.insert({
        name: 'Fritos Chips',
        grams: 28,
        calories: 170,
        totalFat: 10,
        satFat: 2,
        transFat: 0,
        cholesterol: 0,
        sodium: 170,
        carbs: 15,
        fiber: 1,
        sugars: 0,
        protein: 2,
        price: 75
      });
      Snacks.insert({
        name: 'Cheetos',
        grams: 28,
        calories: 130,
        totalFat: 5,
        satFat: 1,
        transFat: 0,
        cholesterol: 0,
        sodium: 230,
        carbs: 20,
        fiber: 1,
        sugars: 0,
        protein: 2,
        price: 75
      });
      Snacks.insert({
        name: 'Peanut Butter M&Ms',
        grams: 46,
        calories: 243,
        totalFat: 13,
        satFat: 9,
        transFat: 1,
        cholesterol: 3,
        sodium: 97,
        carbs: 26,
        fiber: 2,
        sugars: 21,
        protein: 4,
        price: 100
      });
    }
    if (Players.find().count() === 0) {
      var names = ["Nee"];
      _.each(names, function (name) {
        Players.insert({
          name: name
        });
      });
    }
  });
}