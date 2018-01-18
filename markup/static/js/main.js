
const $ = require('jquery');
const time = require('./plugins/easytimer.min.js');


document.addEventListener("DOMContentLoaded", function () {

	var timer = new time();
	// var secondTimer = new time();



	if($('.test-1').is('.is-active')){

		timer.start();
		timer.addEventListener('secondsUpdated', function (e) {
			$('.test-1 .time__min').html(timer.getTimeValues().toString(['minutes'], '.', 2));
			$('.test-1 .time__sec').html(timer.getTimeValues().toString(['seconds'], '.', 2));
		});
	}

	$('.btn_next').on('click', function () {
		var $this = $(this);
		var $next = $this.parents('.test').next();

		// обрабатываю затраченое время
		if($('.test-1').is('.is-active')){
			timer.pause();
			// показываю затраченое время этого теста в консоль
			console.log($(this).parents('.test').find('.time__min').html() + ' minutes is result $1 ');
			console.log($(this).parents('.test').find('.time__sec').html() + ' seconds is result $1 ' );
			// обнуляю все показатели в html
			restartTimer();
		}

		if($next.is('.test-4')){
			timer.start();
			timer.addEventListener('secondsUpdated', function (e) {
				$('.test-4 .time__min').html(timer.getTimeValues().toString(['minutes'], '.', 2));
				$('.test-4 .time__sec').html(timer.getTimeValues().toString(['seconds'], '.', 2));
			});
		}

		if($('.test-4').is('.is-active')){
			var $this = $(this);

			timer.pause();
			// показываю затраченое время этого теста в консоль
			console.log($(this).parents('.test').find('.time__min').html() + ' minutes is result $4 ');
			console.log($(this).parents('.test').find('.time__sec').html() + ' seconds is result $4 ' );
			// обнуляю все показатели в html
			restartTimer();
		}

		$(this).parents('.test').hide().removeClass('is-active').next('.test').show().addClass('is-active');
		getNav($this);
	});

	$('.btn_finish').on('click', function () {
		var $this = $(this);

		$(this).parents('.test').hide().removeClass('is-active');
		$('.result-1').addClass('is-active');
		getNav($this);
	});

	$('.btn_restart').on('click', function () {
		var $this = $(this);

		$('.test').hide();
		$('.test-1').show().addClass('is-active');
		$('.nav__item, .result').removeClass('is-active');
		$('.nav-1').addClass('is-active');
		getNav($this);

		// start first timer test

		if($('.test-1').is('.is-active')){

			timer.start();
			timer.addEventListener('secondsUpdated', function (e) {
				$('.test-1 .time__min').html(timer.getTimeValues().toString(['minutes'], '.', 2));
				$('.test-1 .time__sec').html(timer.getTimeValues().toString(['seconds'], '.', 2));
			});
		}

	});

	function getNav(a) {
		var atr = a.data('nav');
		$('.' + atr).addClass('is-active');
	}

	function restartTimer() {
		// обнуляю все показатели в html
		timer.stop();
		$('.test').each(function () {
			$(this).find('.time__min').html(timer.getTimeValues().toString(['minutes'], '.', 2));
			$(this).find('.time__sec').html(timer.getTimeValues().toString(['seconds'], '.', 2));
		});
	}
});
