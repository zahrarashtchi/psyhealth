

$('.flexslider').flexslider({
   animation: "slide",
   animationSpeed: 1000,
   slideshowSpeed: 7000,
   directionNav:false
 });
 $('.animation').each(function(){
   var $el = $(this);
   $(window).scroll(function(){
     if(!($el.hasClass('animated')) && $el.onView()){
       $el.addClass($el.data('animation'))
       .addClass('animated');
     }
   });
 });

      //Sandwich
      $('.sandwich-container').sandwich({
        menu: $('.menu-container'),
        closeOnClick: true
      });


      //team carousel
      $('#team-carousel').owlCarousel({
        margin:5,
        nav:false,
        dots:false,
        loop: true,
        responsiveClass:true,
        responsive:{
          0: {
            items:1
          },
          768:{
            items:2
          },
          992:{
            items:3
          }

        }
      });

      $('#gallery').owlCarousel({
        margin:1,
        nav:true,
        navigation:true,
        dots:false,
        loop:false,
        responsiveClass:true,
        responsive:{
          0:{
            items:1
          },
          768:{
            items:2
          },
          992:{
            items:4
          }
        }
      })
      .magnificPopup({
        delegate: '.link-plus',
        type: "image",
        gallery:{
          enabled: true
        },
        removalDelay:620,
        image: {
          cursor: 'mfp-zoom-out-cur',
          titleSrc: function(item){
            var title = $(item.el[0]).data('title');
            return '<small>'+ title +'</small>';
          } ,
          verticalFit: true
        }
      });

      $('.prev-gallery').click(function(){
        $('#gallery .owl-prev').click();
      });
      $('.next-gallery').click(function(){
        $('#gallery .owl-next').click();
      });

      $('#testimonials').owlCarousel({
        margin:15,
        autoplay:true,
        nav:false,
        dots:true,
        loop:true,
        responsiveClass:true,
        responsive:{
          0:{
            items:1
          },
          768:{
            items:2
          }
        }
      });
      //parallax
      $('.s-parallax').parallax('50%',1);

      //portfoli-owlCarousel
      $('#portfolio-carousel').owlCarousel({
        loop:true,
        dots:false,
        nav:false,
        responsiveClass:true,
        responsive:{
          0:{
            items:1
          },
          768:{
            items:2
          },
          992:{
            items:3
          },
          1200:{
            items:4
          }
        }
      });

      $('#quote-image-carousel').owlCarousel({
        margin:60,
        loop:true,
        nav:false,
        dots:false,
        center:true,
        responsiveClass:true,
        responsive:{
          0:{
            items:1
          },
          992:{
            items:3
          }
        }
      });

      $('.navBar .upward').stickeyHeader({
        customNum: $('.navBar .upward').offset().top,
        activeCb: function(){
          $('.upward-background').addClass('active');
        },
        deactiveCb:function(){
          $('.upward-background').removeClass('active');
        }
      });


      $('.menu-container li a').scrollAnchor({
        additional: -80
      });

      $('.slides').slide({
        oneOpen:true
      });

      $('.ba-slider').beforeAfter();

      var c=0;
      $(window).scroll(function(){
        if(c==0){
          $('.number').each(function(){
            var $el= $(this);
            if($el.onView()){
              c++;
              $el.countTo({
                speed:200,
                decimals:0
              });
            }
          });
        }
      });
