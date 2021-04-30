(function($){
  $.fn.stickeyHeader = function(options){
    var settings = $.extend({},{
      class: 'fixed',
      customNum : false,
      activeCb: function(){

      },
      deactiveCb: function(){

      }
    },options);

    var $el = $(this),
    top;

    if(settings.customNum){
      top = settings.customNum;
    }
    else{
      top = $el.offset().top;
    }

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll >= top){
        $el.addClass(settings.class);
        settings.activeCb();
      }
      else{
        $el.removeClass(settings.class);
        settings.deactiveCb();
      }
    });

  }
})(jQuery);
