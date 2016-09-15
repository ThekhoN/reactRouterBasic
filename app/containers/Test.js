var React = require('react');
var Nav = require('../components/Header');

var Test = React.createClass({
  render: function(){
    return (
      <div>
        <h2>Test Component</h2>
        <Nav/>
      </div>
    )
  }
});

module.exports = Test;
