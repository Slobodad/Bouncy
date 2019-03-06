'use strict'
// isotop
$(document).ready(function() {
    var portfolioGrid = $('#js-list');

    portfolioGrid.isotope({
        itemSelector: '#js-elements',
        masonry: {
            columnWidth: 5,
            horizontalOrder: true
          }
    });

    $('#js-portfolio-btn').on( 'click', 'button', function() {
        var filterValue = $(this).data('filter');

        portfolioGrid.isotope({ filter: filterValue });
      });

});

// slick slider

$(document).ready(function(e) {
    $('.sl').slick({
        centerMode:false,     
        draggable:false,    
        arrows:true,    
        // autoplay:true,
        autoplaySpeed:3000,     
        slidesToShow:1,     
        slidesToScroll:1,   
        dots:true,

    });

});

// google map
$(document).ready(function() {
    var map;
    var mapConteiner = $('#map')[0];
    var mapCenter = {lat: 51.4904732, lng: 31.3050769};

    map = new google.maps.Map(mapConteiner, {
        center: mapCenter,
        zoom: 15,
        disableDefaultUI: true
    });
    var iconMarker = 'img/marker.png';

    var marker = new google.maps.Marker({
        position: mapCenter,
        map: map,
        icon: iconMarker    
    })
});


