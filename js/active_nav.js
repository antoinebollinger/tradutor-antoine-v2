$(window).load(function(){
	var mainItems = $("#main_main").children().length,
	menuItems = $("nav").find("li"),
	id_header,curId,
	headerItems = $("#main_main_0 h1").length;
	$('body').css('height',((mainItems*100)+10)+'%');
	if ($("#menu_icon").css("display") == 'none') {	
		activeNav(getId());
		bgPercent(scrollPercent());
	} else {
		activeNav_mobile();
	}
	menuItems.click(function(e){
		var target_id = parseInt($(this).attr("id").substring(12));
		if ($("#menu_icon").css("display") == 'none') {
			var offsetTop = target_id*$("html").height()+50;
		} else {
			var offsetTop = $("#main_main_"+target_id).offset().top-50;
		}
		$('html, body').stop().animate({scrollTop: offsetTop}, 300);
		e.preventDefault();
	});
	$(window).scroll(function(){
		if ($("#menu_icon").css("display") == 'none') {
			activeNav(getId());
			bgPercent(scrollPercent());
		} else {
			activeNav_mobile();
		}
	});
	function getId() {
		var id = parseInt(mainItems - (((5*$("html").height())-($(window).scrollTop()))/ $("html").height()));
		return id;
	}
	function activeNav(id) {
		if (id > 0) {
			$("footer").addClass('active');
			$("nav").addClass('active');
			$("body").addClass('active');
		} else {
			$("footer").removeClass('active');
			$("nav").removeClass('active');
			$("body").removeClass('active');
		}
		$("nav li").removeClass('active');
		$("#main_nav_li_"+id).addClass('active');
		for (var i=0; i<mainItems; i++) {
			if (i < id) {$("#main_main_"+i).removeClass('active').addClass('active_out');}
			if (i == id) {$("#main_main_"+i).removeClass('active_out').addClass('active');}
			if (i > id) {$("#main_main_"+i).removeClass('active active_out');}
		}
	}
	function activeNav_mobile() {
		$(".main_main").each(function() {
			var scrollId = $(this).offset().top-$(window).scrollTop()-51;
			if (scrollId <= 0) {
				curId = $(this).attr("id").substring(10);
			}
		});
		if ($(window).scrollTop() > 0) {
			$("body").addClass('active');
		} else {
			$("body").removeClass('active');
		}
		$("nav li").removeClass('active');
		$("#main_nav_li_"+curId).addClass('active');		
	}
	function scrollPercent() {
		percent = 100-((100/($("body").height()-$("html").height()))*($(window).scrollTop()));
		return percent;
	}
	function bgPercent(percent) {
		if (!$('body').hasClass('unactive')) {
			$("body").css("background-position","100% "+(percent)+"%");
		}
	}
	//ANIMATION
	$("#rejouer_anime").click(function() {
		if ($(this).hasClass('active')) {anime_reset();anime();}
	});
	$("#pause_anime").click(function() {
		if (!$(this).hasClass('unvisible')) {
			pause();
		}
	});
	$("#main_main_0 .sub_main_barre_sub").click(function() {
		if (!$(this).hasClass('pause')) {
			pause();
		} else {
			jouer();
		}
	});
	$("#jouer_anime").click(function() {
		if (!$(this).hasClass('unvisible')) {
			jouer();
		}
	});	
	function pause() {
		$("#pause_anime").addClass('unvisible');
		$("#jouer_anime").removeClass('unvisible');
		$("#pause_anime").addClass('pause');
		$("#jouer_anime").addClass('pause');
		$("#rejouer_anime").addClass('pause');
		$("#main_main_0 h1").addClass('pause');
		$("#main_main_0 .sub_main_bg").addClass('pause');
		$("#main_main_0 .sub_main_fg").addClass('pause');
		$("#main_main_0 .sub_main_barre_sub").addClass('pause');		
	}
	function jouer() {
		$("#jouer_anime").addClass('unvisible');
		$("#pause_anime").removeClass('unvisible');
		$("#jouer_anime").removeClass('pause');
		$("#pause_anime").removeClass('pause');
		$("#rejouer_anime").removeClass('pause');			
		$("#main_main_0 h1").removeClass('pause');
		$("#main_main_0 .sub_main_bg").removeClass('pause');
		$("#main_main_0 .sub_main_fg").removeClass('pause');
		$("#main_main_0 .sub_main_barre_sub").removeClass('pause');			
	}
	anime();
	function anime() {
		setTimeout(anime_tmp,400);
	}
	function anime_reset() {
		$("#main_main_0 .sub_main_bg").removeClass('active').addClass('unactive');
		$("#main_main_0 .sub_main_fg").removeClass('active').addClass('unactive');
		$("#main_main_0 .sub_main_barre_sub").removeClass('active');		
		$("#main_main_0 h1").removeClass('active');	
		$("#rejouer_anime").removeClass('active');	
		$("#jouer_anime").removeClass('active');
		$("#jouer_anime").addClass('unvisible');
		$("#pause_anime").removeClass('active');	
		
	}
	function anime_tmp() {
		id_header = 1; 
		if ($("#menu_icon").css("display") == 'none') {
			var total = 10,multi = 3.5;
		} else {
			var total = 5,multi = 2;			
		}
		for (var i=0;i<headerItems;i++) {
			var id=i+1,
			delai = multi*Math.sqrt((4/(headerItems-1))*i),
			duration = total-delai;
			$("#header_"+id).css("animation-duration",duration+"s");
			setTimeout(header,1000*delai);
		}
		$("#main_main_0 .sub_main_bg").removeClass('unactive').addClass('active');	
		$("#main_main_0 .sub_main_fg").removeClass('unactive').addClass('active');
		$("#main_main_0 .sub_main_barre_sub").addClass('active');		
		$("#rejouer_anime").addClass('active');
		$("#pause_anime").addClass('active');
		$("#jouer_anime").addClass('active');
	}
	function header() {
		if (id_header <= headerItems) {
			$("#header_"+id_header).addClass("active");
		}
		id_header++;
	}
});
