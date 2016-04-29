$(document).ready(function(){
	// DOM is ready, we can initialize our own stuff
	init();
});

function
init()
{
	initCarousel();
	initFormValidation();
	initVoteList();
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

function
initVoteList()
{
	var el = $("#vote div.row");
	var data = fakeData();
	var template = _.template('<div class="col-sm-6 col-md-3"><div class="thumbnail kitten" data-id="<%- id %>"><img alt="100%x200" src="<%- imageUrl %>"><div class="caption text-center"><h3><%- name %></h3><p><%- description %></p><p><a role="button" class="btn btn-primary">Vote</a></p><img src="img/smallajaxloader.gif" class="vote-loader hidden"></div></div></div>');

	_(data).forEach(function(kitten) {
		el.append(template(kitten));
	});
}

function
fakeData()
{
	return [
		{
			id: '1',
			name: 'Pyjama',
			description: "He's extremely funny",
			imageUrl: 'http://placekitten.com/g/200/300'
		}
	]
}
