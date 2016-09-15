var React = require('react');

var MainContentWrapper = React.createClass({
  render: function(){
    return (
      <div className='MainContentWrapper'>
        {this.props.children}
      </div>
    )
  }
})

module.exports = MainContentWrapper;
