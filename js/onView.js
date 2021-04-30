(function(){
  $.fn.onView = function(options){

    var settings= $.extend({},{
      additional : $(this).data('additional'),
      top: $(this).data('top')
    },options);
    wH = $(window).height() ,
    $el = $(this) ,
    eT = $el.offset().top ,
    eH = $el.outerHeight() ,
    wS = $(window).scrollTop();
    
    if(settings.additional){
      eT += settings.additional;
      eH += settings.additional;
    }
    if(!settings.top){
      if( ( wS > (eT + eH - wH) )  ){
        return true;
      }
    }
    else{
      if( ( wS > (eT - wH) )  ){
        return true;
      }
    }

    return false;
  }
})(jQuery);
