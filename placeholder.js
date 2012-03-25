;(function($){
  var alreadySupported = 'placeholder' in document.createElement('input');

  function doPlaceholder(){
    if(alreadySupported) return;
    var $this = $(this);
    if($this.data('placeholder-polyfill'))return;
    $this.data('placeholder-polyfill', true);
    if(!$this.is('[type="text"], [type="password"], [type="email"], textarea')) return;
    $this.wrap('<span style="position:relative" />');
    var $id = $this.attr('id');
    if(!$id) $this.attr('id', $id = 'placeholder-' + (0|Math.random()*1000000).toString(36));
    var l = $('<label class="placeholder" for='+$id+'/>')
      .css({
        position: 'absolute',
        cursor: 'text'
      })
      .text($this.attr('placeholder'))
      .insertBefore($this);

    $this.removeAttr('placeholder');

    function update(){
      if($this.val() == ''){
        l.show();
      }else{
        l.hide();
      }
    }

    $this.bind('change keyup keydown', update);

    $this.focus(function(){
      l.addClass('focused');
    });

    $this.blur(function(){
      l.removeClass('focused');
    });

    update();
      
    // Password managers can be varying degrees of slow.
    setTimeout(update, 100);
    setTimeout(update, 500);
    setTimeout(update, 1000);
  }

  $.fn.placeholder = function(){
    return this.each(doPlaceholder);
  };
})(jQuery);


