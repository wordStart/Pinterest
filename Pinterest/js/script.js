$(window).on('load',function(){
	waterfall();
	var dataInt = {"data":[{"src":"0.jpg"},{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"}]}
	$(window).on('scroll',function(){
		if(sideScrollSlide){
			$.each(dataInt.data,function(key,value){
				var oBox = $('<div>').addClass('pin').appendTo($('#main'));
				var oPic = $('<div>').addClass('box').appendTo($(oBox));
				$('<img>').attr('src','img/'+$(value).attr('src')).appendTo($(oPic));
				//oPic.append(oImg);

				
			})
			waterfall();
		}
	})
});
function waterfall(){
	var $boxs = $('#main>div');
	var w = $boxs.eq(0).outerWidth();
	var cols = Math.floor($(window).width()/w);
	$('#main').width(w*cols).css('margin','0 auto');
	var hArr = [];
	$boxs.each(function(index,value){
		var h = $boxs.eq(index).outerHeight();
		if(index<cols){
			hArr[index] = h;
		}else{
			var minH = Math.min.apply(null,hArr);
			var minHIndex = $.inArray(minH,hArr);
			$(value).css({
				"position":"absolute",
				"top":minH+"px",
				"left":w*minHIndex+"px"
			})
			hArr[minHIndex] += $boxs.eq(index).outerHeight();
		}
		console.log(hArr);
	})
	console.log(cols);
}

function sideScrollSlide(){
	var $lastBox = $('#main>div').last();
	var $lastBoxDis = $lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	var documentH = $(window).height();
	var scrollTop = $(window).scrollTop();
	return ($lastBoxDis<documentH+scrollTop?true:false);
}

