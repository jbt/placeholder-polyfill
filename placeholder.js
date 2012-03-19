(function($){
  var alreadySupported = 'placeholder' in document.createElement('input');

  function doPlaceholder(){
    if(alreadySupported) return;
    var $this = $(this);
    if(!$this.is('[type="text"], [type="password"], textarea')) return;
    $this.wrap('<span style="position:relative" />');
    var l = $('<label/>')
      .css({
        position: 'absolute'
      })
      .text($this.attr('placeholder'))
      .insertBefore($this);

    $this.bind('change keyup keydown', function(changed){
      if($this.val() == ''){
        l.show();
      }else{
        l.hide();
      }
    })
  }

  $.fn.placeholder = function(){
    return this.each(doPlaceholder);
  };
})(jQuery);
