//var React = require('react');
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
//var ReactDOM = require('react-dom');
//var MultiSelect = require('react-selectize').MultiSelect;
//var _ = require('lodash');


function toTitleCase(str) {
				return str.replace(/\w\S*/g, function (txt) {
								return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
				});
}

//var Cardbuilder = React.createClass({
export default class Cardbuilder extends Component {
				//getInitialState: function() {
				//	return {};
				//},
				constructor(props) {
								/* Note props is passed into the constructor in order to be used */
								super(props);
								this.state = {
												title: props.title
								};
				}

				render() {
								var cardstyle = {
												"border-radius": "25px",
												"border": "2px solid black",
												"padding": "20px",
												"width": "300px",
												"height": "420px"
								};

								return React.createElement(
												'div',
												null,
												React.createElement('div', { style: cardstyle })
								);
				}
};

ReactDOM.render(React.createElement(Cardbuilder, null), document.getElementById('cardbuilder'));