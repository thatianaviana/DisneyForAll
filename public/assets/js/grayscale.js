var PAYPAL = new PAYPAL(keys.PAYPAL);


// $(function () {
//     $('a.page-scroll').bind('click', function (event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });

// // Closes the Responsive Menu on Menu Item Click
// $('#navbarNav ul li a').click(function () {
//     $("#navbarNav").collapse('hide');
// });




// 1b. Point your server to the PayPal API
PAYPAL_OAUTH_API = 'https://api.sandbox.paypal.com/v1/oauth2/token/';
PAYPAL_ORDER_API = 'https://api.sandbox.paypal.com/v2/checkout/orders/';

// 1c. Get an access token from the PayPal API
basicAuth = base64encode(`${PAYPAL_CLIENT}:${PAYPAL_SECRET}`);
auth = http.post(PAYPAL_OAUTH_API {
    headers: {
        Accept: `application/json`,
        Authorization: `Basic ${basicAuth}`
    },
    data: `grant_type=client_credentials`
});

// 2. Set up your server to receive a call from the client
function handleRequest(request, response) {

    // 2a. Get the order ID from the request body
    orderID = request.body.orderID;

    // 3. Call PayPal to get the transaction details
    details = http.get(PAYPAL_ORDER_API + orderID, {
        headers: {
            Accept: `application/json`,
            Authorization: `Bearer ${auth.access_token}`
        }
    });

    // 4. Handle any errors from the call
    if (details.error) {
        return response.send(500);
    }

    // 5. Validate the transaction details are as expected
    if (details.purchase_units[0].amount.value !== '5.77') {
        return response.send(400);
    }

    // 6. Save the transaction in your database
    database.saveTransaction(orderID);

    // 7. Return a successful response to the client
    return response.send(200);
}

// functionality for the modal in meet the families page
//Do NOT delete - Thatiana's Code

$(function(){

	var families = [
		{
			'name': 'Ortiz Family',
			'src': 'https://via.placeholder.com/200',
			'description': 'This family deserves a day at the happiest day on earth'
		},
		{
			'name': 'Stine Family',
			'src': 'https://via.placeholder.com/200',
			'description':'This big family love each other so much, they deserve a day in Disneyland!'
		}, 
		{
			'name': 'Manilow Family',
			'src': 'https://via.placeholder.com/200',
			'description': 'Friends describe this family as the hardest working family on the block. Lets help them have fun.'
		},
		{
			'name': 'Abanda Family',
			'src': 'https://via.placeholder.com/200',
			'description': 'This family came from Africa for a chance to have a better life. They deserve a fun day at the happiest place on earth!'
		}, 
			{
			'name': 'Heick Family',
			'src': 'https://via.placeholder.com/200',
			'description': 'The Heick family\'s dream is to go to Disney. Let\'s help them make a reality!'
		},
	
	];

	$('.thumb').on('click', function(){
        console.log(families);
		var index = $(this).data('index');
		var family = families[index];

		
		$('#modal-title').html(family.name);
		$('#modal-image').attr('src', family.src);
		$('#modal-description').html(family.description);


	});

	// $("#video").on('hidden.bs.modal', function(){
	// 	console.log('here');
    //     $("iframe").attr('src', '');
    // });
});