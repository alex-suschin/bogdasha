$(function() {

    $('.btn-popup').click(function(e) {
        $(this).addClass('active');

        var popupCont = $('#popup-contacts');


        if (popupCont.hasClass('popup-active') == false) {
            $('#popup-wrap-contacts').addClass('popup-active');
            $('#popup-contacts').addClass('popup-active');
            $('html').addClass('ov-h');


            var firstClick = true;
            $(document).bind('click.myEventPopup', function(e) {
                if (!firstClick && $(e.target).closest('#popup-contacts').length == 0) {
                    $('#popup-wrap-contacts').removeClass('popup-active');
                    $('#popup-contacts').removeClass('popup-active');
                    $('.btn-popup-buy').removeClass('active');
                    $(document).unbind('click.myEventPopup');
                    setTimeout(() => {
                        $('html').removeClass('ov-h');
                    }, 300);
                }

                firstClick = false;
            });
        }

        e.preventDefault();
    });

    $(function() {
        $('.contacts-page-decor').parallax({
            mouseport: $('.contacts-page-box'),
            decay: 0.5
        });
    });

    $('input[type=tel]').bind("change keyup input click", function() {
        if (this.value.match(/[^\+0-9]/g)) {
            this.value = this.value.replace(/[^\+0-9]/g, '');
        }
    });

    $('input[type=tel]').on('focus', function() {
        if ($(this).val() == '') $(this).val('+7');
    });

    $('input[type=tel]').on('blur', function() {
        if ($(this).val() == '+7') $(this).val('');
    });

});