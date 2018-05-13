function bodyLoadContent(){
	var hash = window.location.hash;
	loadContent(hash);
}

var myMap = {};

function loadContent(b){
  window.location.hash = b;
  switch (window.location.hash) {
  	case "#login" :
  	//$( '#JumbotronContent' ).load( 'assets/login.html' );
  	break;
  	case "#agreement" :
	// var a = '<object type="text/html" data="http://localhost:8080/assets/pages/login.html" style="width:100%;height:auto;"></object>';
   	// 		$('#JumbotronContent').html(a);
   	break;
   	default :
   	component = React.createElement('div',{},"Default");
   	ReactDOM.render(component,document.getElementById('JumbotronContent'));
   	break;
   }
	// ReactDOM.render(component,document.getElementById('JumbotronContent'));
}