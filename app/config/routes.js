var React = require('react');

//ReactRouter
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute  = ReactRouter.IndexRoute ;
var hashHistory = ReactRouter.hashHistory;

//Layout
var MainLayout = require('../containers/MainLayout');
var Home = require('../containers/Home');
var Search = require('../containers/Search');
var About = require('../containers/About');
var Contact = require('../containers/Contact');
var NotFound = require('../containers/NotFound');


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainLayout}>
      <IndexRoute component={Home}/>
      <Route component={Search}>
        <Route path='about' component={About}/>
        <Route path='contact' component={Contact}/>
      </Route>
    </Route>
    <Route path='*' component={NotFound}/>
  </Router>
);

module.exports = routes;
