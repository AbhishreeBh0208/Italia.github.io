$('#c1').click(() => {
    $('#c1').addClass('selected');
    $('#c2').removeClass('selected');
    $('#c3').removeClass('selected');
    if ($('#donation2').hasClass('current')) {
        $('#donation2').removeClass('current');
        $('#donation1').addClass('current');
        $('#donation1').css('transform', 'translateY(0)');
        $('#donation2').css('transform', 'translateY(100%)');
    } else {
        $('#donation1').addClass('current');
        $('#donation3').removeClass('current');
        $('#donation1').css('transform', 'translateY(0)');
        $('#donation2').css('transform', 'translateY(100%)');
        $('#donation3').css('transform', 'translateY(200%)');
    }
})

$('#c2').click(() => {
    $('#c2').addClass('selected');
    $('#c1').removeClass('selected');
    $('#c3').removeClass('selected');
    if ($('#donation1').hasClass('current')) {
        $('#donation2').addClass('current');
        $('#donation1').removeClass('current');
        $('#donation2').css('transform', 'translateY(0%)');
        $('#donation1').css('transform', 'translateY(-150%)');
        $('#donation3').css('transform', 'translateY(100%)');
    } else {
        $('#donation2').addClass('current');
        $('#donation3').removeClass('current');
        $('#donation2').css('transform', 'translateY(0%)');
        $('#donation3').css('transform', 'translateY(100%)');
    }
})

$('#c3').click(() => {
    $('#c3').addClass('selected');
    $('#c2').removeClass('selected');
    $('#c1').removeClass('selected');
    if ($('#donation1').hasClass('current')) {
        $('#donation3').addClass('current');
        $('#donation1').removeClass('current');
        $('#donation3').css('transform', 'translateY(0%)');
        $('#donation1').css('transform', 'translateY(-150%)');
        $('#donation2').css('transform', 'translateY(-150%)');
    } else {
        $('#donation3').addClass('current');
        $('#donation2').removeClass('current');
        $('#donation2').css('transform', 'translateY(-150%)');
        $('#donation3').css('transform', 'translateY(0%)');
    }
})