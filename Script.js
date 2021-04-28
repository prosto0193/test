$(document).ready(function () {
    var ot = $('.ot_pers').html();
    var to = $('.to_pers').html();
    var price = $('.price_menu_span').html();
    var price_decor = $('.price_decor').html();
    var price_intermediate;
    $(window).load(function () {
        $('.count_person').html("<b>" + ot + "</b>");
        $('.price_span').html(price);
        price_intermediate = $('.price_span').html();
    })
    var count = ot;
    $('#pl').click(function () {
        if (count == to) {
            count = to;
        } else {
            count++;
            $('.count_person').html("<b>" + count + "</b>");
            $('.price_span').html(parseInt(price / ot * count));
            price_intermediate = $('.price_span').html();
        }
    })
    $('#min').click(function () {
        if (count == ot) {
            count = ot;
        } else {
            count--;
            $('.count_person').html("<b>" + count + "</b>");
            $('.price_span').html(parseInt(price / ot * count));
            price_intermediate = $('.price_span').html();
        }
    });

    var main_name_menu;

    $('.choose_decor').click(function () {
        $("html, body").animate({scrollTop:0},"slow")
        $('#container_product').addClass('display_none');
        $('#hall').removeClass('display_none').addClass('display_block');
        main_name_menu = $('.main_name_menu').html();
    })
    var test_price;
    var itog_summa;
    var flag_click;
    var title_decor;
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }
    flag_click = getRandomInt(1000, 1999);
    $('.btn-info').attr('id', flag_click);
    $('.btn-info').click(function () {
        if ($(this).is('#' + flag_click)){
            itog_summa = 0;
            test_price = $(this).parent().children('p').children('b').children('.price_decor').html();
            $(this).parent().append('<p class="fst-italic test">Промежуточная сумма: <span class="price_decor_intermediate">' + (Number(test_price) * count + Number(price_intermediate)) + '</span> $</p>');
            itog_summa = Number(test_price) * count + Number(price_intermediate);
            $(this).removeClass('btn-info').addClass('btn-warning');
            $(this).html('Выбрать вариацию');
            $(this).attr('id', '0');
        }
        else{
            if($(this).is('#0')){
                $("html, body").animate({scrollTop:0},"slow")
            itog_summa = $(this).parent().children('.test').children('span').html();
            test_price = $(this).parent().children('p').children('b').children('.price_decor').html();
            title_decor = $(this).parent().parent().parent().children('.title_decor_js').children('h4').children('b').html();
            $('#hall').removeClass('display_block').addClass('display_none');
            $('#premises').removeClass('display_none').addClass('display_block');
            $('#premises').children('.test_znach').html('Итоговая сумма: <span class="itog_price"><b>' + itog_summa + '</b>$</span>.<br> Выбранный декор: <span><b>' + title_decor + '</b></span>.');
            }
        }
    })

    var flag_click_pre = getRandomInt(2000, 2999);
    var test_price_premises;
    var title_premises;
    $('.btn-success').attr('id', flag_click_pre);
    $('.btn-success').click(function () {
        if ($(this).is('#' + flag_click_pre)){
            test_price_premises = $(this).parent().children('p').children('b').children('.price_premises').html();
            $(this).parent().append('<p class="fst-italic test">Промежуточная сумма: <span class="price_decor_intermediate">' + (Number(test_price_premises) + Number($('.premises').children('.test_znach').children('.itog_price').children('b').html())) + '</span> $</p>');
            
            $(this).removeClass('btn-success').addClass('btn-warning');
            $(this).html('Выбрать зал');
            $(this).attr('id', '0');
        }
        else{
            if($(this).is('#0')){
                $("html, body").animate({scrollTop:0},"slow")
                itog_summa = Number($(this).parent().children('p').children('b').children('.price_premises').html()) + Number($('.premises').children('.test_znach').children('.itog_price').children('b').html());
                test_price_premises = $(this).parent().children('p').children('b').children('.price_premises').html();
                title_premises = $(this).parent().parent().parent().children('.title_premises_js').children('h4').children('b').html();
                $('#premises').removeClass('display_block').addClass('display_none');
                $('#itog_page').removeClass('display_none').addClass('display_block');
                $('.choose_menu').children('.accordion-item').children('h2').children('button').html(main_name_menu);
                $('.choose_menu_price').html(price_intermediate);
                $('.choose_decor_price').html(test_price);
                $('.name_choose_decor').html(title_decor);
                $('.choose_premises_price').html(test_price_premises);
                $('.name_choose_premises').html($(this).parent().parent().parent().children('.title_premises_js').children('h4').children('b').html());
                $('.choose_count_person').html(count);
                $('.choose_price_itog').html(itog_summa);
                // $('#premises').children('.test_znach').html('Итоговая сумма: <span><b>' + itog_summa + '</b></span>. Выбранный декор: <span><b>' + title_decor + '</b></span>.');
            }
        }
    })

    $('.ok_itog').click(function () {
        swal("Заказ принят!", "Отправлен на обработку, ждите ответа", "success");
        $(this).addClass('display_none');
        $(this).parent().html('<button type="button" class="btn btn-warning ok_itog_to_main"><a href="index.html">Вернуться на главную</a></button>');
    })
    

    $('.form-check-input').click(function () {
        if ($('.form-check-input').is(':checked')) {
            $('.password_text').attr('type', 'text');
        } else {
            $('.password_text').attr('type', 'password');
        }
    })

    $('.ch_1').click(function () {
        if ($('.ch_1').is(':checked')) {
            $('.password_text_first').attr('type', 'text');
        } else {
            $('.password_text_first').attr('type', 'password');
        }
    })

    $('.ch_2').click(function () {
        if ($('.ch_2').is(':checked')) {
            $('.password_text_second').attr('type', 'text');
        } else {
            $('.password_text_second').attr('type', 'password');
        }
    })

    $('#vhod').click(function () {
        if ($('.password_text').val() == '' || $('.login_text').val() == '') {
            $('.tit_error').html('<b style="color: red;">Поля не должны быть пустыми</b>');
        } else {
            $('.tit_error').html('<b style="color: green;">Success</b>');
        }
    })

    var fl_len = 0;
    var fl_let = 0;
    var fl_cap = 0;
    var fl_num = 0;

    $('.check_in_end').click(function () {
        if ($('.fio_text').val() == '' || $('.email_text').val() == '' || $('.password_text_first').val() == '' ||
            $('.password_text_second').val() == '') {
            $('.tit_error').html('<b style="color: red;">Поля не должны быть пустыми</b>');
        } else {
            if (fl_cap == 0 || fl_len == 0 || fl_let == 0 || fl_num == 0) {
                $('.tit_error').html('<b style="color: red;">Не выполнены условия</b>');
            } else {
                if ($('.password_text_second').val() != $('.password_text_first').val()) {
                    $('.tit_error').html('<b style="color: red;">Пароли не совпадают</b>');
                } else {
                    $('.tit_error').html('<b style="color: green;">Success</b>');
                }
            }
        }
    })

    $('.password_text_first').keyup(function () {
        var pass = $(this).val();
        if (pass.length > 8) {
            $('#len').removeClass('len_er').addClass('len');
            $('.text_len').html('<b> ✔️ Не менее 8 символов</b>');
            fl_len = 1;
        } else {
            $('#len').removeClass('len').addClass('len_er');
            $('.text_len').html('<b>Не менее 8 символов</b>');
            fl_len = 0;
        }

        if (pass.match(/[A-z]/)) {
            $('#letter').removeClass('letter_er').addClass('letter');
            $('.text_let').html('<b> ✔️ Минимум одна буква</b>');
            fl_let = 1;
        } else {
            $('#letter').removeClass('letter').addClass('letter_er');
            $('.text_let').html('<b>Минимум одна буква</b>');
            fl_let = 0;
        }

        if (pass.match(/[A-Z]/)) {
            $('#cap').removeClass('cap_er').addClass('cap');
            $('.text_cap').html('<b> ✔️ Минимум одна заглавная буква</b>');
            fl_cap = 1;
        } else {
            $('#cap').removeClass('cap').addClass('cap_er');
            $('.text_cap').html('<b>Минимум одна заглавная буква</b>');
            fl_cap = 0;
        }

        if (pass.match(/[0-9]/)) {
            $('#number').removeClass('number_er').addClass('number');
            $('.text_nam').html('<b> ✔️ Минимум одна цифра</b>');
            fl_num = 1;
        } else {
            $('#number').removeClass('number').addClass('number_er');
            $('.text_nam').html('<b>Минимум одна цифра</b>');
            fl_num = 0;
        }
    })

    

});