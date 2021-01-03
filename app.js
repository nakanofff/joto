$(function(){
    $('.open_button').click(function(){
        $('#sm_menu').css('transform','translateX(0)');
    })
    $('.close_button').click(function(){
        $('#sm_menu').css('transform','translateX(100%)');
    })
});