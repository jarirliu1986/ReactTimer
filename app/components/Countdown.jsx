var React = require('react');
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0
    };
  },
  handleSetCountDown:function (seconds) {
    this.setState({
      count: seconds
    });
  },
  render: function () {
    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountDownForm onSetCountdown={this.handleSetCountDown}/>
      </div>
    );
  }
});

module.exports = Countdown;
