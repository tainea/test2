$(document).ready(function(){
	// DOM is ready, we can initialize our own stuff
	init();
});

function
init()
{
	initCarousel();
	initFormValidation();
}

function
initCarousel()
{
	$('#carousel').slick(
	{
		'infinite': true,
		'autoplay': true,
		'autoplaySpeed': 3000,
		'dots': true,
		'slidesToShow': 1,
		'slidesToScroll': 1
	});
}

function
initFormValidation()
{
	$('#enter-form').validate(
	{
		rules: {
			email: "required",
    			name: "required",
    			discription: "required",
			pic: {
				required: true,
      				url: true
			}
    		},
			
    		submitHandler: function(form)
		{
    			alert("C'est OK ça part !!");
    			form.submit();
    		}
	});
}


