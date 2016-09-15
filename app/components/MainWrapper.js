var React = require('react');

var MainWrapper = React.createClass({
  render: function(){
    return (
      <div className='MainWrapper'>
        {this.props.children}
      </div>
    )
  }
});

module.exports = MainWrapper;
