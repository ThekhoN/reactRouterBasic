var React = require('react');

var NotFound = React.createClass({
  render: function(){
    return (
      <div className='NotFound MainContent'>
        <h2>
          Error:404 Page Not Found
        </h2>
      </div>
    )
  }
});

module.exports = NotFound;
