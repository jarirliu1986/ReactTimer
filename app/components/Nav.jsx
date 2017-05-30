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
              <IndexLink to="/" activeClassName="active-link" >
                Timer
              </IndexLink>
            </li>
            <li>
              <IndexLink to="/countdown" activeClassName="active-link" >
                Counterdown
              </IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right" >
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="https://www.linkedin.com/in/zheyu-liu-7917b1b3" target="_blank">Dora Liu</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
