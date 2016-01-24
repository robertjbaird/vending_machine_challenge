FlowRouter.route('/', {
  name: 'Home',
  action: function (params, queryParams) {
    BlazeLayout.render('layout1', {top: "header", main: "overview"});
  }
});

FlowRouter.notFound = {
  action: function () {
    BlazeLayout.render('layout1', {top: "header", main: "not_found"});
  }
};

FlowRouter.route('/snack/:_id', {
  name: 'Snack.show',
  action: function (params, queryParams) {
    BlazeLayout.render('layout1', {top: "header", main: "snack_controller"});
  }
});

FlowRouter.route('/player/:_id', {
  name: 'Player.show',
  action: function (params, queryParams) {
    BlazeLayout.render('layout1', {top: "header", main: "player_controller"});
  }
});