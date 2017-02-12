$(function(){
	$('.grey-btn').on('click', function(){
		$('.content').toggleClass('hidden');
	});
	
    // select
    $('select').selectBoxes({
//            maxHeight : 400 // the maximum height of the dropdown list

    });  
    $('body').sdboxScroll();
	$('.select-element').on('click', function() {
		$('.option-list').not($(this).find('.option-list')).removeClass('show');
    });
});



// ion

var $range = $(".js-range-slider"),
	$from = $(".js-from"),
	$to = $(".js-to"),
	range,
	min = 1000,
	max = 20000,
	from,
	to;

var updateValues = function () {
	$from.prop("value", from);
	$to.prop("value", to);
};

$range.ionRangeSlider({
	type: "double",
	min: min,
	max: max,
	hide_min_max:true,
	prettify_enabled: false,
	postfix: '<span class="rouble">i</span>',
	grid: false,
	grid_num: 10,
	onChange: function (data) {
		from = data.from;
		to = data.to;

		updateValues();
	}
});

range = $range.data("ionRangeSlider");

var updateRange = function () {
	range.update({
		from: from,
		to: to
	});
};

$from.on("change", function () {
	from = +$(this).prop("value");
	if (from < min) {
		from = min;
	}
	if (from > to) {
		from = to;
	}

	updateValues();
	updateRange();
});

$to.on("change", function () {
	to = +$(this).prop("value");
	if (to > max) {
		to = max;
	}
	if (to < from) {
		to = from;
	}

	updateValues();
	updateRange();
});

///////////////скроем меню с селекторами при клике
//скроем меню с селекторами при клике
var clicked=false;
$(".show_hide, .link_1").on('click', function(){
	var  paramout = $('.paramout'),
		parh = $('.parametr').outerHeight();

	if(clicked)
	{
		clicked=false;
		paramout.stop().animate({"height":  parh +"px"}, 1000, function () {
			$(this).removeClass('overflow')
		}  );
	}
	else
	{
		clicked=true;
		paramout.stop().animate({"height":  0 +"px"}, 1000,function () {
			$(this).addClass('overflow')
		}  );

	}

	return false;
});
///////////////////

