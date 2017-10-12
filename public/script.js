$(function() {
    markActiveNav();
  });
  
//Markera aktiv navbarlänk
function markActiveNav() {
    var href = location.href;
    var pgurl = href.substr(href.lastIndexOf('/') + 1);
    $('nav ul a[href="/' + pgurl + '"]').addClass('active');
};


//Hantera prices-btn
$('.prices-btn').click(function () {
    $('aside.prices').toggle();
    $('.prices-btn .show-text').toggle();
    $('.prices-btn .hide-text').toggle();
    //Hämta bara en gång
    if ($("ul#prices").children().length == 0) {
        getPrices();
    }
});

//Hämta priser från JSON
function getPrices() {
    $.getJSON('prices.json', function (prices) {

        // loop through an object
        for (let key in prices) {

            let val = prices[key];

            // create a li element with the info
            // and add to the ul
            $('ul#prices').append(
                '<li>' + key + ': ' + val + '</li>'
            );
        }

    });

}