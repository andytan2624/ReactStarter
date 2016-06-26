var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var firebase = require('firebase');
var Header = require('./header');

var config = {
    apiKey: "AIzaSyBaWy34TdwS7v7rfzI5khc1sWyrWNRF5RY",
    authDomain: "reactstarter-706a8.firebaseapp.com",
    databaseURL: "https://reactstarter-706a8.firebaseio.com",
    storageBucket: "reactstarter-706a8.appspot.com",
};
firebase.initializeApp(config);

var App = React.createClass({
    mixins: [ReactFire],
    componentWillMount: function() {
        var firebaseRefs = firebase.database().ref('todoApp/items');
        this.bindAsArray(firebaseRefs.limitToLast(25), 'items');
    },
    render: function () {
        return <div className="row panel panel-default">
            <div className="col-md-8 col-md-offset-2">
                <h2 className="text-center">
                    To-Do List
                </h2>
                <Header items={this.state.items} />
            </div>
        </div>
    }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
