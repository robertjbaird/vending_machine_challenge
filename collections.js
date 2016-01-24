// Couldn't get this to work right/reliably while using SimpleSchema
// so below each autoValue has a duplicate implementation of the
// simple summation function.
//var fetchConsumedSnackData = new function(snackIds, nutritionField) {
//  if (snackIds === undefined) {
//    return 0;
//  }
//
//  var total = 0;
//  snackIds.forEach(function (snackId) {
//    var snack = Snacks.findOne(snackId);
//    total = total + snack.nutritionField;
//  });
//
//  return total;
//
//};

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
    autoValue: function () {
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
    autoValue: function () {
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
    autoValue: function () {
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
    autoValue: function () {
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
    autoValue: function () {
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
    autoValue: function () {
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
    autoValue: function () {
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
    autoValue: function () {
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
    autoValue: function () {
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
    autoValue: function () {
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
    autoValue: function () {
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
    autoValue: function () {
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
      options: function () {
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
