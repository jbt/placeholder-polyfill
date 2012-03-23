(function($){
  var alreadySupported = 'placeholder' in document.createElement('input');

  function doPlaceholder(){
    if(alreadySupported) return;
    var $this = $(this);
    if(!$this.is('[type="text"], [type="password"], [type="email"], textarea')) return;
    $this.wrap('<span style="position:relative" />');
    var $id = $this.attr('id');
    if(!$id) $this.attr('id', $id = 'placeholder-' + (0|Math.random()*1000000).toString(36));
    var l = $('<label for='+$id+'/>')
      .css({
        position: 'absolute',
        cursor: 'text'
      })
      .text($this.attr('placeholder'))
      .insertBefore($this);

    $this.bind('change keyup keydown', function(changed){
      if($this.val() == ''){
        l.show();
      }else{
        l.hide();
      }
    });

    $this.focus(function(){
      l.addClass('focused');
    });

    $this.blur(function(){
      l.removeClass('focused');
    });
  }

  $.fn.placeholder = function(){
    return this.each(doPlaceholder);
  };
})(jQuery);
