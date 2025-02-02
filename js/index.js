var isShow = false;

// 切换黑|白背景
function changeBg(type) {
    if (type === 'day') {
        isDay = false;
        $('.day').removeClass('in').addClass('out');
        $('.night').addClass('in');
        $('.night').show();
        $('#page').addClass('page-night');
        $('body').css({ color: '#fffffe', transition: 'color 1s linear' });
        return;
    }

    $('.day').addClass('in');
    $('.night').removeClass('in').addClass('out');
    $('#page').removeClass('page-night');
    $('body').css({ color: '#2a2a2a', transition: 'color 1s linear' });
}

function clickMe() {
    isShow = !isShow;
    if (isShow) {
        $('#page').addClass('page-rotate');
        $('.info').css({ opacity: 1, transition: 'opacity .2s ease .35s' });
        $('.gril').show();
        $('.bulb').hide();
        return;
    }

    $('#page').removeClass('page-rotate');
    $('.info').css('opacity', 0);
    $('.gril').hide();
    $('.bulb').show();
}

(function ($) {
    console.log($('body').pagewalkthrough);

    // Set up tour
    $('body').pagewalkthrough({
        name: 'introduction',
        steps: [
            { popup: { content: '#walkthrough-1', type: 'modal' } },
            {
                wrapper: '.day',
                popup: {
                    content: '#walkthrough-2',
                    type: 'tooltip',
                    position: 'right',
                }
            },
            {
                wrapper: '.button',
                popup: {
                    content: '#walkthrough-3',
                    type: 'tooltip',
                    position: 'left'
                }
            }
        ]
    });
    // Show the tour
    $('body').pagewalkthrough('show');
})(jQuery);
