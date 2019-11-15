$('.portfolio-list-item').on('click', function(){
    $('.portfolio-list-item').removeClass('selected');
    $(this).addClass('selected');
});