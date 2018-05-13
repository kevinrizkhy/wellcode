$(document).ready(function () {
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
		value = $("#sidebarCollapse").text();
		if(value=="Open"){
			$('#sidebarCollapse').html('Close');
		}else{
			$('#sidebarCollapse').html('Open');
		}
	});
});

function navigated() {
	var component; 
	switch (window.location.hash) {
		case "#/home1" :
	 		component = React.createElement('div', {}, "Home1");
	 		break;
		case "#/home2" :
		 	component = React.createElement('div', {}, "Home2");
		 	break;
		 case "#/home3" :
		 	component = React.createElement('div', {}, "Home3");
		 	break;
		 default :
		 	component = React.createElement('div', {}, "Other");
		 	break;
	}
	ReactDOM.render(component,document.getElementById('react-tes'));
}
