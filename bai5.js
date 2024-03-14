$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye'); 
        if($(this).hasclass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type','password');
        }
    });
});

