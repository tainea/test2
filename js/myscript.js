$(document).ready(function(){
	// DOM is ready, we can initialize our own stuff
	init();
});

function
init()
{
	// enable SLICK
	$('#carousel').slick({
		'infinite': true,
		'autoplay': true,
		'autoplaySpeed': 3000,
		'dots': true,
		'slidesToShow': 1,
		'slidesToScroll': 1
	});

	// enable FORM VALIDATION
	$('#enter-form').validate({
		rules: {
			email: "required",
    			name: "required",
    			discription: "required",
    			pic: "required"
    		},
			
    		submitHandler: function(form) {
    			alert("C'est OK ça part !!");
    			form.submit();
    		}
	});

/*
		function ValidURL(str) {
			var pattern = new RegExp('^(https?:\/\/)?'+ // protocol
    			'((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
    			'((\d{1,3}\.){3}\d{1,3}))'+ // OR ip (v4) address
    			'(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port and path
    			'(\?[;&a-z\d%_.~+=-]*)?'+ // query string
    			'(\#[-a-z\d_]*)?$','i'); // fragment locater
  			if(!pattern.test(str)) {
    				alert("Please enter a valid URL.");
    				return false;
    			} else {
				return true;
			}
		}
	});
*/
}
