var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var Nav = React.createClass({
  render: function(){
    return (
      <div className="Nav">
        <ul>
          {this.props.links.map(function(item, index){
            if(index===0){
              return (
                <li key={index}>
                  <Link to='/'>
                    {item}
                  </Link>
                </li>
              )
            }
            else {
              return (
                <li key={index}>
                  <Link to={`/${item}`}>
                    {item}
                  </Link>
                </li>
              )
            }
          })}
        </ul>
      </div>
    )
  }
});

module.exports = Nav;
