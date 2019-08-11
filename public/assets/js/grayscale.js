/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
// function collapseNavbar() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// }

// $(window).scroll(collapseNavbar);
// $(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $(".navbar-collapse").collapse('hide');
});

PAYPAL_CLIENT = 'AbbjrpIxaESIwEm4B-SJKfBc9Znf5KPpZUiYrm-wVqAFK-GfFguv8KgfPJrvOTSjqfMZVwefnWxWYMFd';
PAYPAL_SECRET = 'EImPSyap3goDbCqKuB0kTS3AYPftmIC-Ae3ROHyqSTLKFAo_eoBf3SW3S9HVf9FJTE6OuKEQLJJZjiEg';

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
