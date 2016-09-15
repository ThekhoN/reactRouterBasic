var React = require('react');

var Search = React.createClass({
  render: function () {
    return (
      <div className='SearchWrap'>
        <div className='Search'>
          <label>Search : </label><input type='text' />
        </div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Search;
