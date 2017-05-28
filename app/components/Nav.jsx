var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Time App</li>
            <li>
              <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight:'bold'}}>
                Timer
              </IndexLink>
            </li>
            <li>
              <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight:'bold'}}>
                Counterdown
              </IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right" style={{fontWeight: 'bold'}}>
          Created by <a href="https://www.linkedin.com/in/zheyu-liu-7917b1b3" target="_blank">Dora Liu</a>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
