//var React = require('react');
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
//var ReactDOM = require('react-dom');
//var MultiSelect = require('react-selectize').MultiSelect;
//var _ = require('lodash');


function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

//var Cardbuilder = React.createClass({
export default class Cardbuilder extends Component {
	//getInitialState: function() {
    //	return {};
  	//},
  	constructor(props) {    /* Note props is passed into the constructor in order to be used */
        super(props);
        var width = 48;
        var height = 72;
        var cellstyle = {
        	"width":"10px",
        	"height":"10px"
        }
        var rows = new Array(height);
    	for (var i=0; i<height; i++) {
        	rows[i] = new Array(width);
        	rows[i].fill(<div style={cellstyle}>+</div>);
    	}
        this.state = {
            title: props.title,
            grid: rows,
            width: width,
            height: height,
            scale: 2,
            msnapx: null,
            msnapy: null,
            cardtop:null,
            cardleft:null
        };
    }

    /*updateCardPos(){
		var cardtop = ReactDOM.findDOMNode(this.refs['carddiv']).offsetTop; 
    	var cardleft = ReactDOM.findDOMNode(this.refs['carddiv']).offsetLeft; 
    	this.setState({cardtop:cardtop, cardleft:cardleft});
    }

    componentDidMount(){
    	this.updateCardPos();
    	window.addEventListener("resize", this.updateCardPos);
    	
    }

    componentWillUnmount(){
    	window.removeEventListener("resize", this.updateCardPos);
    	
    }*/

    _onMouseMove(e) {
    	this.setState({ msnapx: e.nativeEvent.offsetX, msnapy: e.nativeEvent.offsetY});
    }

	render() {
		var wscale = this.state.width/this.state.scale;
		var hscale = this.state.height/this.state.scale;
		var wrapperstyle = {
			"display": "flex",
			"justifyContent": "center"
		}

		var cardstyle = {
		    "borderRadius": "25px",
		    "border": "2px solid black",
		    "padding": "20px",
		    "width": "480px",
		    "height": "720px"
		}

		var cardstyleabs = {
			"position":"absolute",
		    "borderRadius": "25px",
		    "border": "2px solid black",
		    "padding": "20px",
		    "width": "480px",
		    "height": "720px"
		}


		var gridstyle = {
			"display":"grid",
			"gridTemplateRows": "repeat("+hscale+", 1fr)",
			"gridTemplateColumns": "repeat("+wscale+", 1fr)"
		}

		var cellstyle = {
        	"width":""+(10*this.state.scale)+"px",
        	"height":""+(10*this.state.scale)+"px"
        }

        var xstyle = {
        	"fontColor":"green",
        	"position":"absolute",
        	"top": this.state.msnapy,
        	"left":this.state.msnapx
        }
		
		var grid = new Array(hscale);
    	for (var i=0; i<hscale; i++) {
        	grid[i] = new Array(wscale);
        	grid[i].fill(<div style={cellstyle}>+</div>);
    	}

		return(
	     <div style={wrapperstyle} >
	        <div> {this.state.cardtop}, {this.state.cardleft}</div>
	        <div style={xstyle} >{this.state.msnapx},{this.state.msnapy}</div>
	        
	        <div style={cardstyle} ref='carddiv' onMouseMove={this._onMouseMove.bind(this)}>
	        	<div style={gridstyle}>
	        		{grid}
	        	</div>
	        </div>

	     </div>
	   );
	 }
};

ReactDOM.render(React.createElement(Cardbuilder, null), document.getElementById('cardbuilder'));