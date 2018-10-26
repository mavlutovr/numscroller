/**
 * jQuery scroroller Plugin 1.0
 *
 * http://www.tinywall.net/
 *
 * Developers: Arun David, Boobalan
 * Copyright (c) 2014
 */
(function ($) {

	var zipPoint = $("<div style='position:fixed;top:0px;left:0px;width:0;height:0;'" +
		" id='scrollzipPoint'></div>");

	$(window).on("load", function () {
		$(document).scrollzipInit();
		$(document).rollerInit();
	});
	$(document).ready(function () {
		$(document).scrollzipInit();
		$(document).rollerInit();
	});
	$(window).on("load scroll resize", function () {
		$('.numscroller').scrollzip({
			showFunction: function () {
				numberRoller($(this).attr('data-slno'));
			},
			wholeVisible: false,
		});
	});
	$.fn.scrollzipInit = function () {
		$('body').prepend(zipPoint);
	};
	$.fn.rollerInit = function () {
		var i = 0;
		$('.numscroller').each(function () {
			i++;
			$(this).attr('data-slno', i);
			$(this).addClass("roller-title-number-" + i);
		});
	};
	$.fn.scrollzip = function (options) {
		var settings = $.extend({
			showFunction: null,
			hideFunction: null,
			showShift: 0,
			wholeVisible: false,
			hideShift: 0,
		}, options);
		return this.each(function (i, obj) {
			$(this).addClass('scrollzip');
			if ($.isFunction(settings.showFunction)) {
				if (
					!$(this).hasClass('isShown') &&
					(
						$(window).outerHeight()
						+ zipPoint.offset().top
						- settings.showShift

					) > ($(this).offset().top + ((settings.wholeVisible) ? $(this).outerHeight() : 0)) &&
					(zipPoint.offset().top + ((settings.wholeVisible) ? $(this).outerHeight() : 0)) < ($(this).outerHeight() + $(this).offset().top - settings.showShift)
				) {
					$(this).addClass('isShown');
					settings.showFunction.call(this);
				}
			}
			if ($.isFunction(settings.hideFunction)) {
				if (
					$(this).hasClass('isShown') &&
					(($(window).outerHeight() + zipPoint.offset().top - settings.hideShift) < ($(this).offset().top + ((settings.wholeVisible) ? $(this).outerHeight() : 0)) ||
						(zipPoint.offset().top + ((settings.wholeVisible) ? $(this).outerHeight() : 0)) > ($(this).outerHeight() + $(this).offset().top - settings.hideShift))
				) {
					$(this).removeClass('isShown');
					settings.hideFunction.call(this);
				}
			}
			return this;
		});
	};

	function numberRoller(slno) {
		var min = $('.roller-title-number-' + slno).attr('data-min');
		var max = Number($('.roller-title-number-' + slno).attr('data-max').replace(' ', ''));
		var timediff = $('.roller-title-number-' + slno).attr('data-delay');
		var increment = $('.roller-title-number-' + slno).attr('data-increment');
		var delimiter = $('.roller-title-number-' + slno).attr('data-delimiter');

		var frames = Number(timediff) * 1000 / 30;

		if (!increment) {
			increment = max / frames;
		}

		var numdiff = max - min;

		var timeout = timediff / frames;
		//var timeout = (timediff * 1000) / numdiff;
		//if(numinc<10){
		//increment=Math.floor((timediff*1000)/10);
		//}//alert(increment);
		numberRoll(slno, min, max, increment, delimiter, timeout);

	}

	var delimite = function (number, delimiter) {

		number = Math.round(number);

		if (typeof delimiter === 'string') {
			return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
		}
		return number;
	};

	function numberRoll(slno, min, max, increment, delimiter, timeout) {

		if (min <= max) {

			var delimited = delimite(min, delimiter);

			$('.roller-title-number-' + slno).html(delimited);
			min = Number(min) + Number(increment);
			setTimeout(function () {
				numberRoll(
					eval(slno),
					eval(min),
					eval(max),
					eval(increment),
					delimiter,
					eval(timeout)
				)
			}, timeout);
		} else {
			var delimited = delimite(max, delimiter);
			$('.roller-title-number-' + slno).html(delimited);
		}
	}
})(jQuery);