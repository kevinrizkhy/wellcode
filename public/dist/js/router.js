function bodyLoadContent(){
	var hash = window.location.hash;
	loadContent(hash);
}


function loadContent(b){
 	// var a = '<object type="text/html" data="'+b+'" style="width:100%;height:auto;"></object>';
  //   document.getElementById("JumbotronContent").innerHTML= a;
  	


	window.location.hash = b;
    var component; 
	switch (window.location.hash) {
		case "#login" :
			component = React.createElement('div',{},"Content");
	 		ReactDOM.render(component,document.getElementById('JumbotronContent'));
	 		break;
	 	case "#signup" :
			component = React.createElement('div',{},"Content");
	 		ReactDOM.render(component,document.getElementById('JumbotronContent'));
	 		break;
		case "#agreement" :
		 	agreementFunc();
		 	break;
		 default :
		 	component = React.createElement('div',{},"Content");
		 	ReactDOM.render(component,document.getElementById('JumbotronContent'));
		 	break;
	}
	// ReactDOM.render(component,document.getElementById('JumbotronContent'));

}

function agreementFunc(){
	var a = '<object type="text/html" data="modal-signup.html" style="width:100%;height:800px;overflow-y:hidden;"></object>';
 	document.getElementById("JumbotronContent").innerHTML= a;
}

function agreement(){
	var paragraph = "We appreciate your interest.  Please enter your email in the box below, then submit the form, and you will be subscribed to our newsletter.";

	var thankYou = "Thank you for registering.  We are excited to send you your first newsletter shortly."

	var Subscribe = React.createClass({
	  displayName: "Subscribe",
	  onClick: function() {
	    this.setState({
	      text: thankYou,
	      label: 'Thank You',
	      disabled: true
	    });
	  },

	  componentWillMount() {
	    this.setState({
	      text: this.props.text,
	      label: this.props.label,
	      disabled: this.props.disabled
	    });
	  },

	  render: function render() {
	    return React.createElement("div", null,
	      React.createElement("p", null, this.state.text),
	      React.createElement("input", {
	        id: "email",
	        disabled: this.state.disabled
	      }),
	      React.createElement("button", {
	        onClick: this.onClick,
	        disabled: this.state.disabled
	      }, this.state.label));
	}
});

	ReactDOM.render(React.createElement(Subscribe, {
			  text: paragraph,
			  disabled: false,
			  label: 'Submit'
			}), document.getElementById('JumbotronContent'));
}


