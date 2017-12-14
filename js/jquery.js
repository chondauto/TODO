$( document ).keypress(function(e) {
    var input = $('.input');
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if( keycode == '13'){
        $('<p style = "font-size: 25px; border-bottom: 1px solid gray">'+input.val()+'</p>').appendTo('div.test'); 
        $(input).val('');
}})

