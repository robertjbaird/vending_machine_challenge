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
        name: 'Cheetos Crunchy',
        grams: 28,
        calories: 160,
        totalFat: 10,
        satFat: 2,
        transFat: 0,
        cholesterol: 4,
        sodium: 250,
        carbs: 13,
        fiber: 1,
        sugars: 1,
        protein: 2,
        price: 75
      });
      Snacks.insert({
        name: 'Lay\'s Salt & Vinegar Potato Chips',
        grams: 28,
        calories: 160,
        totalFat: 10,
        satFat: 1,
        transFat: 0,
        cholesterol: 0,
        sodium: 230,
        carbs: 15,
        fiber: 1,
        sugars: 0,
        protein: 2,
        price: 75
      });
      Snacks.insert({
        name: 'Snyder\'s of Hanover - Sourdough Hard Pretzels',
        grams: 47,
        calories: 160,
        totalFat: 0,
        satFat: 0,
        transFat: 0,
        cholesterol: 0,
        sodium: 390,
        carbs: 36,
        fiber: 2,
        sugars: 0,
        protein: 5,
        price: 75
      });
      Snacks.insert({
        name: 'Lay\'s Classic Potato Chips',
        grams: 28,
        calories: 160,
        totalFat: 10,
        satFat: 1,
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
        name: 'Munchies Cheese Mix',
        grams: 50,
        calories: 250,
        totalFat: 12,
        satFat: 2,
        transFat: 0,
        cholesterol: 0,
        sodium: 50,
        carbs: 31,
        fiber: 3,
        sugars: 2,
        protein: 4,
        price: 75
      });
      Snacks.insert({
        name: 'Cheeze-it Baked Snack Crackers',
        grams: 42,
        calories: 210,
        totalFat: 11,
        satFat: 3,
        transFat: 0,
        cholesterol: 0,
        sodium: 290,
        carbs: 26,
        fiber: 0,
        sugars: 0,
        protein: 4,
        price: 75
      });
      Snacks.insert({
        name: 'Doritos Nacho Cheeze',
        grams: 28,
        calories: 140,
        totalFat: 8,
        satFat: 1,
        transFat: 0,
        cholesterol: 0,
        sodium: 210,
        carbs: 16,
        fiber: 1,
        sugars: 0,
        protein: 2,
        price: 75
      });
      Snacks.insert({
        name: 'T.G.I. Friday\'s Potato Skins Snack Chips',
        grams: 28,
        calories: 140,
        totalFat: 8,
        satFat: 1,
        transFat: 0,
        cholesterol: 0,
        sodium: 250,
        carbs: 15,
        fiber: 1,
        sugars: 1,
        protein: 1,
        price: 75
      });
      Snacks.insert({
        name: 'Krunchers! Kettle Cooked Potato Chips (Jalapeño)',
        grams: 28,
        calories: 140,
        totalFat: 7,
        satFat: 1,
        transFat: 0,
        cholesterol: 0,
        sodium: 250,
        carbs: 17,
        fiber: 1,
        sugars: 1,
        protein: 2,
        price: 75
      });
      Snacks.insert({
        name: 'Fritos Corn Chips',
        grams: 28,
        calories: 160,
        totalFat: 10,
        satFat: 1,
        transFat: 0,
        cholesterol: 0,
        sodium: 170,
        carbs: 15,
        fiber: 1,
        sugars: 1,
        protein: 2,
        price: 75
      });
      Snacks.insert({
        name: 'Knott\'s Berry Farm Raspberry Shortbread Cookies',
        grams: 57,
        calories: 240,
        totalFat: 11,
        satFat: 2,
        transFat: 11,
        cholesterol: 10,
        sodium: 120,
        carbs: 33,
        fiber: 1,
        sugars: 13,
        protein: 2,
        price: 100
      });
      Snacks.insert({
        name: 'Famous Amos Chocolate Chip Cookies',
        grams: 56,
        calories: 280,
        totalFat: 13,
        satFat: 5,
        transFat: 0,
        cholesterol: 5,
        sodium: 200,
        carbs: 38,
        fiber: 2,
        sugars: 18,
        protein: 3,
        price: 100
      });
      Snacks.insert({
        name: 'Grandma\'s Oatmeal Raisin Cookies',
        grams: 70,
        calories: 310,
        totalFat: 12,
        satFat: 4,
        transFat: 0,
        cholesterol: 25,
        sodium: 390,
        carbs: 46,
        fiber: 3,
        sugars: 24,
        protein: 4,
        price: 100
      });
      Snacks.insert({
        name: 'Grandma\'s Peanut Butter Cookies',
        grams: 70,
        calories: 340,
        totalFat: 17,
        satFat: 5,
        transFat: 0,
        cholesterol: 10,
        sodium: 330,
        carbs: 38,
        fiber: 4,
        sugars: 20,
        protein: 7,
        price: 100
      });
      Snacks.insert({
        name: 'Kellogg\'s Rice Krispie Treats',
        grams: 60,
        calories: 250,
        totalFat: 6,
        satFat: 2,
        transFat: 0,
        cholesterol: 0,
        sodium: 280,
        carbs: 47,
        fiber: 1,
        sugars: 21,
        protein: 2,
        price: 100
      });
      Snacks.insert({
        name: 'Swedish Fish Chewy Candy',
        grams: 57,
        calories: 200,
        totalFat: 0,
        satFat: 0,
        transFat: 0,
        cholesterol: 0,
        sodium: 40,
        carbs: 51,
        fiber: 0,
        sugars: 40,
        protein: 0,
        price: 100
      });
      Snacks.insert({
        name: 'Original Skittles',
        grams: 57,
        calories: 231,
        totalFat: 2,
        satFat: 0,
        transFat: 0,
        cholesterol: 0,
        sodium: 9,
        carbs: 52,
        fiber: 0,
        sugars: 43,
        protein: 0,
        price: 100
      });
      Snacks.insert({
        name: 'Snickers Candy Bar',
        grams: 44,
        calories: 215,
        totalFat: 6,
        satFat: 0,
        transFat: 0,
        cholesterol: 4,
        sodium: 83,
        carbs: 28,
        fiber: 1,
        sugars: 20,
        protein: 3,
        price: 100
      });
      Snacks.insert({
        name: 'Kit Kat Candy Bar',
        grams: 58,
        calories: 280,
        totalFat: 15,
        satFat: 10,
        transFat: 0,
        cholesterol: 5,
        sodium: 40,
        carbs: 37,
        fiber: 1,
        sugars: 29,
        protein: 4,
        price: 100
      });
      Snacks.insert({
        name: 'Planters Salted Peanuts',
        grams: 56,
        calories: 330,
        totalFat: 29,
        satFat: 4,
        transFat: 0,
        cholesterol: 0,
        sodium: 200,
        carbs: 9,
        fiber: 5,
        sugars: 2,
        protein: 15,
        price: 100
      });
      Snacks.insert({
        name: 'Kar\'s Salted Cashews',
        grams: 28,
        calories: 160,
        totalFat: 14,
        satFat: 3,
        transFat: 0,
        cholesterol: 0,
        sodium: 85,
        carbs: 9,
        fiber: 1,
        sugars: 1,
        protein: 5,
        price: 100
      });
      Snacks.insert({
        name: 'Nature Valley Oats \'n Honey Granola Bars',
        grams: 42,
        calories: 190,
        totalFat: 7,
        satFat: 1,
        transFat: 0,
        cholesterol: 0,
        sodium: 180,
        carbs: 29,
        fiber: 2,
        sugars: 11,
        protein: 3,
        price: 100
      });
      Snacks.insert({
        name: 'Nature Valley Peanut Butter Granola Bars',
        grams: 42,
        calories: 190,
        totalFat: 8,
        satFat: 1,
        transFat: 0,
        cholesterol: 0,
        sodium: 180,
        carbs: 27,
        fiber: 2,
        sugars: 11,
        protein: 4,
        price: 100
      });
      Snacks.insert({
        name: 'Hershey\'s King Size with Almonds',
        grams: 74,
        calories: 380,
        totalFat: 24,
        satFat: 12,
        transFat: 0,
        cholesterol: 15,
        sodium: 55,
        carbs: 40,
        fiber: 3,
        sugars: 36,
        protein: 7,
        price: 100
      });
      Snacks.insert({
        name: 'Milk Chocolate Raisinets',
        grams: 45,
        calories: 190,
        totalFat: 8,
        satFat: 5,
        transFat: 0,
        cholesterol: 5,
        sodium: 15,
        carbs: 32,
        fiber: 1,
        sugars: 27,
        protein: 2,
        price: 100
      });
      Snacks.insert({
        name: 'Payday Caramel Bar',
        grams: 52,
        calories: 240,
        totalFat: 13,
        satFat: 2,
        transFat: 0,
        cholesterol: 0,
        sodium: 120,
        carbs: 27,
        fiber: 2,
        sugars: 21,
        protein: 7,
        price: 100
      });
      Snacks.insert({
        name: 'Reese\'s Peanut Butter Cups',
        grams: 43,
        calories: 210,
        totalFat: 13,
        satFat: 5,
        transFat: 0,
        cholesterol: 5,
        sodium: 150,
        carbs: 24,
        fiber: 1,
        sugars: 21,
        protein: 5,
        price: 100
      });
      Snacks.insert({
        name: '3 Musketeers Bar',
        grams: 54,
        calories: 240,
        totalFat: 7,
        satFat: 5,
        transFat: 0,
        cholesterol: 5,
        sodium: 90,
        carbs: 42,
        fiber: 1,
        sugars: 36,
        protein: 1,
        price: 100
      });
      Snacks.insert({
        name: 'Peanut M&M\'s',
        grams: 49,
        calories: 250,
        totalFat: 13,
        satFat: 5,
        transFat: 0,
        cholesterol: 5,
        sodium: 25,
        carbs: 30,
        fiber: 2,
        sugars: 25,
        protein: 5,
        price: 100
      });
      Snacks.insert({
        name: 'Twizzlers Strawberry Twists',
        grams: 71,
        calories: 249,
        totalFat: 2,
        satFat: 0,
        transFat: 0,
        cholesterol: 0,
        sodium: 204,
        carbs: 57,
        fiber: 0,
        sugars: 28,
        protein: 2,
        price: 100
      });
      Snacks.insert({
        name: 'Chocolate M&M\'s',
        grams: 47,
        calories: 240,
        totalFat: 10,
        satFat: 6,
        transFat: 0,
        cholesterol: 5,
        sodium: 30,
        carbs: 34,
        fiber: 1,
        sugars: 30,
        protein: 2,
        price: 100
      });
      Snacks.insert({
        name: 'York Peppermint Pattie',
        grams: 47,
        calories: 140,
        totalFat: 3,
        satFat: 2,
        transFat: 0,
        cholesterol: 0,
        sodium: 10,
        carbs: 31,
        fiber: 1,
        sugars: 25,
        protein: 1,
        price: 100
      });
      Snacks.insert({
        name: 'Twix Caramel Cookie Bars',
        grams: 51,
        calories: 250,
        totalFat: 12,
        satFat: 7,
        transFat: 0,
        cholesterol: 5,
        sodium: 100,
        carbs: 34,
        fiber: 1,
        sugars: 24,
        protein: 2,
        price: 100
      });
      Snacks.insert({
        name: 'Hershey\'s King Size',
        grams: 73,
        calories: 360,
        totalFat: 21,
        satFat: 13,
        transFat: 0,
        cholesterol: 20,
        sodium: 60,
        carbs: 44,
        fiber: 2,
        sugars: 41,
        protein: 6,
        price: 100
      });
      Snacks.insert({
        name: 'Mike and Ike Original Fruits',
        grams: 51,
        calories: 180,
        totalFat: 0,
        satFat: 0,
        transFat: 0,
        cholesterol: 0,
        sodium: 40,
        carbs: 45,
        fiber: 0,
        sugars: 32,
        protein: 0,
        price: 100
      });
      Snacks.insert({
        name: 'Strawberry Pop-Tarts',
        grams: 2*52,
        calories: 2*200,
        totalFat: 2*5,
        satFat: 2*1.5,
        transFat: 0,
        cholesterol: 0,
        sodium: 2*170,
        carbs: 2*38,
        fiber: 0,
        sugars: 2*16,
        protein: 2*2,
        price: 125
      });
      Snacks.insert({
        name: 'Blueberry Pop-Tarts',
        grams: 2*52,
        calories: 2*200,
        totalFat: 2*5,
        satFat: 2*1.5,
        transFat: 0,
        cholesterol: 0,
        sodium: 2*170,
        carbs: 2*38,
        fiber: 0,
        sugars: 2*16,
        protein: 2*2,
        price: 125
      });
      Snacks.insert({
        name: 'Brown Sugar Cinnamon Pop-Tarts',
        grams: 2*50,
        calories: 2*210,
        totalFat: 2*7,
        satFat: 2*2.5,
        transFat: 0,
        cholesterol: 0,
        sodium: 2*170,
        carbs: 2*35,
        fiber: 0,
        sugars: 2*15,
        protein: 2*2,
        price: 125
      });
      Snacks.insert({
        name: 'Kar\'s Nut \'n Yougrt Trail Mix',
        grams: 57,
        calories: 2*140,
        totalFat: 2*10,
        satFat: 2*2.5,
        transFat: 0,
        cholesterol: 0,
        sodium: 2*5,
        carbs: 2*12,
        fiber: 2*2,
        sugars: 2*8,
        protein: 2*4,
        price: 125
      });
      Snacks.insert({
        name: 'Act II Butter Popcorn',
        grams: 87,
        calories: 425,
        totalFat: 30,
        satFat: 15,
        transFat: 0,
        cholesterol: 0,
        sodium: 625,
        carbs: 40,
        fiber: 8,
        sugars: 0,
        protein: 5,
        price: 125
      });
      Snacks.insert({
        name: 'Life Savers (5 Flavors)',  // 11 candies per roll
        grams: 41, // 15 * 2.75
        calories: 124, // 45 * 2.75
        totalFat: 0,
        satFat: 0,
        transFat: 0,
        cholesterol: 0,
        sodium: 0,
        carbs: 30, // 11 * 2.75
        fiber: 0,
        sugars: 25, // 9 * 2.75
        protein: 0,
        price: 60
      });
      Snacks.insert({
        name: 'Life Savers (Pep O Mint)',  // 11 candies per roll
        grams: 44, // 16 * 2.75
        calories: 165, // 60 * 2.75
        totalFat: 0,
        satFat: 0,
        transFat: 0,
        cholesterol: 0,
        sodium: 0,
        carbs: 41, // 15 * 2.75
        fiber: 0,
        sugars: 41, // 15 * 2.75
        protein: 0,
        price: 60
      });
      Snacks.insert({
        name: 'Juicy Fruit Gum',
        grams: 16, // 2.7 * 5
        calories: 50, // 10 * 5
        totalFat: 0,
        satFat: 0,
        transFat: 0,
        cholesterol: 0,
        sodium: 0,
        carbs: 10, // 2 * 5
        fiber: 0,
        sugars: 10, // 2 * 5
        protein: 0,
        price: 60
      });
      Snacks.insert({
        name: 'Big Red Gum',
        grams: 16, // 2.7 * 5
        calories: 50, // 10 * 5
        totalFat: 0,
        satFat: 0,
        transFat: 0,
        cholesterol: 0,
        sodium: 0,
        carbs: 10, // 2 * 5
        fiber: 0,
        sugars: 10, // 2 * 5
        protein: 0,
        price: 60
      });
      Snacks.insert({
        name: 'Doublemint Gum',
        grams: 16, // 2.7 * 5
        calories: 50, // 10 * 5
        totalFat: 0,
        satFat: 0,
        transFat: 0,
        cholesterol: 0,
        sodium: 0,
        carbs: 10, // 2 * 5
        fiber: 0,
        sugars: 10, // 2 * 5
        protein: 0,
        price: 60
      });
    }
    if (Players.find().count() === 0) {
      var names = ['If you eat everything', 'DJ', 'Melissa', 'Nee', 'Nick'];
      _.each(names, function (name) {
        Players.insert({
          name: name
        });
      });
    }
  });
}