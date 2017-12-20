$('.accordion').on('click', function(e){
    e.preventDefault();
    
    var href = $(this).attr("href");

    $(href).slideToggle();

});