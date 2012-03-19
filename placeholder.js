(function($){
  var alreadySupported = 'placeholder' in document.createElement('input');

  function doPlaceholder(){
    if(alreadySupported) return;
    var $this = $(this).wrap('<span/>');
    var l = $('<label/>')
      .text($this.attr('placeholder'))
      .click(function(){$this.focus()})
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
