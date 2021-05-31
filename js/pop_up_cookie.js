function popup1() {
    var day3_1 = $('#1_day3');
    var allDay_1 = $('#1_allday');
    $('#closebtn1').click(function() {
        if (day3_1.is(':checked')) {
            $.cookie('day3close1', 'true', {
                expires: 1,
                path: '/'
            });
        } else if (allDay_1.is(':checked')) {
            $.cookie('alldayclose1', 'true', {
                expires: 99999,
                path: '/'
            });
        };
        $('.pop_up1').hide();
    });
    if ($.cookie('day3close1') == 'true' || $.cookie('alldayclose1') == 'true') {
        $('.pop_up1').hide();
    } else {
        $('.pop_up1').show();
    }
    day3_1.click(function() {
        if ($(this).is(':checked')) {
            allDay_1.prop('checked', false);
        }
    });
    allDay_1.click(function() {
        if ($(this).is(':checked')) {
            day3_1.prop('checked', false);
        }
    });
}

function popup2() {
    var day3_2 = $('#2_day3');
    var allDay_2 = $('#2_allday');
    $('#closebtn2').click(function() {
        if (day3_2.is(':checked')) {
            $.cookie('day3close2', 'true', {
                expires: 1,
                path: '/'
            });
        } else if (allDay_2.is(':checked')) {
            $.cookie('alldayclose2', 'true', {
                expires: 99999,
                path: '/'
            });
        };
        $('.pop_up2').hide();
    });
    if ($.cookie('day3close2') == 'true' || $.cookie('alldayclose2') == 'true') {
        $('.pop_up2').hide();
    } else {
        $('.pop_up2').show();
    }
    day3_2.click(function() {
        if ($(this).is(':checked')) {
            allDay_2.prop('checked', false);
        }
    });
    allDay_2.click(function() {
        if ($(this).is(':checked')) {
            day3_2.prop('checked', false);
        }
    });
}


function popup3() {
    var day3_3 = $('#3_day3');
    var allDay_3 = $('#3_allday');
    $('#closebtn3').click(function() {
        if (day3_3.is(':checked')) {
            $.cookie('day3close3', 'true', {
                expires: 1,
                path: '/'
            });
        } else if (allDay_3.is(':checked')) {
            $.cookie('alldayclose3', 'true', {
                expires: 99999,
                path: '/'
            });
        };
        $('.pop_up3').hide();
    });
    if ($.cookie('day3close3') == 'true' || $.cookie('alldayclose3') == 'true') {
        $('.pop_up3').hide();
    } else {
        $('.pop_up3').show();
    }
    day3_3.click(function() {
        if ($(this).is(':checked')) {
            allDay_3.prop('checked', false);
        }
    });
    allDay_3.click(function() {
        if ($(this).is(':checked')) {
            day3_3.prop('checked', false);
        }
    });
}



function popupMo() {
    var day3_mo = $('#mo_day3');
    var allDay_mo = $('#mo_allday');
    $('#MoClosebtn').click(function() {
        if (day3_mo.is(':checked')) {
            $.cookie('day3close1', 'true', {
                expires: 1,
                path: '/'
            });
        } else if (allDay_mo.is(':checked')) {
            $.cookie('alldayclose1', 'true', {
                expires: 99999,
                path: '/'
            });
        };
        $('.pop_up_mo').hide();
    });
    if ($.cookie('day3close1') == 'true' || $.cookie('alldayclose1') == 'true') {
        $('.pop_up_mo').hide();
    } else {
        $('.pop_up_mo').show();
    }
    day3_mo.click(function() {
        if ($(this).is(':checked')) {
            allDay_mo.prop('checked', false);
        }
    });
    allDay_mo.click(function() {
        if ($(this).is(':checked')) {
            day3_mo.prop('checked', false);
        }
    });
}



popup1();
popup2();
// popup3();
popupMo();