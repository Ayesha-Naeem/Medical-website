
  var nav=document.querySelector('nav');
  window.addEventListener('scroll',function()
  {
    if(window.scrollY>100){
        nav.classList.add('custom-bg-dark', 'shadow');
    }
    else{
       nav.classList.remove('custom-bg-dark'); 
    }
  });

$(document).ready(function() {
  function applyBootstrapClasses() {
    var windowWidth = $(window).width();

    if (windowWidth <= 1205) {
      $('#pictures, #test').addClass('col-md-12 custom-col');
       $('#pictures, #test').removeClass('col-md-6 custom-col');
  
    } else {
      $('#pictures, #test').removeClass('col-md-12 custom-col');
      $('#pictures, #test').addClass('col-md-6 custom-col');
    }
  }

  applyBootstrapClasses();

  $(window).resize(function() {
    applyBootstrapClasses();
  });
});



      $('.custom-logos-slider').slick({

            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover:false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow:4
                }
            }, {
                breakpoint: 520,
                setting: {
                    slidesToShow: 1
                }
            }]
        });
  