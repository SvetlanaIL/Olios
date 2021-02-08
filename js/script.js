// Открытие правого меню
$('.header__hamb').click(function(e) {
	$('.header__right').toggleClass('active');
	$('.header__menu-items').toggleClass('active');
	$('.header__hamb').css('background', 'none').toggleClass('active');
});

// Кнопка бургер
$('.header__hamb active').click(function(e) {
	$('.header__right').toggleClass('active');
	$('.header__menu-items').toggleClass('active');
});

// Кнопка раскрытия доп продуктов
$('.living-room__button').click(function(e) {
	$('.living-room__content-inner-2').show(1000).css('display', 'flex');
	$('.living-room__button').hide();
});

// Кнопки увеличения изображения
$('.scale-up').click(function(e) {
	$('#red-seat-big').css({
		width: '343px',
		height: '354px',
		transition: '0.3s'
	});
	$('#scale-up-img').css('opacity', '0.5');
	$('.scale-down').addClass('active');
});

$('.scale-down').click(function(e) {
	$('#red-seat-big').css({
		width: '293px',
		height: '304px'
	});
	$('#scale-up-img').css('opacity', '1');
	$('.scale-down').removeClass('active');
});

// Счетчик кол-ва товара

$('.quantity__minus').click(function () {
	var $input = $(this).parent().find('input');
	var count = parseInt($input.val()) - 1;
	count = count < 1 ? 1 : count;
	$input.val(count);
	$input.change();
	return false;
});
$('.quantity__plus').click(function () {
	var $input = $(this).parent().find('input');
	$input.val(parseInt($input.val()) + 1);
	$input.change();
	return false;
});