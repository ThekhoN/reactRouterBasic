var React = require('react');
var MainWrapper = require('../components/MainWrapper');
var Header = require('../components/Header');
var Nav = require('../components/Nav');
var MainContentWrapper = require('../components/MainContentWrapper');

var links = ['home', 'about', 'contact'];

var MainLayout = React.createClass({
  render: function(){
    return (
      <MainWrapper>
        <Header title="This is the Main Header!"/>
        <Nav links={links}/>
        <MainContentWrapper>
           {this.props.children}
        </MainContentWrapper>
      </MainWrapper>
    )
  }
});

module.exports = MainLayout;
