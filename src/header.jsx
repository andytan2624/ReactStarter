var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            text: ''
        }
    },
    render: function () {
        return <div className="input-group">
            <input
                value={this.state.text}
                type="text"
                className="form-control"
                onChange={this.handleInputChange}
            />
           <span className="input-group-btn">
               <button className="btn btn-default" type="button">
                   Add
               </button>
           </span>
        </div>
    },
    handleClick: function () {

    },
    handleInputChange: function (event) {
        this.setState({text: event.target.value});
    }
});